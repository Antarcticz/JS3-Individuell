import '../scssPages/home.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/features/products/productListSlice'
import Loader from '../components/Loader/Loader'
import Section2 from '../components/Home/Section2/Section2'


const Home = () => {

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
        
          <Section2 products={products} />
       
      </div>
    </div>
  )
}

export default Home