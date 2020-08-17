import React from "react";
import "./App.css";
import { CartProvider } from "./Context/CartContext";
import Routes from './components/Router/Routes';
function App() {
  return (
    <CartProvider>
      <Routes/>
    </CartProvider>
  );
}

export default App;
