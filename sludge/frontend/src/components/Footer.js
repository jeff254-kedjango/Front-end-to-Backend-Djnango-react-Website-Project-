import React from 'react';
import django from './video/django.png';
import react from './video/React-icon.svg.png';
import redux from './video/ai.jpg';
import html from './video/css.png';
import native from './video/native2.png';
import foot from './video/savana.jpg';
import '../App.css';
import '../MiniLaptop.css';
import '../Mobile.css';
import '../Tablet.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='tech-skills'>
            <div className='techi-cont'>
                <h1 className='tech-title'>Tech Skills: </h1>
            </div>
            <div className='tech-stack'>
                <div className='tech-under'>
                    <div className='tech-sub'>
                        <img src={django} alt=''/>
                    </div>
                    <p>Django/Python</p>
                    <div className='tech-details'>
                        <p>Profecient in django and related technologies such as: Django Channels, Django Rest Framework, Redux. </p>
                    </div>
                </div>
                <div className='tech-under'>
                    <div className='tech-sub'>
                        <img src={react} alt=''/>
                    </div>
                    <p>React</p>
                    <div className='tech-details'>
                        <p>React Js for web technology and React Native for mobile applications (both Android and IOS ). Check projects for more.</p>
                    </div>
                </div>
                <div className='tech-under'>
                    <div className='tech-sub'>
                        <img src={html} alt=''/>
                    </div>
                    <p>HTML / Css</p>
                    <div className='tech-details'>
                        <p>Managed static websites for church, personal portfolios, company portfolios and startup businesses. Also profecient in FIGMA and CSS Animations.</p>
                    </div>
                </div>
                <div className='tech-under'>
                    <div className='tech-sub'>
                        <img src={redux} alt=''/>
                    </div>
                    <p>Artificial Intelligence</p>
                    <div className='tech-details'>
                        <p>Built a digital automated exam marker that uses a phone camera and a laptop. I'm still learning...and open to learning. Scroll to projects for more</p>
                    </div>
                </div>
 
            </div>
        </div>
    </div>
  )
}

export default Footer