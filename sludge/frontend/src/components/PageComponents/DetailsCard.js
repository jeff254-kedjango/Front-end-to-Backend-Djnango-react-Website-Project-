import React from 'react'

function DetailsCard({ item }) {
  return (
    <div className='details-card'>
        <h1>{item.title}</h1>
    </div>
  )
}

export default DetailsCard