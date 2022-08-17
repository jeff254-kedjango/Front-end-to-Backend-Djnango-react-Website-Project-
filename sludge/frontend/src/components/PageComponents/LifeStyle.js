import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../../App.css';
import '../../MiniLaptop.css';
import '../../Mobile.css';
import '../../Tablet.css';
import axiosInstance from '../../axios';
import Contacts from '../Contacts';
import { Grid } from '@material-ui/core';
import sub from '../video/download.png';
import PostCard from './PostCard';
import ImageCard from './ImageCard';
import DetailsCard from './DetailsCard';
import Downer from './Downer';
import {Helmet} from "react-helmet";

function LifeStyle() {

  const history = useHistory();
  const [state, setState] = useState(false);
  const [posts, setPosts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(3);
  const [nutriStart, setNutriStart] = useState(0);
  const [nutriLast, setNutriLast] = useState(1);

  const currentPost = posts.slice(startIndex, lastIndex)
  const currentImage = posts.slice(nutriStart, nutriLast)


  useEffect(() => {
    const fetchPostData = async () => {
      const postData = await axiosInstance.get('posts/')
      setPosts(postData.data);
    }
    fetchPostData()
  }, []);


  const nextPage = () => {
    if(lastIndex < posts.length) {
      setStartIndex( startIndex + 3 )
      setLastIndex( lastIndex + 3 )
    } 
    if(lastIndex - startIndex >= posts.length) {
      setStartIndex( startIndex + 3 )
      setLastIndex( lastIndex + (lastIndex - startIndex) )
    }

  }

  const lastPage = () => {
    if(startIndex !== 0 ) {
      if( lastIndex - startIndex <= 3) {
        setStartIndex( startIndex - 3 )
        setLastIndex(lastIndex - (lastIndex - startIndex) )
      } else {
        setStartIndex( startIndex - 3 )
        setLastIndex( lastIndex - 3 )     
      }      
    }
 
  }

  const nextNutri = () => {
    if(nutriLast < posts.length) {
      setNutriStart( nutriStart + 1 )
      setNutriLast( nutriLast + 1 )
    } 
    if(nutriLast - nutriStart >= posts.length) {
      setNutriStart( nutriStart + 1 )
      setNutriLast( nutriLast + (nutriLast - nutriStart) )
    }

  }

  const prevNutri = () => {
    if(nutriStart !== 0 ) {
      if( nutriLast - nutriStart <= 1) {
        setNutriStart( nutriStart - 1)
        setNutriLast(nutriLast - (nutriLast - nutriStart) )
      } else {
        setNutriStart( nutriStart - 1)
        setNutriLast( nutriLast - 1 )     
      }      
    }
 
  }

  const handleContacts = () => {
      setState(!state)
  }


  const handleExercises = () => {
      history.push('/exercises')
  }

  const handleLifeStyle = () => {
      history.push('/blog')
  }

  const handleBack = () => {
    history.push('/lifestyle')
  }

  return (
    <div className='blog'>
        <Helmet>
          <title>Blog</title>
        </Helmet>
        <div className='blog-logo-container'>
        <Grid item xs={12} className='blog-logo'>
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
        </div>
        <div className='bread-crumb-button-blog' onClick={handleBack}><h1>back</h1></div><div className='bread-crumb-button-blog' onClick={handleBack}><h1>back</h1></div>
        <div className='blog-head'>
          <h1>onset:</h1>
          <p>I post my thoughts here instead of tweeting sometimes.</p>
          <p>All opinions here are personal...but researched</p>
          <p>CLICK on contacts to share your opinions or ask questions.</p>
        </div>
        <div className='blog-cont'>
          <div className='blog-vd'>
            <div className='vd-sidebar'>
              <div className='vd-sidebar-btn-up' onClick={nextNutri}>
                <p>next</p>
              </div>
              <div className='vd-sidebar-btn-down' onClick={prevNutri}>
                <p>prev</p>
              </div>
            </div>
            <div className='vd-carousel'>
              {currentImage.map((item) => (
                < ImageCard item={item}/>
              ))}
            </div>
            <div className='vd-details'>
              {currentImage.map((item) => (
                < DetailsCard item={item} />
              ))}
              {currentImage.length === 0 && <div className='project-culture'><h1>Loading content...referesh page if this persists</h1></div> }
            </div>
          </div>
          <div className='blog-plates'>
            <h3>posts</h3>
            {currentPost.map((item) => (
               < PostCard item={item} />
            ))}
            {currentPost.length === 0 && <div className='project-culture'><h1>Loading content...referesh page if this persists</h1></div> }
            <div className='blog-pagination'>
                <div className='pg-buttons' onClick={lastPage} >
                    <p>previous</p>
                </div>
                <div className='pg-buttons' onClick={nextPage}>
                    <p>next</p>
                </div>
            </div>
          </div>
        </div>
        < Downer />
    </div>
  )
}

export default LifeStyle


