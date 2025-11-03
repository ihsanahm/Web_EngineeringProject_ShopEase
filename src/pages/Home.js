import React from 'react';
import { Link } from 'react-router-dom';

// Temporary local data for the 50% OFF deals section.
// Replace with real product data or import from a central products file as needed.
const fiftyPercentProducts = [
  { id: 201, name: 'Rich Dad Poor Dad', price: 3000, discount: 50, image: process.env.PUBLIC_URL + '/images/richdadpoordad.png' },
  { id: 202, name: 'To Kill a Mockingbird', price: 2999, discount: 50, image: process.env.PUBLIC_URL + '/images/Mockingbird.jpeg' },
  { id: 203, name: 'The Great Gatsby', price: 1999, discount: 50, image: process.env.PUBLIC_URL + '/images/TheGreatGatsby.jpeg' },
  { id: 204, name: 'Hoodies', price: 2499, discount: 50, image: process.env.PUBLIC_URL + '/images/hoodie.jpeg' },
];
// Helper to calculate discounted price (returns integer rupees)
const calculateDiscountedPrice = (price, discountPercent) => {
  const p = Number(price) || 0;
  const d = Number(discountPercent) || 0;
  // Round to nearest rupee after applying discount
  return Math.round(p * (1 - d / 100));
};
function Home({ addToCart }) {
  return (
    <div>
      <div style={{marginTop:'70px'}}></div>
       <section>
        <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2"></button>
          </div>

          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <img
                src={process.env.PUBLIC_URL + '/images/FirstSlide.jpg'}
                className="d-block w-100"
                alt="Slide 1"
                style={{ height: '600px',objectFit: 'Cover' }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                <h3>Welcome to ShopEase</h3>
                <p>Your Happiness, Our Goal</p>
                <Link to="/product" className="btn btn-primary">
                  Start Shopping
                </Link>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <img
                src={process.env.PUBLIC_URL + '/images/SecondImage.jpg'}
                className="d-block w-100"
                alt="Slide 2"
                style={{ height: '630px', objectFit: 'cover' }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                <h3>Latest Trends, Best Prices</h3>
                <p>Shop Smart, Live Better</p>
                <a href="#deals" className="btn btn-success">
                  View Deals
                </a>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <img
                src={process.env.PUBLIC_URL + '/images/thirdslide.jpg'}
                className="d-block w-100"
                alt="Slide 3"
                style={{ height: '630px', objectFit: 'cover' }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                <h3>Fast Delivery, Great Experience</h3>
                <p>Everything You Love, In One Place</p>
                <a href="/contact" className="btn btn-warning">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>
      
       <section className="text-center mt-5">
        <div className="container">
          <h2>Welcome to ShopEase!</h2>
          <p className="lead">
            Discover the best deals on the latest fashion, gadgets, and essentials. 
            Enjoy a seamless shopping experience with fast delivery and exceptional customer service.
          </p>
          <Link to="/product" className="btn btn-primary btn-lg">
            Shop Now
          </Link>
        </div>
    </section>
    <section>
         <div className="container mt-4">
      <h2>🔥 50% OFF Deals</h2>

      <div className="row">
        {fiftyPercentProducts.map(product => (
          <div key={product.id} className="col-md-3 mb-4">
            <div 
              className="card shadow-sm border-0 position-relative"
              style={{
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img 
                src={product.image} 
                className="card-img-top" 
                alt={product.name}
                style={{ height: "220px", objectFit: "contain", padding: "10px" }}
                onError={(e) => (e.target.src = "https://via.placeholder.com/300x300?text=Product+Image")}
              />

              <div className="card-body" style={{ fontSize: "14px" }}>
                <p className="fw-semibold mb-1">{product.name}</p>
                {(() => {
                  const discountedPrice = calculateDiscountedPrice(product.price, product.discount);
                  return (
                    <>
                      <p className="mb-1" style={{ fontSize: "13px" }}>
                        <span className="text-muted text-decoration-line-through">Rs. {product.price.toLocaleString()}</span>
                        {' '}
                        <span className="fw-bold text-dark">Rs. {discountedPrice.toLocaleString()}</span>
                      </p>
                      <p className="text-danger fw-bold mb-2" style={{ fontSize: "13px" }}>
                        {product.discount}% OFF
                      </p>
                      <button
                        className="btn btn-success w-100"
                        style={{ fontSize: "14px", fontWeight: "600" }}
                        onClick={() => product && addToCart({ ...product, price: discountedPrice })}
                      >
                        Add to Cart
                      </button>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>

    </div>
  );
}

export default Home;
