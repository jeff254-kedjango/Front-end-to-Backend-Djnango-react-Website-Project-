import React from 'react';
import { useHistory } from 'react-router-dom';
function RelatedArticle({data, lastPage, nextPage, pages }) {

  const history = useHistory();

  const handleView = (slug) => {
    history.push('/blog/' + slug)
  }

  return (
    <div className='blog-cards-container'>
        <div className='blog-related-card'>
            {data.map((item) => (
              <div key={item.id} className='related-items'>
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

export default RelatedArticle