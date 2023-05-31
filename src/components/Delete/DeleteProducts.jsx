import React from 'react'
import '../Home/Section2/Section2.scss'
import DeleteCard from './DeleteCard'


const DeleteProducts = ({ products }) => {

    return (
        <div className="home-section-2 pb-5">
            <h2>Delete from Database</h2>
            <div className="product-container">

                {
                    products.length > 0
                        ? products.map(product => <DeleteCard key={product.id} product={product} />)
                        : <h2>No products to show</h2>
                }

            </div>
        </div>
    )
}


export default DeleteProducts