import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cursor from "./components/Cursor";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Cursor />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
