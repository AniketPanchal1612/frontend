import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateProduct } from '../slice/productSlice'

const Update = () => {
    const {id} = useParams()
    const [product,setProduct] = useState({})
    const allProducts = useSelector((state)=>state.products.products)
    const dispatch = useDispatch()
    const getValues = (e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
    }
    const navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log(product)
        dispatch(updateProduct(product));
        navigate('/')
    }
    useEffect(()=>{
        const singleProduct = allProducts.find((prod)=>prod.id === id)
    
        // console.log(singleProduct)
        setProduct(singleProduct)
    },[])
  return (
    <div>
      <form action="" onSubmit={(e)=>handleSubmit(e)} >
        <input type="text" placeholder='name' name='name' value={product.name} onChange={(e)=>getValues(e)} />
        <input type="text" placeholder='details' name='detail' value={product.detail} onChange={(e)=>getValues(e)} />
        <input type="text" placeholder='category' name='category' value={product.category} onChange={(e)=>getValues(e)} />
        <input type="number" placeholder='price' name='price' value={product.price} onChange={(e)=>getValues(e)} />
        <button type="submit">Update </button>

      </form>
    </div>
  )
}

export default Update
