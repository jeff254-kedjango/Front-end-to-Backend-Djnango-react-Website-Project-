import React from 'react';
import '../App.css';
import '../MiniLaptop.css';
import '../Mobile.css';
import '../Tablet.css';
import { useHistory, Link } from 'react-router-dom';
import { IoCloseCircle } from "react-icons/io5";

function Contacts({ handleContacts }) {
    const history = useHistory()
    const handleFeedback = () => {
        history.push('/feedback')
    }

    const handleTwitter = () => {
        <Link to='https://twitter.com/KwemangeN'/>
    }
  return (
    <div className='cont-pop' >
        <div className='close-icon' onClick={handleContacts}>
            < IoCloseCircle />
        </div>
        <div className='pop-txt-top' onClick={handleTwitter}>
            <a style={{textDecoration: 'none'}} href="https://twitter.com/KwemangeN" target="_blank" rel="noreferrer">
                <h1>twitter</h1>            
            </a>
        </div>
        <div className='pop-txt-bottom' onClick={handleFeedback}>
            <h1>text</h1>
        </div>
    </div>
  )
}

export default Contacts