import React, { useEffect } from "react";
import "../Cart.css";
import { useNavigate } from "react-router-dom";


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
  const navigate = useNavigate();


  const processCheckout = () => {
    if (!cartItems || cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!currentUser) {
      // Save intent and redirect to login
      localStorage.setItem('pendingCheckout', 'true');
      navigate('/login');
      return;
    }

    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const newOrder = {
      id: 'order_' + Date.now(),
      items: cartItems,
      total,
      user: currentUser,
      date: new Date().toISOString(),
    };

    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Clear cart
    setCartItems([]);

    alert('Order placed successfully');
  };

  // On mount, if user returned after login to complete checkout, process it
  useEffect(() => {
    const pending = localStorage.getItem('pendingCheckout');
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (pending === 'true' && currentUser) {
      // remove flag then process
      localStorage.removeItem('pendingCheckout');
      // allow small delay to ensure cart state is ready
      setTimeout(() => {
        if (cartItems && cartItems.length > 0) {
          processCheckout();
        }
      }, 50);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              <p className="cart-stock">In Stock <span>6</span></p>
              <p className="cart-delivery">Eligible for FREE Shipping</p>

              <div className="cart-actions">
                <div className="qty-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                 Remove
                </button>
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
          <button className="checkout-btn" onClick={processCheckout}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
