import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav>
        <div className="logo">
            <img className='logo-img' src="/Img/logo.png" alt=""/>
        </div>
        <div className="nav-links">
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Nos réunions</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Témoignage</a></li>
        </div>

        <div className="social-contain">
             <div className="Fb"><FaFacebookF /></div>
             <div className="Instagram"><FaInstagram /></div>
             <div className="Whatsapp"><FaWhatsapp /></div>
        </div>
    </nav>
  )
}
