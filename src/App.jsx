import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Add from './pages/Add'
import Edit from './pages/Edit'
import Delete from './pages/Delete'
import Login from './pages/Login'
import Registration from './pages/Registration'
import ProductDetails from './pages/productDetails'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container-app">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='add' element={<Add />} />
          <Route path='edit' element={<Edit />} />
          <Route path='delete' element={<Delete />} />
          <Route path='login' element={<Login />} />
          <Route path='registration' element={<Registration />} />
          <Route path='product-details/:id' element={<ProductDetails />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App