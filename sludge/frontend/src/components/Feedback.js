import React, { useState } from 'react';
import '../App.css';
import '../MiniLaptop.css';
import '../Mobile.css';
import '../Tablet.css';
import axiosInstance from '../axios';
import { useHistory } from 'react-router-dom';
import { SiMinutemailer } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import {Helmet} from "react-helmet";

function Feedback() {
  const history = useHistory();
  const initialFormData = Object.freeze({
      first_name:'',
      last_name:'',
      email:'',
      message:'',
  })

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData ({
      ...formData,
      [e.target.id] : e.target.value.trim()
    })
  }

  const handleBack = () => {
    history.push('/')
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance 
      .post(`feedback/`,{
        firstname:formData.first_name,
        lastname:formData.last_name,
        email:formData.email,
        message:formData.message
      })

    window.location.reload(false)

  }

  return (
    <div className='fback'>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
        <div className='bread-crumb-button-blog' onClick={handleBack}><h1>back</h1></div>
        <div className='fback-words'>
            <h3>contacts:</h3>
            <h5>I reply faster on the feedback form. It works!!</h5>
            <h3>< SiMinutemailer /> kwemangenyagrowa@gmail.com</h3> 
            <h3>< FaTwitter /> Kwemange Nyagrowa</h3>
        </div>
        <div className='fback-form'>
          <div className='fback-under'>
              <div className='fback-name'>
                <input id='first_name' type="text" placeholder="First Name" onChange={handleChange}  className="fback-one"/>
                <input id='last_name' type="text" placeholder="Last Name"  className="fback-one" onChange={handleChange} />
              </div>
              <div className='fback-content'>
                <input id='email' type="email" placeholder="Email" className="fback-email" onChange={handleChange}/>
                <textarea id='message' type="text" placeholder="Message" className="fback-message" onChange={handleChange}/>
              </div>
              <div className='fback-submit' onClick={handleSubmit}>
                <h1>send</h1>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Feedback


