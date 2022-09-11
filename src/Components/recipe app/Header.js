import React from "react";

function Header() {
  return (
    <header className="flex">
      <a href="" className="logo">
        Tasty <br /> Layers
      </a>
      <nav>
        <ul className="nav-section">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Checkout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
