import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import About from './pages/About';
import Footer from './Footer';


function App() {
  return (


  
    <Router>
      <Navbar />
      
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      <Footer />
    </Router>


  );
}

export default App;
