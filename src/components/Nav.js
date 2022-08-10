import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar-menu">
      <ul className="navbar">
        <li>
          <NavLink className="nav-bar-link" to="/">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/add">
            Add Product
          </NavLink>
        </li>

        <li>
          <NavLink className="nav-bar-link" to="/update">
            Update Product
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/logout">
            Logout
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/profile">
            Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
