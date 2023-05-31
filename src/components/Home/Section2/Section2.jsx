import './Section2.scss'
import Card from '../../Card/Card'
import React from 'react'


const Section2 = ({ products }) => {

    return (
        <div className="home-section-2 pb-5">
            <h2>Products</h2>
            <div className="product-container">

                {
                    products.length > 0
                        ? products.map(product => <Card key={product.id} product={product} />)
                        : <h2>No products to show</h2>
                }

            </div>
        </div>
    )
}


export default Section2