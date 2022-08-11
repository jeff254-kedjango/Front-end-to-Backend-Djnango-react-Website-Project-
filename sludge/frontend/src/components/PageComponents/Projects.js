import React, {useState, useEffect} from 'react';
import Header from '../header';
import Intro from '../Intro' ;
import ProjectCard from './ProjectCard';
import Footer from '../Footer';
import Modal from './Modal';
import axiosInstance from '../../axios';
import '../../App.css';
import '../../MiniLaptop.css';
import '../../Mobile.css';
import '../../Tablet.css';
import Downer from './Downer';
import { Helmet } from "react-helmet";


function Projects() {

  const [projects, setProjects] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(2);
  const [statement, setStatement] = useState();
  const [show, setShow] = useState(false);
  const [content, setContent] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect((state) => {
    axiosInstance.get('projects/')
    .then((res) => {
      setProjects(res.data)
    })
    .catch()
  }, [])

  const current = projects.slice(startIndex , lastIndex)

  const handleShow = (data) => {
    setShow(!show)
    setContent(data)
  }
  const handleCategory = (e) => {
    if(startIndex === 0) {
      if(e === 0){
        axiosInstance.get('projects/')
        .then((res) => {
          setProjects(res.data)
        })
      } else {
        axiosInstance.get('projects/?category=' + e)
        .then((res) => {
          setProjects(res.data)
        })
      }
    } else {
      setStartIndex(0)
      setLastIndex(2)
      setProjects([])
      if(e === 0){
        axiosInstance.get('projects/')
        .then((res) => {
          setProjects(res.data)
        })
      } else {
        axiosInstance.get('projects/?category=' + e)
        .then((res) => {
          setProjects(res.data)
        })
      }
    }
  }

  const nextPage = () => {
    if(lastIndex < projects.length) {
      setStartIndex( startIndex + 2 )
      setLastIndex( lastIndex + 2 )
    } 
    if(lastIndex + 1 === projects.length) {
      setStartIndex( startIndex + 2 )
      setLastIndex( lastIndex + 1 )
    }

  }

  const lastPage = () => {
    if(startIndex !== 0 ) {
      if( lastIndex - startIndex === 1) {
        setStartIndex( startIndex - 2 )
        setLastIndex(lastIndex - 1 )
      } else {
        setStartIndex( startIndex - 2 )
        setLastIndex( lastIndex - 2 )     
      }      
    }
 
  }



  return (
    <div className='projects'>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      < Header />
      {show && < Modal handleShow={handleShow} content={content}/>}
      < Intro />
      < Footer />
      < ProjectCard  handleCategory={handleCategory}  handleShow={handleShow} current={current} lastPage={lastPage} nextPage={nextPage}/>
      <div className='project-pagination'>
          <div className='pg-buttons' onClick={lastPage}>
              <p>previous</p>
          </div>
          <div className='pg-buttons' onClick={nextPage}>
              <p>next</p>
          </div>
      </div>
      < Downer />
    </div>
  )
}

export default Projects 