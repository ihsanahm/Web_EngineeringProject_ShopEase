import React from 'react';

function About() {
  return (
    
    <div className="container mt-5">
      <div style={{marginTop:'70px'}}></div>
      <h2>About ShopEase</h2>
      <p>
        ShopEase is your ultimate online shopping destination, dedicated to bringing you the latest trends, unbeatable prices, and a seamless shopping experience. Founded in 2020, our mission is to make shopping easy, enjoyable, and accessible for everyone.
      </p>
      <h4>Our Values</h4>
      <ul>
        <li><strong>Customer Satisfaction:</strong> We prioritize our customers' needs and strive to exceed their expectations with every purchase.</li>
        <li><strong>Quality Products:</strong> We curate a wide range of high-quality products from trusted brands to ensure you get the best value for your money.</li>
        <li><strong>Fast Delivery:</strong> Our efficient logistics network ensures that your orders reach you quickly and safely.</li>
        <li><strong>Exceptional Service:</strong> Our dedicated customer support team is always ready to assist you with any inquiries or issues.</li>
      </ul>
      <h4>Join Us</h4>
      <p>
        Whether you're looking for the latest fashion, cutting-edge gadgets, or everyday essentials, ShopEase has got you covered. Join our community of satisfied shoppers and experience the convenience of online shopping like never
        </p>
      <div className="container my-5 text-center">
      <h2 className="mb-4">Meet Our Team</h2>
      <div className="row justify-content-center">

        {/* Team Member 1 */}
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card border-0 shadow-sm changes">
            <img
              src={process.env.PUBLIC_URL + '/images/team/member1.jpg'}
              className="card-img-top rounded-circle p-3"
              alt="Team Member 1"
              style={{ height: '200px', width: '200px', objectFit: 'cover', margin: '0 auto' }}
            />
            <div className="card-body">
              <h5 className="card-title">John</h5>
              <p className="card-text text-muted">Developer</p>
            </div>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card border-0 shadow-sm changes">
            <img
              src={process.env.PUBLIC_URL + '/images/team/member2.jpeg'}
              className="card-img-top rounded-circle p-3"
              alt="Team Member 2"
              style={{ height: '200px', width: '200px', objectFit: 'cover', margin: '0 auto' }}
            />
            <div className="card-body">
              <h5 className="card-title">Alexa </h5>
              <p className="card-text text-muted">Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
