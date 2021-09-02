import React from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>

          <li>
            <Link to="/">JavaScript</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
