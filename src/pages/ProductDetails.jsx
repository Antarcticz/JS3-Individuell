import '../scssPages/productDetails.scss'
import React from 'react'
import useDoc from '../hooks/useDocs'
import Loader from '../components/Loader/Loader'
import { FaCartPlus } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
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
    <div className="container-productDetails">
      <div className='banner'>
        <img src="https://static.euronews.com/articles/stories/06/48/94/10/1440x810_cmsv2_72145961-5fb7-5e54-852d-997299cf9e10-6489410.jpg" alt="" />
      </div>
      {/* ____________________________________SECTION 1____________________________________ */}
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
            <h2>{product.productName}</h2>
            <p>{product.description}</p>
          </div>
          <div className="reviews">
            <div className='stars'>
              <p>&#9733;&#9733;&#9733;&#9733;&#9733;&nbsp;</p>
            </div>
            <div className='review-nr'>
              <p>16 Reviews</p>
            </div>
          </div>
          <div className="price">
            <p>${product.price}</p>
          </div>
          <div className="addToCart">
            
            <button className='btn-minus'>-</button>
            <div className='count'><p>1</p></div>
            <button className='btn-plus'>+</button>
            <button className='general-btn btn-cart'>Add to Cart <FaCartPlus /></button>
          </div>
          <div className="product-color">
            <div className="general-btn red"></div>
            <div className="general-btn yellow"></div>
            <div className="general-btn lightblue"></div>
            <p>SKU:N/A</p>
          </div>
          <div className="wishlist">
            <button className='general-btn btn-wishlist'>Add to wishlist</button>
          </div>
          <div className="category">
            <p>Category: Table Lamp, Light</p>
          </div>
        </div>
      </div>
      {/* ____________________________________SECTION 2____________________________________ */}
      <div className="productdetails-section-2">
        <ul className='productdetails-section-2-navbar'>
          <li className='red'>DESCRIPTION</li>
          <li>ADDITIONAL INFO</li>
          <li>REVIEWS &#40;0&#41;</li>
          <li>SHIPPING & DELIVERY</li>
        </ul>
        <div className='container-product-description'>

          <div className="container-name">
            <h2 className='spacing'>{product.productName}</h2>
          </div>

          <div className="container-description-and-img">
            <div className='container-description'>
              <p className='spacing'>{product.description}</p>
            </div>
            <div className="container-img">
              <img src={product.imgUrl} className='description-img' />
            </div>
          </div>

        </div>
      </div>
      {/* ____________________________________SECTION 3____________________________________ */}
      <div className="productdetails-section-3">
        <h2>Related Products</h2>
        <div className="product-container">
          <div className="details-card">
            <img src={product.imgUrl} className="img-fluid" />
            <p>{product.productName.slice(0, 30)}...</p>
            <span className='old-price'>${product.price}</span><span>${product.price}</span>
          </div>
          <div className="details-card">
            <img src={product.imgUrl} className="img-fluid" />
            <p>{product.productName.slice(0, 30)}...</p>
            <span>${product.price}</span>
          </div>
          <div className="details-card">
            <img src={product.imgUrl} className="img-fluid" />
            <p>{product.productName.slice(0, 30)}...</p>
            <span>${product.price}</span>
          </div>
          <div className="details-card">
            <img src={product.imgUrl} className="img-fluid" />
            <p>{product.productName.slice(0, 30)}...</p>
            <span>${product.price}</span>
          </div>
        </div>
      </div>
      {/* ____________________________________SECTION 4____________________________________ */}
      <div className='productdetails-section-4'>
        <div className='product-container-sm'>
          <div className='details-card'>
            <img src={product.imgUrl} className="img-fluid" />
            <img src={product.imgUrl} className="img-fluid" />
            <img src={product.imgUrl} className="img-fluid" />
            <img src={product.imgUrl} className="img-fluid" />
            <img src={product.imgUrl} className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails