import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [currentUser, setCurrentUser] = useState(() => JSON.parse(localStorage.getItem('currentUser') || 'null'));
  const navigate = useNavigate();

  useEffect(() => {
    const onStorage = () => setCurrentUser(JSON.parse(localStorage.getItem('currentUser') || 'null'));
    window.addEventListener('storage', onStorage);
    // also update on mount
    onStorage();
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    localStorage.setItem('isLoggedIn', 'false');
    setCurrentUser(null);
    try { window.dispatchEvent(new Event('storage')); } catch (e) {}
    navigate('/');
  };

  return (
    <>
    {/*  NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-light shadow-sm fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={process.env.PUBLIC_URL + '/logo192.png'}
              alt="Brand logo"
              width="40"
              height="40"
              className="me-2"
            />
            <span className="fw-bold text-primary">ShopEase</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            {/* Center Links */}
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false" to="/">
                   Product
                  </Link>
                   <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/books">Books</Link></li>
                      <li><Link className="dropdown-item" to="/beauty">Beauty & Personal Care</Link></li>
                      <li><Link className="dropdown-item" to="/mobile">Mobile Accessories</Link></li>
                      <li><Link className="dropdown-item" to="/fashion">Fashion</Link></li>
                      <li><Link className="dropdown-item" to="/home">Home & Kitchen</Link></li>
                      <li><Link className="dropdown-item" to="/electronics">Electronics</Link></li>
                      <li><Link className="dropdown-item" to="/computers">Computers & IT Accessories</Link></li>
                      <li><Link className="dropdown-item" to="/toys">Toys & Games</Link></li>
                      <li><Link className="dropdown-item" to="/sports">Sports & Fitness</Link></li>
                   </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
            </ul>

            {/* Right side (buttons + search) */}
            <div className="d-flex align-items-center flex-column flex-lg-row">
              <form className="d-flex mb-2 mb-lg-0 me-lg-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search products..."
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              <div className="d-flex gap-2">
                {currentUser ? (
                  <button className="btn btn-outline-primary" onClick={handleLogout}>Logout</button>
                ) : (
                  <button className="btn btn-outline-primary"> <Link className="nav-link" to="/login">Login</Link></button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      </>
  );
}

export default Navbar;
