import React from 'react';
import { useHistory } from 'react-router-dom';

function PostCard({item}) {
  const history = useHistory();

  const handleView = (slug) => {
    history.push('/blog/' + slug)
  }

  return (
    <div className='plates-card'>
        <div className='plates-details'>
            <h1>{item.title}</h1>
        </div>
        <div className='plates-button' onClick={() => handleView(item.slug)}>
            <h1>view</h1>
        </div>
    </div>
  )
}

export default PostCard