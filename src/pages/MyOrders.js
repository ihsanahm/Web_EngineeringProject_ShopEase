import React, { useState } from 'react';
import '../Cart.css';
import { Link } from 'react-router-dom';

function MyOrders() {
  // Sample orders — replace with API data later
  const [orders] = useState([
    {
      id: 'ORD-1001',
      date: '2025-10-20',
      status: 'Delivered',
      total: 12499,
      items: [
        { id: 1, name: 'Smart Watch', price: 4999, qty: 1 },
        { id: 2, name: 'Headphones', price: 7499, qty: 1 },
      ],
    },
    {
      id: 'ORD-1002',
      date: '2025-10-24',
      status: 'Processing',
      total: 5999,
      items: [{ id: 3, name: 'Sneakers', price: 5999, qty: 1 }],
    },
  ]);

  const [selected, setSelected] = useState(null);

  return (
    <div style={{ marginTop: '110px', padding: '20px' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2>My Orders</h2>
            {orders.length === 0 ? (
              <div className="card p-4 mt-3">
                <p>You have no orders yet.</p>
                <Link to="/product" className="btn btn-primary">Shop Now</Link>
              </div>
            ) : (
              orders.map(order => (
                <div className="card mb-3" key={order.id}>
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="mb-1">Order {order.id}</h5>
                      <p className="mb-0">Date: {order.date}</p>
                      <p className="mb-0">Status: <strong>{order.status}</strong></p>
                    </div>
                    <div className="text-end">
                      <p className="mb-1">Total: ₨ {order.total}</p>
                      <button className="btn btn-outline-primary btn-sm me-2" onClick={() => setSelected(order)}>View Details</button>
                      <Link to="/returns" className="btn btn-outline-secondary btn-sm">Return/Exchange</Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <h5>Order Details</h5>
              {selected ? (
                <div>
                  <p><strong>Order:</strong> {selected.id}</p>
                  <p><strong>Date:</strong> {selected.date}</p>
                  <p><strong>Status:</strong> {selected.status}</p>
                  <p><strong>Items:</strong></p>
                  <ul>
                    {selected.items.map(it => (
                      <li key={it.id}>{it.name} x {it.qty} — ₨ {it.price * it.qty}</li>
                    ))}
                  </ul>
                  <p><strong>Total:</strong> ₨ {selected.total}</p>
                </div>
              ) : (
                <p>Select an order to see details.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrders;
