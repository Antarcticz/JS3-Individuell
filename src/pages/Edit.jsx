import '../scssPages/edit.scss'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader/Loader'
import EditForm from '../components/Edit/EditForm'


const Edit = () => {

    const { user } = useSelector(state => state.auth)
    if (!user) return <Navigate to="/login" replace />

    const { products, loading, error } = useSelector(state => state.productList)

    return (
        <div>
            {loading && <Loader />}
            {error && <p>{error}</p>}
            <div className="container-edit">

                <EditForm products={products} />

            </div>
        </div>
    )
}

export default Edit