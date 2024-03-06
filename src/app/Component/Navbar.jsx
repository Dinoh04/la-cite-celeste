import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
        <div className="logo">
            <img className='logo-img' src="/Img/logo.png" alt=""/>
        </div>
        <div className="nav-links">
          <li><a href="#">Accueil</a></li>
          <li><a href="#">A propos</a></li>
          <li><a href="#">Nos réunions</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Témoignage</a></li>
        </div>

        <div className="social-contain">
             <div className="social-icon"><FaFacebookF /></div>
             <div className="social-icon"><FaInstagram /></div>
             <div className="social-icon"><FaWhatsapp /></div>
        </div>

                 
          <div className="donation">
          <button className='donation-button'>
          Faire un don <FaRegHeart className='heart'/>
            </button> 
          
          </div>
      
    </nav>
  )
}
