import React from 'react';
import NutritionCard from './NutritionCard';

function Nutrition({nutrition, lastPage, nextPage }) {
  return (
    <>
      <div className='nutri-con'>
        {nutrition.map((item) => (
          <NutritionCard item={item} />
        ))}
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