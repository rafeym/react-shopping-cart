import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../context/Context'

import './css/Products.css'

const Products = () => {
  const { products } = useContext(DataContext)

  return (
    <div id='product'>
      {products.map((prod) => (
        <div className='card' key={prod._id}>
          <Link to={`/products/${prod._id}`}>
            <img src={prod.src} alt='product' />
          </Link>
          <div className='content'>
            <h3>
              <Link to={`/products/${prod._id}`}>{prod.title}</Link>
            </h3>
            <span>${prod.price}</span>
            <p>{prod.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products
