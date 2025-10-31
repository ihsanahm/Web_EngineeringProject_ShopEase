import React from 'react';
import '../Cart.css';
import { Link } from 'react-router-dom';

function Returns() {
  return (
    <div style={{
      marginTop: '110px',
      padding: '20px',
      
     

      }}>
      <div className="container" >
        <div className="card shadow-lg" 
        style={
          {
            backgroundColor: 'white',
            border: '2px',
            borderRadius: '50px',
            
            


        }
        }>
          <div className="card-body p-4">
            <h2 className="mb-3" style={{textAlign:"center",}}>Returns &amp; Exchanges</h2>

            <p>
              We want you to be completely satisfied with your purchase from ShopEase. If
              you are not happy with your product, you can request a return or exchange within
              7 days of delivery.
            </p>

            <h5 className="mt-4">Return eligibility</h5>
            <ul>
              <li>The item must be unused and in the original packaging.</li>
              <li>All tags must be attached and the product should be in resalable condition.</li>
              <li>Electronics must include all accessories, original boxes and warranty cards.</li>
            </ul>

            <h5 className="mt-4">How to initiate a return</h5>
            <ol>
              <li>Go to your <Link to="/MyOrders">My Orders</Link> page (after logging in).</li>
              <li>Select the order and click "Request Return/Exchange" next to the item.</li>
              <li>Fill out the reason and choose whether you want a refund or an exchange.</li>
              <li>After we verify your request, we'll email you the return shipping instructions.</li>
            </ol>

            <h5 className="mt-4">Refunds</h5>
            <p>
              Refunds will be processed after we receive and inspect the returned item. It may
              take 5-7 business days for the refund to appear in your original payment method.
            </p>

            <h5 className="mt-4">Exchanges</h5>
            <p>
              If you choose an exchange, we'll process it once the returned item passes our quality check.
              We'll notify you when the replacement ships.
            </p>

            <h5 className="mt-4">Exceptions</h5>
            <p>
              Some items (e.g., perishable goods, personal care items, certain intimate apparel)
              are not eligible for return unless defective. Please check the product page for
              item-specific return information.
            </p>

            <h5 className="mt-4">Need help?</h5>
            <p>
              If you need help initiating a return or have questions, contact our support team at
              <a href="mailto:returns@shopease.com"> returns@shopease.com</a> or visit the <Link to="/contact">Contact</Link> page.
            </p>

            <div className="mt-4">
              <Link to="/Home" className="btn btn-secondary me-2">Back to Home</Link>
              <Link to="/cart" className="btn btn-primary">View Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Returns;
