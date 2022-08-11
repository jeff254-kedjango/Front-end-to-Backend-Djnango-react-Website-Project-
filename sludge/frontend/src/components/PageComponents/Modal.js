import React from 'react'
import '../../App.css'
import '../../MiniLaptop.css';
import '../../Mobile.css';
import '../../Tablet.css';
import ReactPlayer from 'react-player'
import { IoCloseCircle } from "react-icons/io5";
function Modal({handleShow, content}) {

  return (
    <div className='modal' onClick={handleShow}>
        <div className='modal-container'>
            <div className='modal-content'>
                <h1 onClick={handleShow} className='close-icon'>< IoCloseCircle /></h1>
                <h1 >{content.title}</h1>
                <div className='modal-video'>
                    <ReactPlayer height='100%' width='80%' controls url={content.video} type='video/mp4' />
                </div>
                <div className='modal-desc'>
                    <p>{content.description}</p>
                </div>
            </div>
            
           
        </div>
        
    </div>
  )
}

export default Modal