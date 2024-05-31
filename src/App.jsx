import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Programs from './Components/Programs/Programs.jsx'
import Title from './Components/Title/Title.jsx'
import About from './Components/About/About.jsx'
import Direction from './Components/Direction/Direction.jsx'
import Contacts from './Components/Contacts/Contacts.jsx'


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
        <Direction/>
        <Contacts/>
        
    </div>
  )
}

export default App
