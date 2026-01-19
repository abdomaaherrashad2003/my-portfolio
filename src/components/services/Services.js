import React from 'react'
import "./services.css"
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";
function Services() {
  return (
    <section id="services">
      <div className="top_section">
      <h5>What I Offer</h5>
      <h2>Services</h2>

    </div>

    <div className='container container_services'>
      <article className='card'>
        <MdDesignServices  className='icon'/>
        <h3>Design Services</h3>
        <p className='text-ligth'>I create visually appealing and user-friendly designs that enhance your digital presence.</p>
      </article>
       <article className='card'>
        <IoIosRocket className='icon'/>
        <h3>Development Services</h3>
        <p className='text-ligth'>I build responsive and interactive websites using modern web technologies.</p>
      </article>
       <article className='card'>
        <FaCode className='icon'/>
        <h3>Development Services</h3>
        <p className='text-ligth'>I build responsive and interactive websites using modern web technologies.</p>
      </article>
    </div>
    </section>
  )
}

export default Services
//   <FaCode />