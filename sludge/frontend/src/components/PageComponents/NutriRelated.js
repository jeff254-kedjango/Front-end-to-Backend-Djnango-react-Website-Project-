import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../App.css'
import '../../MiniLaptop.css';
import '../../Mobile.css';
import '../../Tablet.css';
function NutriRelated({data, lastPage, nextPage, pages }) {
  const history = useHistory();

  const handleView = (slug) => {
    history.push('/nutrition/' + slug)
  }

  return (
    <div className='bladi-cards-container'>
        <div className='bladi-card'>
            {data.map((item) => (
              <div key={item.id} className='bladi-items'>
                <div className='related-items-header'>
                  <h1>{item.title}</h1>
                </div>
                <img src={item.post_image} alt=''  onClick={() => handleView(item.slug)}/>
              </div>

            ))}
        </div>
        <div className='pagination-related'>
          { pages > 3 &&
            <div className='pagination-nut'>
                <div className='pg-buttons' onClick={lastPage} >
                    <p>previous</p>
                </div>
                <div className='pg-buttons' onClick={nextPage}>
                    <p>next</p>
                </div>
            </div>          
          }

        </div>
       
    </div>
  )
}

export default NutriRelated

                