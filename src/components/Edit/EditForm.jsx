import './EditForm.scss'
import React, { useState } from 'react'
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const EditForm = () => {

    const [productData, setFormData] = useState({
        productName: '',
        description: '',
        price: '',
    })
    const [id, productId] = useState('')

    const handleChange = e => {
        const { id, value } = e.target
        setFormData(form => {
            return {
                ...form,
                [id]: value
            }
        })
    }

    const updateProductToDb = e => {
        e.preventDefault()
        if (productData === '' || id === '') {
            return
        }
        const docRef = doc(db, 'products', id)

        updateDoc(docRef,
            {
                productName: productName.value,
                description: description.value,
                price: price.value

            }).then(response => {
                console.log(response)

            }).catch(error => console.log(error.message))
    }

    return (
        <div className='container-form-edit'>
            <h1 className='text-center my-5'>Edit a Product</h1>
            <form noValidate onSubmit={updateProductToDb}>
                <div className="form-group mb-3">
                    <label htmlFor="id" className="form-label">Product Id:</label>
                    <input type="text" className="form-control" id='id' value={id} onChange={e => productId(e.target.value)} />
                </div>
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
                <button className="general-btn btn-primary">Update Product</button>
            </form>
        </div>
    )
}

export default EditForm

