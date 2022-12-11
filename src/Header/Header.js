import React from 'react';
import style from '.././css/style.css';

const Header = () => {
  return (
   
<header className="header">

<div id="menu-btn" className="fas fa-bars"></div>

<a data-aos="zoom-in-left" data-aos-delay="150" href="#"className="logo"> <i className="fas fa-paper-plane"></i><img src='https://i.imgur.com/5Bnog1s.png' style={{height:"100px",width:"140px"}}/> </a>

<nav class="navbar">
    <a data-aos="zoom-in-left" data-aos-delay="300" href="#home">home</a>
    <a data-aos="zoom-in-left" data-aos-delay="450" href="#about">FloorPlan</a>
    <a data-aos="zoom-in-left" data-aos-delay="600" href="#destination">PriceList</a>
    <a data-aos="zoom-in-left" data-aos-delay="750" href="#services">Features</a>
    <a data-aos="zoom-in-left" data-aos-delay="900" href="#gallery">Location</a>
    <a data-aos="zoom-in-left" data-aos-delay="1150" href="#blogs">Ammenities</a>
</nav>

<a data-aos="zoom-in-left" data-aos-delay="1300" href="#book-form" className="btn">book now</a>

</header>

    
  )
}

export default Header;