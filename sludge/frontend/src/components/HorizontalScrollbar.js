import React from 'react';
import BodyPart from './BodyPart'
function HorizontalScrollbar({data, bodyPart, setBodyPart, handleData }) {
  return (
    <div className='ex-cat-items'>
        {data.map((item) => (
            <div 
              key={item.id || item}
              itemID={item.id || item}
              title={item.id || item}
              className='ex-item-btns'
              
            > 
                < BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} handleData={handleData} />
            </div>
        )
    )}
    </div>
  )
}

export default HorizontalScrollbar