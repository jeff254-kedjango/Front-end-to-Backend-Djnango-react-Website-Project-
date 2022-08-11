import React from 'react';
import { useHistory } from 'react-router-dom';

function NutritionCard({item}) {

  const history = useHistory();

  const handleNutrition = (slug) => {
    history.push('/nutrition/' + slug)
  }

  return (
    <div key={item.id} className='nut-card'>
        <img src={item.post_image} alt=''  />
        <div className='nutri-details'>
            <h3>{item.title}</h3>
            <div className='nutri-button' onClick={() => handleNutrition(item.slug)} >
                <h3>view</h3>
            </div>
        </div>

    </div>
  )
}

export default NutritionCard