import React from 'react';

function Products() {
  const products = [
    { id: 1, name: "Smart Watch", price: 4999, image: "/images/watch.jpeg" },
    { id: 2, name: "Headphones", price: 2999, image: "/images/headphones.jpeg" },
    { id: 3, name: "Sneakers", price: 5999, image: "/images/shoes.jpeg" },
  ];

  return (
    <div> 
     <div style={{marginTop:'70px'}}></div>
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card shadow-sm">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5>{product.name}</h5>
                <p className="text-success fw-bold">Rs. {product.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
}

export default Products;
