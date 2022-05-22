import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Login from "./pages/login";
import NavbarTop from "./components/navbartop/NavbarTop";
import NavbarDown from "./components/navbardown/NavbarDown";

function App() {
  return (
    <BrowserRouter>
      <NavbarTop />
      <NavbarDown />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
