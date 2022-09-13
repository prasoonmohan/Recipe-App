import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex">
      <a href="" className="logo">
        Tasty <br /> Layers
      </a>
      <nav>
        <ul className="nav-section">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
