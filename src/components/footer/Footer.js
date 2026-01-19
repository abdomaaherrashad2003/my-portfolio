import React from 'react'
import "./footer.css"
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <a href='#' className='footer_logo'>Abdelrhman</a>
      <ul className='permalinks'>
        <a href='#'>Home</a>
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>
        <a href='#projects'>Projects</a>
        <a href='#skills'>Skills</a>
        <a href='#services'>Services</a>
      </ul>
      <div className='footer_socials'>
        <a href='https://www.facebook.com/abdo2003.7' target='_blank'><FaFacebookSquare /></a>
        <a href='#' target='_blank'><FaInstagramSquare /></a>
        <a href='https://t.me/abdomaher2003' target='_blank'><FaTelegramPlane /></a>
      </div>
      <div>
        <small className='footer_copyrigth'>&copy;<a href='#'> 2026 Abdelrhman Maher</a> All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer