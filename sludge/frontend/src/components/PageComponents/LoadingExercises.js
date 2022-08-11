import React from 'react';
import ExerciseCard from './ExerciseCard';


function LoadingExercises({ exercises, lastPage, nextPage}) {
  return (
    <>
      <div className='ex-con'>
          {exercises.map((item) => (
              < ExerciseCard  item={item}/>
          ))}
      </div>
      <div className='pagination-nut-exercise'>
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

export default LoadingExercises