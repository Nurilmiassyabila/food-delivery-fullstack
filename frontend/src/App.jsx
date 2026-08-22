import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import PlaceOrder from './pages/placeOrder/placeOrder'
import Footer from './components/footer/footer'
import LoginPopup from './components/loginPopup/loginPopup'
import Verify from './pages/Verify/verify'
import MyOrders from './pages/MyOrders/myOrders'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}

      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/myOrders' element={<MyOrders/>}/>
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App