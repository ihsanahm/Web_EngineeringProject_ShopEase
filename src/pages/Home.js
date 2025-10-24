import React from 'react';

function Home() {
  return (
    <>
    
      

      {/*  CAROUSEL SECTION */}
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
                style={{ height: '500px', objectFit: 'cover' }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                <h3>Welcome to ShopEase</h3>
                <p>Your Happiness, Our Goal</p>
                <a href="#shop" className="btn btn-primary">
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
                style={{ height: '500px', objectFit: 'cover' }}
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
                style={{ height: '500px', objectFit: 'cover' }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                <h3>Fast Delivery, Great Experience</h3>
                <p>Everything You Love, In One Place</p>
                <a href="#contact" className="btn btn-warning">
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
      
    </section>

    </>
  );
}

export default Home;
