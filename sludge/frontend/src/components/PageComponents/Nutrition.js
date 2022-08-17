import React from 'react';
import NutritionCard from './NutritionCard';
import '../../App.css';
import '../../MiniLaptop.css';
import '../../Mobile.css';
import '../../Tablet.css';

function Nutrition({nutrition, lastPage, nextPage }) {
  return (
    <>
      <div className='nutri-con'>
        {nutrition.map((item) => (
          <NutritionCard item={item} />
        ))}
        {nutrition.length === 0 && <div className='project-culture'><h1>Loading content...refresh page if this persists</h1></div> }
      </div>
      <div className='pagination-nut'>
          <div className='pg-buttons' onClick={lastPage} >
              <p>previous</p>
          </div>
          <div className='pg-buttons' onClick={nextPage}>
              <p>next</p>
          </div>
      </div>
    </>
  )
}

export default Nutrition
