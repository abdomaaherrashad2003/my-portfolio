import React from 'react'
import "./footer.css"
import { FaFacebookSquare, FaInstagramSquare, FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <footer>

      {/* logo */}
      <a href="#home" className='footer_logo'>Abdelrhman</a>

      {/* links */}
      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
      </ul>

      {/* socials */}
      <div className='footer_socials'>
        <a
          href="https://www.facebook.com/abdo2003.7"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare />
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagramSquare />
        </a>

        <a
          href="https://t.me/abdomaher2003"
          target="_blank"
          rel="noreferrer"
        >
          <FaTelegramPlane />
        </a>
      </div>

      {/* copyright */}
      <small className='footer_copyrigth'>
        &copy; 2026 Abdelrhman Maher. All rights reserved.
      </small>

    </footer>
  )
}

export default Footer
