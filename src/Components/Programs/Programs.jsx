import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'


const Programs = () => {
  return (
    <div class='programs'>
      
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt=""></img>
          <p>Dentista </p>
        </div>
      </div>

      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt=""></img>
          <p>Medico General</p>
        </div>
      </div>
    </div>
  )
}
export default Programs