import React, {useState, useEffect} from 'react';
import axiosInstance from '../../axios';
import {useParams} from 'react-router-dom';
import '../../App.css';
import '../../MiniLaptop.css';
import '../../Mobile.css';
import '../../Tablet.css';
import Contacts from '../Contacts';
import { Grid } from '@material-ui/core';
import RelatedArticle from './RelatedArticle';
import sub from '../video/download.png';
import Downer from './Downer';
import {useHistory} from 'react-router-dom';
import {Helmet} from 'react-helmet'

function BlogSingle() {
    const {slug} = useParams();
    const [blog, setBlog] = useState([]);
    const [related, setRelated] = useState(null);
    const [state, setState] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(3);
    const history = useHistory();
    useEffect(() => {

            axiosInstance
            .get('posts/' + slug)
            .then(res => {
                setBlog(res.data)
                return axiosInstance.get('posts/?category=' + res.data.category)
            })
            .then(res=> {
               setRelated(res.data)
               window.scrollTo(0, 0)
            })
    }, [slug]);
    

    const current = related && related.slice(startIndex, lastIndex)
    const pages = related && related.length



  const nextPage = () => {
    if(lastIndex < related.length) {
      setStartIndex( startIndex + 3 )
      setLastIndex( lastIndex + 3 )
    } 
    if(lastIndex - startIndex >= related.length) {
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

  const handleContacts = () => {
      setState(!state)
  }

  const handleBack = () => {
    history.push('/blog')
  }

  return (
    <div className='blog-single-nana'>
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
        <div className='blog-single-image'>
            <div className='bread-crumb-button-blog' onClick={handleBack}><h1>back</h1></div>
            <img src={blog.post_image} alt='' />

        </div>
        <div className='blog-single-container'>
            <div className='blog-single-content'>
                <h1>{blog.title}</h1>
                <h3>{blog.excerpt}</h3>
                <p>{blog.content}</p>
                <p>{blog.content_two}</p>
                <h4>{blog.published}</h4>
            </div>
        </div>
        <div className='blog-related-section-nana'>
            <div className='blog-related-title'>
                <h1>Related Posts </h1>
            </div>
            <div className='blog-related-items'>
                {related && < RelatedArticle data={current} lastPage={lastPage} nextPage={nextPage} pages={pages} />}
            </div>
        </div>

        < Downer />
    </div>
  )
}

export default BlogSingle
