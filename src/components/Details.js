import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../context/Context'
import { Link } from 'react-router-dom'
import './css/Details.css'

const Details = (props) => {
  const { id } = props.match.params
  const { products } = useContext(DataContext)
  const [product, setProduct] = useState([])

  const getProducts = () => {
    if (id) {
      const res = products
      const data = res.filter((prod) => prod._id === id)
      setProduct(data)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      {product.map((prod) => (
        <div className='details' key={prod._id}>
          <img src={prod.src} alt='' />
          <div className='box'>
            <div className='row'>
              <h2>{prod.title}</h2>
              <span>${prod.price}</span>
            </div>
            <div className='colors'>
              {prod.colors.map((color, index) => (
                <button key={index} style={{ background: color }}></button>
              ))}
            </div>
            <p>{prod.description}</p>
            <p>{prod.content}</p>
            <Link to='/cart' className='cart'>
              Add to Cart
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default Details
