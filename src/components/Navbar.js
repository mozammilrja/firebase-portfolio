import React from "react";
// import logo from './logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
      <Link to="/" className="brand">Portfolio</Link>
                {/* <Link to="/" className="logo" > <img src={logo}  alt="logo"   width="70" height="70"/> </Link> */}
            
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/service" class="nav-link active">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" class="nav-link active">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" class="nav-link active">
                  Contact
                </Link>
              </li>
            </ul>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
