import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_img from '../../assets/play-icon.png'


const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about_img'/>
            <img src={play_img} alt="" className='play_img'/>
        </div>
        <div className="about-right">
            <h3></h3>
            <h2></h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error voluptatum laboriosam cupiditate mollitia officiis consectetur rerum impedit non alias, iure totam molestias fuga quos sunt sapiente aliquam ducimus quis accusantium!
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, architecto. Cumque similique voluptatem consequatur mollitia tempore asperiores a voluptates eveniet quibusdam. Pariatur deleniti esse eum! Mollitia deserunt tenetur non ipsam.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora velit eius reprehenderit adipisci dicta sapiente quaerat harum reiciendis numquam quisquam, eveniet aliquam, doloremque porro nam corporis, quo officiis odio!
            </p>
        </div>
    </div>
  )
}
export default About