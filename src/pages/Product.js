import React, { useState } from "react";

function Product({ addToCart }) {
  const [hoveredRating, setHoveredRating] = useState(null);

  const products = [
    {
      id: 1,
      name: "Smart Watch",
      desc: "Bluetooth Smart Watch with Fitness Tracker",
      price: 4999,
      rating: 4.5,
      reviews: 1200,
      ratingsBreakdown: { 5: 70, 4: 20, 3: 6, 2: 2, 1: 2 },
      image: "/images/watch.jpeg",
    },
    {
      id: 2,
      name: "Headphones",
      desc: "Wireless Over-Ear Noise Cancelling Headphones",
      price: 2999,
      rating: 4.3,
      reviews: 890,
      ratingsBreakdown: { 5: 60, 4: 25, 3: 8, 2: 4, 1: 3 },
      image: "/images/headphones.jpeg",
    },
    {
      id: 3,
      name: "Sneakers",
      desc: "Comfortable Running Shoes for Men",
      price: 5999,
      rating: 4.7,
      reviews: 650,
      ratingsBreakdown: { 5: 75, 4: 18, 3: 4, 2: 2, 1: 1 },
      image: "/images/shoes.jpeg",
    },
    {
      id: 4,
      name: "Smartphone",
      desc: "Latest Model with Advanced Features",
      price: 24999,
      rating: 4.6,
      reviews: 1500,
      ratingsBreakdown: { 5: 68, 4: 22, 3: 6, 2: 2, 1: 2 },
      image: "/images/smartphone.jpeg",
    },
    {
      id: 5,
      name: "backpack",
      desc: "Durable and Spacious Travel Backpack",
      price: 3999,
      rating: 4.4,
      reviews: 720,
      ratingsBreakdown: { 5: 65, 4: 24, 3: 7, 2: 3, 1: 1 },
      image: "/images/backpack.jpeg",

    },
    {
      id:6,
      name:"Jacket",
      desc:"Waterproof Winter Jacket",
      price:7999,
      rating:4.2,
      ratingsBreakdown: { 5: 65, 4: 24, 3: 7, 2: 3, 1: 1 },
      reviews: 540,
      image:"/images/jacket.jpeg",



    }
    ,
    {
      id:7,
      name:"Hoodie",
      desc:"Comfortable Cotton Hoodie",
      price:"3000",
      rating:4.3,
      ratingsBreakdown:{ 5: 60, 4: 25, 3: 8, 2: 4, 1: 3 },
      reviews: 430,
      image:"/images/hoodie.jpeg",
    },
    {
      id:8,
      name:"coat",
      desc:"Stylish Winter Coat",
      price:8999,
      rating:4.5,
      ratingsBreakdown:{ 5: 70, 4: 20, 3: 6, 2: 2, 1: 2 },
      reviews:610,
      image:"/images/coat.jpeg",
      
    }
  ];

  return (
    <div className="container mt-5">
      <div style={{margin:"80px"}}></div>
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row">
        {products.map((p) => (
          <div className="col-md-3 mb-4" key={p.id}>
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
                src={p.image}
                alt={p.name}
                className="card-img-top"
                style={{ height: "220px", objectFit: "contain", padding: "10px" }}
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/300x300?text=Product+Image")
                }
              />

              <div className="card-body" style={{ fontSize: "14px" }}>
                <p className="fw-semibold mb-1">{p.name}</p>
                <p className="text-muted" style={{ fontSize: "13px" }}>
                  {p.desc}
                </p>

                {/* Rating Section */}
                <div
                  className="d-flex align-items-center mb-2 position-relative"
                  onMouseEnter={() => setHoveredRating(p.id)}
                  onMouseLeave={() => setHoveredRating(null)}
                >
                  <div>
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <span
                          key={i}
                          style={{
                            color: i < Math.round(p.rating) ? "#ffa41c" : "#ccc",
                            fontSize: "15px",
                          }}
                        >
                          ★
                        </span>
                      ))}
                  </div>
                  <small className="ms-1 text-muted">
                    {p.rating} ({p.reviews.toLocaleString()})
                  </small>

                  {/* Hover rating breakdown box */}
                  {hoveredRating === p.id && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-60px",
                        left: "0",
                        background: "WHITE",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        padding: "10px 15px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        width: "200px",
                        zIndex: 10,
                      }}
                    >
                      <h6
                        style={{
                          fontSize: "13px",
                          marginBottom: "8px",
                          textAlign: "center",
                        }}
                      >
                        Global Rating and reviews
                      </h6>
                      {Object.entries(p.ratingsBreakdown)
                        .sort((a, b) => b[0] - a[0])
                        .map(([stars, percent]) => (
                          <div key={stars} className="d-flex align-items-center">
                            <small style={{ width: "20px" }}>{stars}★</small>
                            <div
                              style={{
                                background: "#eee",
                                borderRadius: "4px",
                                height: "6px",
                                width: "100%",
                                margin: "0 5px",
                                position: "relative",
                              }}
                            >
                              <div
                                style={{
                                  background: "#1c59ffff",
                                  width: `${percent}%`,
                                  height: "100%",
                                  borderRadius: "4px",
                                }}
                              ></div>
                            </div>
                            <small>{percent}%</small>
                          </div>
                        ))}
                    </div>
                  )}
                </div>

                {/* Price and delivery */}
                <h5 className="text-dark mb-0">Rs. {p.price}</h5>
                <small className="text-success d-block mb-2">
                  Free Delivery Tomorrow
                </small>

                <button
                  className="btn btn-primary w-100"
                  style={{ fontWeight: "600" }}
                  onClick={() => addToCart && addToCart(p)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
