import React from 'react'
import "./Hero.css"
import hero from "../assets/images/hero-bg.jpg"

const Hero = () => {
  return (
    <div >
      <div className="bg-img">
        <img src={hero} alt="" />
      </div>
      <div className='content'>
        <h2>Who Is Erin Carter?</h2>
        <div className="buttons">
          <button >Play</button>
          <button >My List</button>
        </div>
        <p>
        A British woman's tranquil life in Barcelona spirals out of control when an armed robbery at a supermarket exposes her secret... and violent past.


        </p>
      </div>


    </div>
  )
}

export default Hero;