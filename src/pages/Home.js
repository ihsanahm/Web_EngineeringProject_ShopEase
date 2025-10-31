import React from 'react';
function Home() {
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
                <a href="/product" className="btn btn-primary">
                  Start Shopping
                </a>
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
          <a href="/product" className="btn btn-primary btn-lg">
            Shop Now
          </a>
        </div>
    </section>

    </div>
  );
}

export default Home;
