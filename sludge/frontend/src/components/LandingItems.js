import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import '../App.css';
import '../MiniLaptop.css';
import '../Mobile.css';
import '../Tablet.css';
import Contacts from './Contacts';
import sub from './video/download.png';
import { useHistory } from 'react-router-dom';

function LandingItems() {
    const history = useHistory();
    const [state, setState] = useState(false)

    const handleContacts = () => {
        setState(!state)
    }

    const handleProjects = () => {
        history.push('/projects')
    }

    const handleLifeStyle = () => {
        history.push('/lifestyle')
    }



  return (
    <Grid container className='items' >
        <Grid item xs={12} className='logo'>
            <div>
                <h1>Kwemange <span>Nyagrowa</span></h1>
            </div>
            <div className='sub'>
                <p>country : </p>
                <img src={sub} alt=''/>
            </div>
            <div className='contacts'onClick={handleContacts} >
                <h1>contacts</h1>
            </div>
            {state && <Contacts handleContacts={handleContacts} />}
            
        </Grid>
        <Grid item xs={12} className='under-logo-landing'>
            <Grid item xs={12} md={8} className='main'>
                <h1>Bio:</h1>
                <p>Software developer since 2019. Click on TECH PROFILE to see my skill stack and projects. </p>
                <p>Also seven years practise on Injury Rehabilitation, Fitness and Nutrition. </p>
                <p>Click on LIFESTYLE to get my workout schedules and nutrition tips.</p>
                <p>plus...you can click CONTACTS for inquiries.</p>
                
            </Grid>
            <Grid item xs={12} md={4} className='main-btns'>
                <div className='nav-btns-one' onClick={handleProjects} >
                    <h3>tech profile</h3>
                </div>
                <div className='nav-btns-two' onClick={handleLifeStyle}>
                    <h3>lifestyle</h3>
                </div>
            </Grid>
            
        </Grid>
        <div className='main-bg'></div>
    </Grid>
  )
}

export default LandingItems

