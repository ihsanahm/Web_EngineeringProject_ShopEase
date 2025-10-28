import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
   
   <>
   {/*  FOOTER */}
      <footer className="bg-secondary text-light mt-5 pt-4 pb-3">
        <div className="container text-center text-md-start">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-3 mb-3">
              <h5 className="text-uppercase fw-bold mb-3">ShopEase</h5>
              <p>
                Your one-stop shop for the latest fashion, gadgets, and essentials.  
                Fast delivery and great deals — always!
              </p>
            </div>

            {/* Column 2 */}
            <div className="col-md-3 mb-3">
              <h6 className="fw-bold mb-3">Quick Links</h6>
              <ul className="list-unstyled">
                <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
                <li><Link to="/product" className="text-light text-decoration-none">Products</Link></li>
                <li><Link to="/cart" className="text-light text-decoration-none">Cart</Link></li>
                <li><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col-md-3 mb-3">
              <h6 className="fw-bold mb-3">Customer Service</h6>
              <ul className="list-unstyled">
                <li><Link to="/contact" className="text-light text-decoration-none">Contact Us</Link></li>
                <li><Link to="/faq" className="text-light text-decoration-none">FAQ</Link></li>
                <li><Link to="/returns" className="text-light text-decoration-none">Returns</Link></li>
                <li><Link to="/shipping" className="text-light text-decoration-none">Shipping Info</Link></li>
                 <li><Link to="/orders" className="text-light text-decoration-none">My Orders</Link></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="col-md-3 mb-3 social-container">
              <h6 className="fw-bold mb-3">Follow Us</h6>
              <div className="icons">
              <a href="https://www.facebook.com" className="text-light me-3 icon facebook-color"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/accounts/login/?hl=en" className="text-light me-3 icon insta-color"><i className="bi bi-instagram"></i></a>
              <a href="https://linkedin.com" className="text-light me-3 icon linkedin-color" ><i className="bi bi-linkedin"></i></a>
              <a href="https://youtube.com" className="text-light icon youtub-color"><i className="bi bi-youtube"></i></a>
              </div>
            </div>
          </div>

          <hr className="my-3 border-light" />
          <p className="text-center mb-0">
            © {new Date().getFullYear()} ShopEase. All Rights Reserved.
          </p>
        </div>
      </footer>
   </>
  );
}

export default Footer;
