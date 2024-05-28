import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Programs from './Components/Programs/Programs.jsx'
import Title from './Components/Title/Title.jsx'
import About from './Components/About/About.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title subTitle='Acerca de nosotros' title='¿Quienes somos?'/>
      <div class='programs'>  
          <Programs/>
        </div>
        <About/>
    </div>
  )
}

export default App
