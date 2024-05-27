import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProduct, deleteProduct } from '../slice/productSlice'

const AddProduct = () => {

    const [product,setProduct] = useState({})
    const dispatch = useDispatch()
    const navigate=  useNavigate()

    const getValues= (e)=>{
        setProduct({...product,[e.target.name]:e.target.value})

    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        // console.log(product)
        await dispatch(addProduct(product))
        navigate('/')
    }
  return (
    <div>
      <form action="" onSubmit={(e)=>handleSubmit(e)} >
        <input type="text" placeholder='name' name='name' onChange={(e)=>getValues(e)} />
        <input type="text" placeholder='details' name='detail' onChange={(e)=>getValues(e)} />
        <input type="text" placeholder='category' name='category' onChange={(e)=>getValues(e)} />
        <input type="number" placeholder='price' name='price' onChange={(e)=>getValues(e)} />
        <button type="submit">Add </button>

      </form>
    </div>
  )
}

export default AddProduct
