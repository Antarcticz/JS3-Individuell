import '../scssPages/edit.scss'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { changeProduct } from '../store/features/products/productListSlice'
import { Navigate } from 'react-router-dom'


const Edit = () => {

    const { user } = useSelector(state => state.auth)

    if (!user) return <Navigate to="/login" replace />

    const dispatch = useDispatch()
    const [productData, setProductData] = useState({
        productName: '',
        price: '',
        imgUrl: '',
        description: ''
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

    const handleSubmit = e => {
        e.preventDefault()
        const data = {
            ...productData,
            price: +productData.price
        }

        // dispatch(addProduct(data))



        //todo          create funktion for edit
        // const { user } = useSelector(state => state.auth)

        // if (!user) return <Navigate to="/login" replace />

        // const dispatch = useDispatch();


        // const [productData, setProductData] = useState({
        //     title: product.title,
        //     category: product.category,
        //     price: product.price,
        //     shortDescription: product.shortDescription,
        //     description: product.description,
        //     imageURL: product.imageURL,
        // });

        // const handleChange = e => {
        //     const { id, value } = e.target;
        //     setProductData(form => ({
        //         ...form,
        //         [id]: value,
        //     }));
        // };

        // const handleImgUrlChange = (e, index) => {
        //     const { value } = e.target
        //     const images = productData.imgUrl
        //     images[index] = value
        //     setProductData(form => ({
        //         ...form,
        //         imgUrl: images
        //     }))
        // }

        // const updateProductToDb = async (e) => {
        //     e.preventDefault()
        //     try {
        //         const docRef = doc(db, 'products', product.id);

        //         await updateDoc(docRef, {
        //             productName: productData.productName,
        //             price: productData.price,
        //             description: productData.description,
        //             imgUrl: productData.imgUrl,
        //         });

        //         dispatch(updateProduct(productData));


        //         navigate('/productDetails/:id');
        //     } catch (error) {
        //         console.log(error);
        //     }
        // };
    }

    return (
        <div className='container-add'>
            <h1 className='text-center my-5'>Edit a Product</h1>
            <form noValidate onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="id" className="form-label">Product Id:</label>
                    <input type="text" className="form-control" id='id' value={productData.id} onChange={handleChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="productName" className="form-label">Product Name:</label>
                    <input type="text" className="form-control" id='productName' value={productData.productName} onChange={handleChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="price" className="form-label">Product Price:</label>
                    <input type="number" inputMode='decimal' className="form-control" id='price' value={productData.price} onChange={handleChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="imgUrl" className="form-label">Image Url:</label>
                    <input type="text" className="form-control" id='imgUrl' value={productData.imgUrl} onChange={handleChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="description" className="form-label">Product Description:</label>
                    <textarea className='form-control' id="description" rows="3" value={productData.description} onChange={handleChange}></textarea>
                </div>
                <button className="general-btn btn-primary">Add Product</button>
            </form>
        </div>
    )
}

export default Edit