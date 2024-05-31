import React from 'react'
import './About.css'
import about_img from '../../assets/medicocarlos.png'
import play_img from '../../assets/play-icon.png'
{/*import odontologa_img from '../../assets/odontologia.png'*/}


const About = () => {
  return (
    <div className='about'>
        <div className="about_left">
            <img src={about_img} alt="" className='about_img'/>
            <img src={play_img} alt="" className='play_img'/>
        </div>
        <div className="about_right">
            <h3>Acerca de lo que hacemos</h3>
            <h2>Nuestras</h2>
            <h2>Especialidades</h2>
            
            <p className='negrita'>Para medicina general:</p>
            <ol class='medicina'>
                <li>Medicina interna: Para el diagnóstico y tratamiento de enfermedades en adultos.</li>
                <li>Pediatría: Para el cuidado de niños y adolescentes.</li>
                <li>Ginecología y obstetricia: Para el cuidado de la salud reproductiva de las mujeres, incluyendo atención prenatal y obstetricia.</li>
                <li>Dermatología: Para el diagnóstico y tratamiento de enfermedades de la piel, cabello y uñas.</li>
                <li>Oftalmología: Para el cuidado de la salud ocular y la corrección de problemas de visión.</li>
                <li>Otorrinolaringología: Para el diagnóstico y tratamiento de problemas del oído, nariz y garganta.</li>
            </ol>
            
            <p className='negritaodonto'> Para odontologia:</p>
            <ol class='odontologia'>
                <li>Odontología general: Para limpiezas dentales, tratamientos de caries, restauraciones dentales, etc.</li>
                <li>Ortodoncia: Para la corrección de la posición de los dientes y mandíbula.</li>
                <li>Cirugía oral: Para extracciones dentales, implantes dentales, cirugía de encías, etc.</li>
                <li>Endodoncia: Para el tratamiento de conductos radiculares (endodoncias).</li>
                <li>Periodoncia: Para el tratamiento de enfermedades de las encías y tejidos que sostienen los dientes.</li>
                <li>Odontopediatría: Para el cuidado dental de niños y adolescentes.</li>
            </ol>
        </div>
    </div>
  )
}
export default About