import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar.js';
import Product from './Pages/Product.js';
import Shop from './Pages/Shop.js';
import Cart from './Pages/Cart.js';
import { BrowserRouter } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory.js';
import { Route, Routes } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Component/Footer/Footer.js';
import men_banner from './Component/Assets/banner_mens.png'
import women_banner from './Component/Assets/banner_women.png'
import kids_banner from './Component/Assets/banner_kids.png'
import CreateAcc from './Pages/CreateAcc.js';


function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Shop/>}/>
      <Route path="/men" element={<ShopCategory banner={men_banner}category="men" />}/>
      <Route path="/women" element={<ShopCategory banner={women_banner} category="women" />}/>
      <Route path="/kids" element={<ShopCategory  banner={kids_banner} category="kid" />}/>
      <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
      </Route>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<LoginSignup/>}/>
      <Route path="/createAcc" element={<CreateAcc/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;
