import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import '../../App.css'
import '../../MiniLaptop.css';
import '../../Mobile.css';
import '../../Tablet.css';
import { Grid } from '@material-ui/core'
import Contacts from '../Contacts';
import sub from '../video/download.png';
import { Helmet } from "react-helmet";

function Fitness() {


  const history = useHistory();
  const [state, setState] = useState(false)



  const handleContacts = () => {
      setState(!state)
  }

  const handleExercises = () => {
      history.push('/exercises')
  }

  const handleBack = () => {
      history.push('/')
  }

  const handleLifeStyle = () => {
      history.push('/blog')
  }


  return (
    <Grid container className='items' >
        <Helmet>
          <title>Lifestyle</title>
        </Helmet>
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
            {state && <Contacts />}
            
        </Grid>
        <Grid item xs={12} className='under-logo'>
            <Grid item xs={12} md={8} className='quick-guide'>
              <h1>Quick guide:</h1>
              <p>Blog....for social opinions.</p>
              <p> Fitness....for nutiriton and exercise schedules.</p>
            </Grid>
            <Grid item xs={12} md={4} className='ftness-menu'>
              <div className='ftness-buttons-one' onClick={handleLifeStyle}>
                <h1>blog</h1>
              </div>
              <div className='ftness-buttons-two' onClick={handleExercises}>
                <h1>fitness</h1>
              </div>
            </Grid>
            
        </Grid>
        <div className='ftness-bg'></div>
        <div className='bread-crumb-button' onClick={handleBack}><h1>back</h1></div>
    </Grid>
  )
}

export default Fitness



