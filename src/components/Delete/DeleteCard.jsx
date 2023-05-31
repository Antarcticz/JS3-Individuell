import '../../index.scss'
import '../Card/Card.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';

const DeleteCard = ({ product }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const deleteProductFromDb = async () => {
        await deleteDoc(doc(db, 'products', product.id))
        navigate('/')
    }

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
            <button className='btn btn-danger' onClick={deleteProductFromDb}>DELETE</button>
        </div>
        
    )
}

export default DeleteCard