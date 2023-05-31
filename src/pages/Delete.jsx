import '../scssPages/home.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/features/products/productListSlice'
import { Navigate } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import DeleteProducts from '../components/Delete/DeleteProducts'



const Delete = () => {

    const { user } = useSelector(state => state.auth)

    if (!user) return <Navigate to="/login" replace />


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const { products, loading, error } = useSelector(state => state.productList)

    return (
        <div>
            {loading && <Loader />}
            {error && <p>{error}</p>}
            <div className="container-home">

                <DeleteProducts products={products} />

            </div>
        </div>
    )
}

export default Delete