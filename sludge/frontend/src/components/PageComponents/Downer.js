import React from 'react';
import '../../App.css';
import '../../MiniLaptop.css';
import '../../Mobile.css';
import '../../Tablet.css';
import { useHistory } from 'react-router-dom';
import { FaHome, FaBlog } from "react-icons/fa";
import { IoFitness } from "react-icons/io5";
import {SiMinutemailer} from "react-icons/si";
function Downer() {
    const history = useHistory();
    const handleHome = () => {
        history.push('/')
    }

    const handleBlog = () => {
        history.push('/blog')
    }

    const handleFitness = () => {
        history.push('/exercises')
    }

    const handleContacts = () => {
        history.push('/feedback')
    }
  return (
    <div className='downer-container'>
        <div className='downer-items' onClick={handleHome}>
            < FaHome />
            <p>Home</p>
        </div>
        <div className='downer-items' onClick={handleBlog}>
            < FaBlog />
            <p>Blog</p>
        </div>
        <div className='downer-items' onClick={handleFitness}>
            < IoFitness />
            <p>Fitness</p>
        </div>
        <div className='downer-items' onClick={handleContacts}>
            < SiMinutemailer />
            <p>Contacts</p>
        </div>
    
    </div>
  )
}

export default Downer