import React from "react";
import "./Navbar.css";
import logo from "../../assets/react.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbartitle">Finance app</div>
      <div className="navbarLinks">
        <Link className="navbarLink" to="/search">
          Rechercher
        </Link>
        <Link className="navbarLink" to="/design-page">
          Design page
        </Link>
      </div>
      <div className="navbar-buttons">
        <button className="navbar-button">Connexion</button>
        <button className="navbar-button">Inscription</button>
      </div>
    </div>
  );
};

export default Navbar;
