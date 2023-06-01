import '../scssPages/add.scss'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader/Loader'
import AddForm from '../components/Add/AddForm'


const Add = () => {

    const { user } = useSelector(state => state.auth)
    if (!user) return <Navigate to="/login" replace />

    const { products, loading, error } = useSelector(state => state.productList)

    return (
        <div>
            {loading && <Loader />}
            {error && <p>{error}</p>}
            <div className="container-add">

                <AddForm products={products} />

            </div>
        </div>
    )
}

export default Add
