import React from "react"
import "./about.css"
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import me from "../../assets/bg-about-removebg-preview.png"
function About() {
  return (
  <section className="about" id="about">
    <div className="top_section">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
    </div>
    <div className="container about_container">
      <div className="about_me">
        <div className="about_me_image">
          <img src={me} alt=""/>
        </div>
      </div>
  
    <div className="about_content">
      <div className="about_cards">
        <div className="about_card">
          <FaAward className="about_icon"/>
          <h5>Experience</h5>
          <small>Internships & Academic Projects</small>
        </div>
            <div className="about_card">
          <FiUser className="about_icon"/>
          <h5>Clients</h5>
          <small>Worked with classmates and mentors on collaborative projects</small>
        </div>
            <div className="about_card">
         <VscFolderLibrary className="about_icon"/>
          <h5>Projects</h5>
          <small>Completed several personal and academic projects using React, HTML, CSS, and JS</small>
        </div>
      </div>
      <p>I'm a front-end developer passionate about creating responsive and interactive web applications using React.  
I enjoy turning designs into functional websites and continuously learning new technologies to improve my skills.
</p>
      <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
    </div>
  </section>
  )
}
export default About