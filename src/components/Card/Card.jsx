import '../../index.scss'
import './Card.scss'
import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({ product }) => {
    return (
        
        <div className="card mt-4">
            <Link to={`/product-details/${product.id}`} style={{ textDecoration: 'none' }}>
                <div className="home-product-card">
                    <img className='card-img' src={product.imgUrl} alt={product.productName} />
                    <p className='card-title pt-3'>Name: {product.productName.slice(0, 15)}...</p>
                    <p className='card-text'>Description: {product.description.slice(0, 15)}...</p>
                    <p className='card-price'>Price: ${product.price}</p>
                    <p className='card-id'>Id: {product.id}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card