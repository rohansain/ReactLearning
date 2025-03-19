import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  return (
    <div>
      <h2>🛒 Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
              <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: index })}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && <button onClick={() => dispatch({ type: "CLEAR_CART" })}>Clear Cart</button>}
    </div>
  );
}

export default Cart;
