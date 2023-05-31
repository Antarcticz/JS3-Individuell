import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Footer from './components/Footer/Footer'
import Add from './pages/Add'
import Edit from './pages/Edit'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container-app">
        <Routes>
          <Route index element={<Home />} />
          <Route path='add' element={<Add />} />
          <Route path='edit' element={<Edit />} />
          <Route path='product-details/:id' element={<ProductDetails />} />
          <Route path='login' element={<Login />} />
          <Route path='registration' element={<Registration />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App