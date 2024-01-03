import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>home</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
