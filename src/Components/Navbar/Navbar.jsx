import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav class='container'>
        <img src={logo} alt="" class='logo'/>
        <ul>
            <li>Inicio</li>
            <li>Contacto</li>
            <li>Acerca de nosotros</li>
            <li>Reservacion de citas</li>
            <li><button class='btn'>Contacto</button></li>
        </ul>
    </nav>
  )
}

export default Navbar

/*hacer un border radios para mejor estilo */