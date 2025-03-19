import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <CartProvider>
          <Navbar />
          <ThemeToggle />
          <Menu />
          <Cart />
        </CartProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
