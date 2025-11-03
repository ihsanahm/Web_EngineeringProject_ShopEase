import React, { useState } from "react";

function Books({ addToCart }) {
  const [hoveredRating, setHoveredRating] = useState(null);

  const products = [
    {
      id: 101,
      name: "To Kill a Mockingbird",
      desc: " A novel by Harper LeeTold through the eyes of a young girl named Scout.",
      Auther:"Harper Lee",
      price: 4999,
      rating: 4.5,
      reviews: 1200,
      ratingsBreakdown: { 5: 70, 4: 20, 3: 6, 2: 2, 1: 2 },
      image: "/images/Mockingbird.jpeg",
    },
    {
      id: 102,
      name: "Pride and Prejudice",
      desc: "A classic novel by Jane Austen that explores manners, marriage, and society in 19th century England.",
      Auther:"Jane Austen",
      price: 2999,
      rating: 4.3,
      reviews: 890,
      ratingsBreakdown: { 5: 60, 4: 25, 3: 8, 2: 4, 1: 3 },
      image: "/images/PrideandPrejudice.jpg",
    },
    {
      id: 103,
      name: "The Alchemist",
      desc: "A novel by Paulo Coelho. A simple but deep story about following your dreams.",
      Auther:"Paulo Coelho",
      price: 5999,
      rating: 4.7,
      reviews: 650,
      ratingsBreakdown: { 5: 75, 4: 18, 3: 4, 2: 2, 1: 1 },
      image: "/images/TheAlchemist.jpg",
    },
    {
      id: 104,
      name: "The Great Gatsby",
      desc: "A novel by F. Scott Fitzgerald set in the Jazz Age that explores themes of decadence and excess.",
      Auther:"F. Scott Fitzgerald",
      price: 24999,
      rating: 4.6,
      reviews: 1500,
      ratingsBreakdown: { 5: 68, 4: 22, 3: 6, 2: 2, 1: 2 },
      image: "/images/TheGreatGatsby.jpeg",
    },
    {
      id: 105,
      name: "Harry Potter and the Sorcerer’s Stone",
      desc: "The first book in J.K. Rowling's beloved series about a young wizard discovering his magical heritage.",
      Auther:"J.K. Rowling",
      price: 3999,
      rating: 4.4,
      reviews: 720,
      ratingsBreakdown: { 5: 65, 4: 24, 3: 7, 2: 3, 1: 1 },
      image: "/images/HarryPotter.jpeg",

    },
     {
      id:106,
      name:"The Catcher in the Rye",
      desc:"A story about teenage angst and alienation, narrated by Holden Caulfield.",
      Auther:"J.D. Salinger",
      price:"3000",
      rating:4.3,
      ratingsBreakdown:{ 5: 60, 4: 25, 3: 8, 2: 4, 1: 3 },
      reviews: 430,
      image:"/images/TheCatcher.jpeg",
    },
    {
      id:107,
      name:"The Hobbit",
      desc:"Bilbo Baggins (a hobbit) goes on a journey with dwarves.They face dragons, trolls, elves, and many dangers.",
      Auther:"J.R.R. Tolkien",
      price:7999,
      rating:4.2,
      ratingsBreakdown: { 5: 65, 4: 24, 3: 7, 2: 3, 1: 1 },
      reviews: 540,
      image:"/images/TheHobbit.jpeg",

    }
    ,
   
    {
      id:108,
      name:"The Lord of the Rings.",
      desc:"Follows Frodo and a group of heroes on a dangerous journey.",
      Auther:"J.R.R. Tolkien",
      price:8999,
      rating:4.5,
      ratingsBreakdown:{ 5: 70, 4: 20, 3: 6, 2: 2, 1: 2 },
      reviews:610,
      image:"/images/TheLord.jpeg",
      
    }
  ];

  return (
    <div className="container mt-5">
      <div style={{margin:"80px"}}></div>
     
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
                <p className="fw-semibold mb-1" style={{fontSize: "14px",fontStyle:"bold"}}>{p.name}</p>
                <p className="fw-semibold mb-1" style={{fontSize: "14px",fontStyle:"bold",color:"green"}}>{p.Auther}</p>
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

export default Books;
