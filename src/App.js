import React from 'react'
import Nav from './Component/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Component/footer';
import index from './index.css'
import Singup from './Component/Singup';
import Private from './Component/privateComponent/Private';
import Login from './Component/Login';
import AddProduct from './Component/AddProduct'
import Home from './Component/Home';
import Update from './Component/Update'
import HomeComponet from './Component/HomeComponet';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='' element={<Private />}>
          <Route path='/' element={<HomeComponet/>} />
            <Route path='/homecomp' element={<HomeComponet/>} />
            <Route path='/home' element={<Home />} />
            <Route path='/Add' element={<AddProduct />} />
            <Route path='/Update/:id' element={<Update />} />
            <Route path='/Logout' element={<h1>Your account got Logout...</h1>} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/sighup' element={<Singup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
