import React, { useState } from "react";
import axios from "axios";

function AdminAddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    image: null
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setProduct({ ...product, image: e.target.files[0] });
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("category", product.category);
    formData.append("image", product.image);

    await axios.post("http://localhost:5000/api/products", formData);
    alert("Product Added Successfully!");
  };

  return (
    <div className="container mt-5">
      <h2>Add New Product</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          className="form-control mb-3"
          placeholder="Product Name"
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          className="form-control mb-3"
          placeholder="Price"
          onChange={handleChange}
        />

        <select
          name="category"
          className="form-control mb-3"
          onChange={handleChange}
        >
          <option>Select Category</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Home & Kitchen</option>
          <option>Beauty</option>
          <option>Sports</option>
        </select>

        <input
          type="file"
          name="image"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <button className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
}

export default AdminAddProduct;
