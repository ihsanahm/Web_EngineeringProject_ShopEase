import React from "react";
import "../Cart.css";

function Cart({ cartItems, setCartItems }) {

  const increaseQty = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));
  };

  const decreaseQty = (id) => {
    setCartItems(cartItems.map(item => item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-page">
      <div className="cart-left">
        <h2 className="cart-heading">Shopping Cart</h2>
        <hr />
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-img" />

            <div className="cart-details">
              <h3 className="cart-name">{item.name}</h3>
              <p className="cart-stock">In Stock</p>
              <p className="cart-delivery">Eligible for FREE Shipping</p>

              <div className="cart-actions">
                <div className="qty-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
                <span className="remove-btn" onClick={() => removeItem(item.id)}>
                 Remove
                </span>
              </div>
            </div>

            <div className="cart-price">
              <p>₨ {item.price * item.qty}</p>
            </div>
          </div>
        ))}
        <hr />
        <h3 className="subtotal">Subtotal ({cartItems.length} items): <span>₨ {total}</span></h3>
      </div>

      <div className="cart-right">
        <div className="checkout-box">
          <p>
            Subtotal ({cartItems.length} items): <strong>₨ {total}</strong>
          </p>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
