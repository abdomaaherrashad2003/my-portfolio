import React from 'react'
import "./skills.css"
import css from"../../assets/css3.svg"
import Xpressjs from "../../assets/expressjs.svg"
import Figma from "../../assets/figma.svg"
import Javascsript from "../../assets/javascript.svg"
import Mongodb from "../../assets/mongodb.svg"
import Nodejs from "../../assets/nodejs.svg"
import Reactjs from '../../assets/react.svg'
import Tailwind from "../../assets/tailwindcss.svg"
const SkillsData=[
  
  {
  id:1,
  image:css,
  title:"CSS",
  disc:"User Interface"
}  , {
  id:2,
  image:Javascsript,
  title:"JavaScript",
  disc:"Interaction"
}  , {
  id:3,
  image:Reactjs,
  title:"React",
  disc:"Framework"
}  , {
  id:4,
  image:Nodejs,
  title:"Node.js",
  disc:"Web Server"
}  , {
  id:5,
  image:Tailwind,
  title:"Tailwind",
  disc:"User Interface"
}  , {
  id:6,
  image:Figma,
  title:"Figma",
  disc:"Disgn Tool"
}  , {
  id:7,
  image:Xpressjs,
  title:"Express.js",
  disc:"Backend Framework"
}  , {
  id:8,
  image:Mongodb,
  title:"MongoDB",
  disc:"Database"
}  











]
function Skills() {
  return (
    <section className='skills' id='skills'>
       <div className="top_section">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

    </div>

    <div className='container container_skills'>
      {
        SkillsData.map(({id,image,title,disc})=>(
          <article className='card_skill'>
        <div className='icon'>
          <img src={image} alt=''/>
        </div>
        <div className='content'>
          <h4>{title}</h4>
          <p className='text-ligth'>{disc}</p>
        </div>

      </article>

        ))
      }
      
    </div>
    </section>
  )
}

export default Skills