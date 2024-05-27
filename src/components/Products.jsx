import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getAllProducts } from "../slice/productSlice";
import { Link } from "react-router-dom";
import { toggleLike } from "../slice/likeSlice";
import { toggleCart } from "../slice/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const [radiobtn, setRadioBtn] = useState('');
  const { products, loading, searchData,error } = useSelector((state) => state.products);
  const cartProducts = useSelector((state)=>state.cart.cart)
  console.log(cartProducts)
  const likedProducts = useSelector((state)=>state.like.likes);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      await dispatch(getAllProducts());
    };
    fetchProducts();
  }, [dispatch]);

  const handleDelete = async (id) => {
    await dispatch(deleteProduct(id));
  };

  const handleLike = (id)=>{
    
    dispatch( toggleLike(id))
  }
  const handleCart = (id)=>{
    dispatch(toggleCart(id));
  }

  // Calculate the products to display based on current page
  const filteredProducts = products
    .filter((prod) => {
      if (!searchData) {
        return prod;
      } else {
        return prod.name.toLowerCase().includes(searchData.toLowerCase());
      }
    })
    .filter((prod) => {
      if (radiobtn === 'tv') {
        return prod.category === radiobtn;
      } else if (radiobtn === 'mobile') {
        return prod.category === radiobtn;
      } else {
        return prod;
      }
    });

  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentItems = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return loading ? (
    <h2>Loading</h2>
  ) : (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <input type="radio" name="filter" value="ALL" checked={radiobtn === ''} onChange={() => setRadioBtn('')} /> All
        <input type="radio" name="filter" value="Mobile" checked={radiobtn === 'mobile'} onChange={() => setRadioBtn('mobile')} /> Mobile
        <input type="radio" name="filter" value="TV" checked={radiobtn === 'tv'} onChange={() => setRadioBtn('tv')} /> TV
      </div>
      {error && <div className="error" style={{ color: 'red' }}>{error}</div>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '30px', marginLeft: '30px' }}>
        {currentItems.map((prod, id) => (
          <div key={id} style={{ display: 'flex', flexDirection: 'column', width: '200px', border: '2px solid black', padding: '10px', borderRadius: '5px' }}>
            <p>Name: {prod.name}</p>
            <p>Price: ${prod.price}</p>
            <div>
              <Link to={`/product/${prod.id}`}>View</Link>
              <button onClick={() => handleDelete(prod.id)}>Delete</button>
              <Link to={`/edit/${prod.id}`}>Edit</Link>
              <button onClick={()=>handleLike(prod.id)}>{likedProducts.includes(prod.id) ? "DisLike": "Like"}</button>
              <button onClick={()=>handleCart(prod.id)}>{cartProducts.includes(prod.id)? "Remove":"Add"}</button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px' }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            style={{ margin: '0 5px', padding: '5px 10px', backgroundColor: currentPage === index + 1 ? 'lightblue' : 'white' }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;
