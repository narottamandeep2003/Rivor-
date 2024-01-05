import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cursor from "./components/Cursor";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
function App() {
  return (
    <>
      <BrowserRouter>
        <Cursor />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
