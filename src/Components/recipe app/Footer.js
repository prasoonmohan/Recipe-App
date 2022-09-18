import React from 'react';
import "./css/Footer.scss";
import { BoxIconElement } from 'boxicons';

function Footer() {
  return (
    <div >
    <div className='footer-container'>
        <div className="social-icons">
            <a href="facebook.com"><i class='bx bxl-facebook'></i></a>
            <a href="https://www.instagram.com/web.devofficial/"><i class='bx bxl-instagram' ></i></a>
            <a href="https://twitter.com/mohan_prasoon"><i class='bx bxl-twitter' ></i></a>
        </div>
        <div className="footer-nav">
            <a href="/home">Home</a>
            <a href="">Checkout</a>
        </div>
        <div className="info">
            <li>CONTACT</li>
            <li>BLOG</li>
            <li>CATERING</li>
            <li >DELIVERY</li>
        </div>
    </div>
    <div className="copyright">
    <i class='bx bx-copyright' ></i>
    <p>Prasoon 2002</p>
    </div>
    </div>
  )
}

export default Footer