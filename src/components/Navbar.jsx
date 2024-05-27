import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchData } from '../slice/productSlice';

const Navbar = () => {
    const allProducts = useSelector((state)=>state.products.products);
    const likedProducts = useSelector((state)=>state.like.likes);
    const cartProducts = useSelector((state)=>state.cart.cart)
    const [search,setSearch] = useState()
    const dispatch = useDispatch()
    

    useEffect(()=>{
      dispatch(searchData(search))
    },[search])

  return (
    <nav style={{display:'flex', justifyContent:'space-evenly'}}>
        <Link to="/">Products({allProducts?.length})</Link>
        <Link to="/add">Add Product</Link>
        <Link to="/likes">Likes({likedProducts?.length})</Link>
        <Link to="/cart">Cart({cartProducts?.length})</Link>


        <input type="text" placeholder='Search...' value={search} onChange={(e)=>setSearch(e.target.value)} />
    </nav>
  )
}

export default Navbar
