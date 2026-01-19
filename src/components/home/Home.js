import React from 'react'
import "./home.css"
import me from "../../assets/bg-photo-removebg-preview.png"
import cv from "../../assets/Abdelrahman_Maher_Frontend_CV_.pdf"
import HomeIcons from './HomeIcon'
function Home() {
  return (
    <div className='home'>
        <div className='container home_container'>
            <h4>Hello I'm</h4>
            <h1>Abdelrhman Maher</h1>
            <h4 className='text-ligth'>Frontend Developer</h4>
            <div className='btns'>
                <a href={cv} className='btn' download>Bownload Cv</a>
                <a href='#' className='btn btn-primary'>Let's Talk</a>
            </div>
            <div className='me'>
                <img src={me} alt="me" />
        </div>
        <a href='#about' className='scroll_down'>Scroll Down</a>
        <HomeIcons/>
        </div>
       
    </div>
  )
}

export default Home