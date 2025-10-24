import React from 'react';

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
                <li><a href="/home" className="text-light text-decoration-none">Home</a></li>
                <li><a href="/product" className="text-light text-decoration-none">Products</a></li>
                <li><a href="/cart" className="text-light text-decoration-none">Cart</a></li>
                <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col-md-3 mb-3">
              <h6 className="fw-bold mb-3">Customer Service</h6>
              <ul className="list-unstyled">
                <li><a href="/contact" className="text-light text-decoration-none">Contact Us</a></li>
                <li><a href="/faq" className="text-light text-decoration-none">FAQ</a></li>
                <li><a href="/returns" className="text-light text-decoration-none">Returns</a></li>
                <li><a href="/shipping" className="text-light text-decoration-none">Shipping Info</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="col-md-3 mb-3">
              <h6 className="fw-bold mb-3">Follow Us</h6>
              <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light me-3"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light"><i className="bi bi-youtube"></i></a>
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
