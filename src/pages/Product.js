import React from 'react';

function Product({ addToCart }) {
  console.log('addToCart function received:', !!addToCart); // Check if function is received
  const products = [
    { id: 1, name: "Smart Watch", price: 4999, image: "/images/watch.jpeg" },
    { id: 2, name: "Headphones", price: 2999, image: "/images/headphones.jpeg" },
    { id: 3, name: "Sneakers", price: 5999, image: "/images/shoes.jpeg" },
    {id:4, name:"Hoodie", price:3999, image:"/images/hoodie.jpeg"},
    {id:5, name:"Jacket", price:1999, image:"/images/jacket.jpeg"},
    {id:6, name:"Coat", price:2499, image:"/images/coat.jpeg"},
    { id:7, name:"Sunglasses", price:1499, image:"/images/sunglasses.jpeg"},
    {id:8, name:"Backpack", price:3499, image:"/images/backpack.jpeg"},
    {id:9, name:"Smartphone", price:15999, image:"/images/smartphone.jpeg"},

  ];

  return (
    <div> 
     <div style={{marginTop:'110px'}}></div>
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-5" key={product.id}>
            <div className="card shadow-sm product-card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "300px", objectFit: "cover" }}
                onError={(e) => {
                  console.error(`Error loading image for ${product.name}`);
                  e.target.src = "https://via.placeholder.com/300x300?text=Product+Image";
                }}
              />
              <div className="card-body text-center">
                <h5>{product.name}</h5>
                <p className="text-success fw-bold">Rs. {product.price}</p>
                <button 
                  className="btn btn-primary" 
                  onClick={() => {
                    console.log('Adding product to cart:', product);
                    if (addToCart) {
                      addToCart(product);
                    } else {
                      console.error('addToCart function is not available');
                    }
                  }}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
}

export default Product;
