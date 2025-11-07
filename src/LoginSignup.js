import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from 'react-router-dom';

export default function LoginSignup() {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [registerData, setRegisterData] = useState({ username: "", email: "", password: "" });

  useEffect(() => {
    const container = document.querySelector(".container1");
    const registerBtn = document.querySelector(".register-btn");
    const loginBtn = document.querySelector(".login-btn");

    const handleRegister = () => container?.classList.add("active");
    const handleLogin = () => container?.classList.remove("active");

    registerBtn?.addEventListener("click", handleRegister);
    loginBtn?.addEventListener("click", handleLogin);

    return () => {
      registerBtn?.removeEventListener("click", handleRegister);
      loginBtn?.removeEventListener("click", handleLogin);
    };
  }, []);

  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const matched = users.find(u => (u.username === loginData.username || u.email === loginData.username) && u.password === loginData.password);
    if (matched) {
      localStorage.setItem('currentUser', JSON.stringify({ username: matched.username, email: matched.email }));
      localStorage.setItem('isLoggedIn', 'true');
      alert('Login successful');
      // notify other components (Navbar) to update
      try { window.dispatchEvent(new Event('storage')); } catch (e) {}
      // If user was redirected to login to complete checkout, go back to cart
      if (localStorage.getItem('pendingCheckout') === 'true') {
        localStorage.removeItem('pendingCheckout');
        navigate('/cart');
        return;
      }
    } else {
      alert('Invalid credentials');

    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.username === registerData.username || u.email === registerData.email)) {
      alert('User with same username or email already exists');
      return;
    }
    const newUser = { username: registerData.username, email: registerData.email, password: registerData.password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify({ username: newUser.username, email: newUser.email }));
    localStorage.setItem('isLoggedIn', 'true');
    alert('Registration successful');
    try { window.dispatchEvent(new Event('storage')); } catch (e) {}
    if (localStorage.getItem('pendingCheckout') === 'true') {
      localStorage.removeItem('pendingCheckout');
      navigate('/cart');
      return;
    }
    setRegisterData({ username: "", email: "", password: "" });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
    <div style={{marginTop:'70px'}}></div>
    <div className="login-wrapper">
       
      <div className="container1">

        {/* Login Form */}
        <div className="form-box login">
          <form onSubmit={handleLoginSubmit}>
            <h1>Login</h1>

            <div className="input-box">
              <input
                type="text"
                name="username"
                placeholder="username"
                required
                value={loginData.username}
                onChange={handleLoginChange}
              />
              <i className="fa-solid fa-user"></i>
            </div>

            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="password"
                required
                value={loginData.password}
                onChange={handleLoginChange}
              />
              <i className="fa-solid fa-lock"></i>
            </div>

            <div className="forgot-link">
              <button type="button" className="link-btn">Forgot Password?</button>

            </div>

            <button type="submit" className="btn1">Login</button>

            <p>Or register with social platforms</p>

             <div className="icons">
            
              <a href="https://www.facebook.com" className="text-light me-3 icon1 facebook-color1"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/accounts/login/?hl=en" className="text-light me-3 icon1 insta-color1"><i className="bi bi-instagram"></i></a>
              <a href="https://linkedin.com" className="text-light me-3 icon1 google-color1" ><i className="bi bi-google"></i></a>
              
              </div>

            
          </form>
        </div>

        {/* Registration Form */}
        <div className="form-box registration">
          <form onSubmit={handleRegisterSubmit}>
            <h1>Registration</h1>

            <div className="input-box">
              <input
                type="text"
                name="username"
                placeholder="username"
                required
                value={registerData.username}
                onChange={handleRegisterChange}
              />
              <i className="fa-solid fa-user"></i>
            </div>

            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={registerData.email}
                onChange={handleRegisterChange}
              />
              <i className="fa-solid fa-envelope"></i>
            </div>

            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="password"
                required
                value={registerData.password}
                onChange={handleRegisterChange}
              />
              <i className="fa-solid fa-lock"></i>
            </div>

            <button type="submit" className="btn1">Register</button>

           <p>Or register with social platforms</p>
            <div className="icons">
               
              <a href="https://www.facebook.com" className="text-light me-3 icon1 facebook-color1"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/accounts/login/?hl=en" className="text-light me-3 icon1 insta-color1"><i className="bi bi-instagram"></i></a>
              <a href="https://linkedin.com" className="text-light me-3 icon1 google-color1" ><i className="bi bi-google"></i></a>
              
              </div>
            
          </form>
        </div>

        {/* Toggle Box */}
        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            <button className="btn1 register-btn">Register</button>
          </div>

          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account</p>
            <button className="btn1 login-btn">Login</button>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}
