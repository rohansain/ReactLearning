import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const menuItems = [
  { name: "Pizza", price: 10 },
  { name: "Burger", price: 5 },
  { name: "Pasta", price: 8 }
];

function Menu() {
  const { dispatch } = useContext(CartContext);

  return (
    <div>
      <h2>🍽️ Menu</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price} 
            <button onClick={() => dispatch({ type: "ADD_ITEM", payload: item })}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
