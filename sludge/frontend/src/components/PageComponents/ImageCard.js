import React from 'react'

function ImageCard({item}) {
  return (
    <div className='lifestyle-img'>
        <h1>headlines</h1>
        <img src={item.post_image} alt='' />
    </div>
  )
}

export default ImageCard