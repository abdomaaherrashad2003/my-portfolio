import React from 'react'
import "./projects.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"

const ProjectsData=[

 {
  id:1,
  image:IMG1,
 
  disc:"User Interface",
  git_hub:"#",
  live_demo:"#"

}
  , {
  id:2,
  image:IMG2,
  
  disc:"Interaction",
  git_hub:"#",
  live_demo:"#"
}  , {
  id:3,
  image:IMG3,
  
  disc:"Framework",
  git_hub:"#",
  live_demo:"#"
}  , {
  id:4,
  image:IMG4,

  disc:"Web Server",
  git_hub:"#",
  live_demo:"#"
}  , {
  id:5,
  image:IMG5,
  disc:"User Interface",
  git_hub:"#",
  live_demo:"#"
}  , {
  id:6,
  image:IMG6,
  disc:"Disgn Tool",
  git_hub:"#",
  live_demo:"#"
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
