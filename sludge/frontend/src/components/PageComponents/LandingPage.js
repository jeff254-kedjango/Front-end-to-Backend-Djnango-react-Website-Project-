import React from 'react'
import '../../App.css'
import '../../MiniLaptop.css';
import '../../Mobile.css';
import '../../Tablet.css';
import LandingItems from '../LandingItems'; 
import { Helmet } from "react-helmet";

function LandingPage() {

  
  return (
    <div className='lpg'>
      <Helmet>
          <title>Nyagrowa</title>
          <meta charSet="utf-8" />
          <meta name="description" content="Get software technology solutions" />
          <meta name="keywords" content="Software, Developer, Engineer, Django, React, React Js, React Native, IT, Kenya, Nairobi, Kisumu, Kwemange, Nyagrowa, Ecommerce, Mobile, Website" />
          <link rel="canonical" href="http://kwemangenyagrowa.me.ke" />
      </Helmet>
      <LandingItems />
    </div>
  )
}

export default LandingPage

