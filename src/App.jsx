// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import Cart from "./components/Cart";

import pizzas from "./data/pizzas";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Navbar cart={cart} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              pizzas={pizzas}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
