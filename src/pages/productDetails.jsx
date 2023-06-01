import '../scssPages/productDetails.scss'
import React from 'react'
import useDoc from '../hooks/useDocs'
import Loader from '../components/Loader/Loader'
import { useParams, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'


const ProductDetails = () => {

  const { id } = useParams()
  const { data: product, error, loading } = useDoc('products', id)
  
  const dispatch = useDispatch()

  if (!product) return (
    <div>
      {loading && <Loader />}
      {error && <p>{error}</p>}
    </div>
  )

  return (
    <div className="container-productdetails">
      <h1>Product Details</h1>
      <div className='productdetails-section-1'>
        <div className='container-left'>
          <div className='img-big'>
            <img src={product.imgUrl} className="img-fluid" />
          </div>
          <div className='img-sm'>
            <img src={product.imgUrl} className="img-fluid" />
            <img src={product.imgUrl} className="img-fluid" />
            <img src={product.imgUrl} className="img-fluid" />
            <img src={product.imgUrl} className="img-fluid" />
          </div>
        </div>
        <div className="container-right">
          <div className="product-info">
            <h2>Name: {product.productName}</h2>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Image URL: {product.imgUrl}</p>
            <p>Id: {product.id}</p>
          </div>
          <div className="btn-group gap-5">
            <Link to={`/edit`} style={{ textDecoration: 'none' }}>
              <button className='btn btn-primary btn-lg mt-3'>EDIT</button>
            </Link>
            <Link to={`/delete`} style={{ textDecoration: 'none' }}>
              <button className='btn btn-danger btn-lg mt-3'>DELETE</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails