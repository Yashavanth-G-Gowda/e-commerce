import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Login from './pages/Login'
import About from './pages/About'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Footer from './component/Footer'
import Collection from './pages/Collection'
import SearchBar from './component/SearchBar'
import Navbar from './component/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <ToastContainer  />
        <Navbar/>
        <SearchBar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/collection' element={<Collection/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/orders' element={<Orders/>} />
            <Route path='/place-order' element={<PlaceOrder/>} />
            <Route path='/product/:productId' element={<Product/>} />
        </Routes>
        <Footer/>
    </div>
  )
}
export default App