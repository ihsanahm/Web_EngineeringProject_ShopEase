import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/contact';
import Returns from './pages/Returns';
import Footer from './Footer';
import FAQ from './pages/FAQ';
import MyOrders from './pages/MyOrders';
import AppSlider from './app_slider';
import { useState, useEffect } from 'react';

function App() {

  // Load cart from localStorage on initial render; fallback to empty array
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    console.log('Cart items updated:', cartItems);
  }, [cartItems]);

  const addToCart = (product) => {
    console.log('addToCart called with product:', product);
    console.log('Current cart items:', cartItems);
    
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      console.log('Updating existing item quantity');
      setCartItems(prevItems => 
        prevItems.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      console.log('Adding new item to cart');
      setCartItems(prevItems => [...prevItems, { ...product, qty: 1 }]);
    }
  };


  
  return (
    <Router>
      <Navbar />
      
      
      <Routes>
  <Route path="/" element={<AppSlider />} />
  <Route path="/Home" element={<Home/>} />
        <Route path="/product" element={<Product addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/returns" element={<Returns />} />
  <Route path="/faq" element={<FAQ />} />
  <Route path="/orders" element={<MyOrders />} />
      </Routes>
      
      <Footer />
    </Router>

   

  );
}

export default App;
