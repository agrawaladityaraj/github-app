import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ title, logo }) => {
  return (
    <nav className="navbar bg-primary">
      <Link to="/">
        <h1>
          {title}
          <i className={logo} />
        </h1>
      </Link>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
