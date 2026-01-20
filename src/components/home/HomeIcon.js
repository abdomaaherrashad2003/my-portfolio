import React from 'react'
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

function HomeIcons() {
  return (
    <div className='home_icons'>

      <a
        href="https://www.linkedin.com/in/abdo-maher-9a8a23315"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://github.com/abdomaaherrashad2003"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://wa.me/201503117927"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp />
      </a>

    </div>
  )
}

export default HomeIcons
