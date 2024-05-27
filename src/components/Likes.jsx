import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Likes = () => {
    const allProducts = useSelector((state)=>state.products.products)
    const likeProducts = useSelector((state)=>state.like.likes)

    const likedItems = allProducts.filter((prod)=> likeProducts.includes(prod.id));
    console.log(likeProducts)
  return (
    <div>
       <h2>Liked Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '30px', marginLeft: '30px' }}>
        {likedItems.map((prod, id) => (
          <div key={id} style={{ display: 'flex', flexDirection: 'column', width: '200px', border: '2px solid black', padding: '10px', borderRadius: '5px' }}>
            <p>Name: {prod.name}</p>
            <p>Price: ${prod.price}</p>
            <div>
              <Link to={`/product/${prod.id}`}>View</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Likes
