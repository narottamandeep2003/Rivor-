import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cursor from "./components/Cursor";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Admin from "./pages/Admin";
import Otp from "./pages/Otp";
function App() {
  return (
    <>
      <BrowserRouter>
        <Cursor />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/product/:ProductId" element={<Product></Product>} ></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/otp" element={<Otp></Otp>}></Route>
          <Route path="/admin" element={<Admin></Admin>}></Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
