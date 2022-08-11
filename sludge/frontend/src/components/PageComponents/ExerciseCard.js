import React from 'react'

function ExerciseCard({item}) {
  return (
    <div key={item.id} className='ex-card'>
        <img src={item.gifUrl} alt='' />
        <div className='ex-details'>
            <div>
                <h3>target</h3>
                <p>{item.target}</p>
            </div>
            <div>
                <h3>Equipment</h3>
                <p>{item.equipment}</p>
            </div>
        </div>
     </div>
  )
}

export default ExerciseCard