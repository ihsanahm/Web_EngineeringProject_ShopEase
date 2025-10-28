import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
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
              <li className="nav-item">
                <Link className="nav-link" to="/product">Products</Link>
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
                <button className="btn btn-outline-primary">Sign Up</button>
                <button className="btn btn-outline-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      </>
  );
}

export default Navbar;
