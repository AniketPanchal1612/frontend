import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const {id} = useParams()
    const allProducts = useSelector((state)=>state.products.products);
    console.log(allProducts)
    const singleProduct = allProducts.find((prod)=>prod.id==id)
    console.log(singleProduct)
  return (
    <div style={{marginLeft:'20px'}}>
      <p>Name: {singleProduct.name}</p>
      <p>Detail: {singleProduct.detail}</p>
      <p>Category: {singleProduct.category}</p>      
      <p>Price: {singleProduct.price}</p>


    </div>
  )
}

export default SingleProduct
