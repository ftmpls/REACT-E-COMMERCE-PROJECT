import React from 'react'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import ProductDetail from '../pages/ProductDetail'

import Shop from '../pages/Shop'
import SignUp from '../pages/SignUp'
import { Route, Routes,Navigate } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
const Routers = () => {
  return <Routes>
    <Route path="/" element={<Navigate to="/home"/>}/>
    <Route path='home' element={<Home/>} />
    <Route path='cart' element={<Cart/>} />
    <Route path='checkout' element={<ProtectedRoute><Checkout/></ProtectedRoute>} />
    <Route path='shop/:id' element={<ProductDetail/>} />
    <Route path='shop' element={<Shop/>} />
    <Route path='signup' element={<SignUp/>} />
    <Route path='login' element={<Login/>} />
    </Routes>
};


export default Routers;
