import React from 'react'
import "./projects.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"


const ProjectsData=[

 {
  id:1,
  image:IMG1,
 
  disc:"React E-Commerce",
  git_hub:"https://github.com/abdomaaherrashad2003/React-Ecommerce",
  live_demo:"https://react-ecommerce-mfkt.vercel.app/"

}
  , {
  id:2,
  image:IMG2,
  
  disc:"Task Manager",
  git_hub:"https://github.com/abdomaaherrashad2003/ToDoList",
  live_demo:"https://to-do-list-phi-nine-20.vercel.app/"
}  

]

export default function Projects() {
  return (
    <section className='Projects' id='projects'>
      <div className="top_section">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

    </div>
      <div className='container projects_container'>
        {
          ProjectsData.map(({id,image,disc,git_hub,live_demo})=>(
             <article className='portfolio_item'>
        <div className='portfolio_item_image'>
          <img src={image} alt='' />

        </div>
        <h3>{disc}</h3>
        <div className='portfolio_item_btns'>
          <a 
  href={git_hub !== "#" ? git_hub : undefined} 
  target={git_hub !== "#" ? "_blank" : undefined} 
  rel="noopener noreferrer"
  className='btn'
>
  Git Hub
</a>

<a 
  href={live_demo !== "#" ? live_demo : undefined} 
  target={live_demo !== "#" ? "_blank" : undefined} 
  rel="noopener noreferrer"
  className='btn btn-primary'
>
  Live Demo
</a>

        </div>
        </article>

          ))
 }
       
      </div>
    </section>
  )
}
