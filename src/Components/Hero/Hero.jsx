import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div class='hero container'>
      <div className="hero-text">
        <h1>Centro médico "San José"</h1>
        <p>
        "En el Centro Médico San José, su salud es nuestra prioridad. Ofrecemos atención médica integral y personalizada con un equipo de profesionales altamente calificados y tecnología de vanguardia. Su bienestar es nuestra misión. ¡Confíe en nosotros para cuidar de usted y su familia!"        </p>
        <button className='btn'>Mas información <img src={dark_arrow} alt=""/></button>
      </div>
    </div>
  )
}

export default Hero