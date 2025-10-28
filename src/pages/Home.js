import React from 'react';

function Home() {
  return (
    <div>
      <div style={{marginTop:'70px'}}></div>

      
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
