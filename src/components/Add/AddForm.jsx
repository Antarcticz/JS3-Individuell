import './AddForm.scss'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../store/features/products/productListSlice'

const AddForm = () => {

    const dispatch = useDispatch()
    const [productData, setProductData] = useState({
        productName: '',
        description: '',
        price: '',
        imgUrl: ''
    })

    const handleChange = e => {
        const { id, value } = e.target
        setProductData(form => {
            return {
                ...form,
                [id]: value
            }
        })
    }

    const addProductToDb = e => {
        e.preventDefault()
        const data = {
            ...productData,
            price: +productData.price
        }

        dispatch(addProduct(data))
    }

    return (
        <div className='container-form-add'>
            <h1 className='text-center my-5'>Add a New Product</h1>
            <form noValidate onSubmit={addProductToDb}>
                <div className="form-group mb-3">
                    <label htmlFor="productName" className="form-label">Product Name:</label>
                    <input type="text" className="form-control" id='productName' value={productData.productName} onChange={handleChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="description" className="form-label">Product Description:</label>
                    <textarea className='form-control' id="description" rows="3" value={productData.description} onChange={handleChange}></textarea>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="price" className="form-label">Product Price:</label>
                    <input type="number" inputMode='decimal' className="form-control" id='price' value={productData.price} onChange={handleChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="imgUrl" className="form-label">Image Url:</label>
                    <input type="text" className="form-control" id='imgUrl' value={productData.imgUrl} onChange={handleChange} />
                </div>
                <button className="general-btn btn-primary">Add Product</button>
            </form>
        </div>
    )
}

export default AddForm