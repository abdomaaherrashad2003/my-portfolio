import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function HomeIcons() {
  return (
    <div className='home_icons'>
        <a href='https://www.linkedin.com/in/abdo-maher-9a8a23315' target='_blank'><FaLinkedin /></a>
        <a href='https://github.com/abdomaaherrashad2003' target='_blank'><FaGithub /></a>
        <a href='https://wa.me/201503117927' target='_blank'><FaWhatsapp /></a>
    </div>
  )
}

export default HomeIcons