import React from "react";
import { Link } from "react-router-dom";

import { images } from "../../constants";
import "./Navbar.css";

const Navbar = () => {
  const user = true;
  return (
    <div className="navbar">
      <div className="navbar__left">
        <i className="navbar__left-icons fa-brands fa-facebook"></i>
        <i className="navbar__left-icons fa-brands fa-twitter"></i>
        <i className="navbar__left-icons fa-brands fa-instagram-square"></i>
        <i className="navbar__left-icons fa-brands fa-pinterest-square"></i>
      </div>
      <div className="navbar__center">
        <ul className="navbar__center-list">
          <li className="navbar__center-list-item">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="navbar__center-list-item">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="navbar__center-list-item">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="navbar__center-list-item">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="navbar__center-list-item">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="navbar__right">
        {user ? (
          <img
            className="navbar__right-img"
            src={images.logo}
            alt="profil pic"
          />
        ) : (
          <ul className="navbar__center-list">
            <li className="navbar__center-list-item">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="navbar__center-list-item">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="navbar__right-search fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Navbar;
