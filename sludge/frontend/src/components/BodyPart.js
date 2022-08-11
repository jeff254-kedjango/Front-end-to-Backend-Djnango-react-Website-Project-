import React from 'react';


function BodyPart({ item, setBodyPart, bodyPart, handleData }) {
    


  return (
    <div className={ bodyPart === item ? 'ex-btn-active' : 'ex-btn-non'} onClick={() => {setBodyPart(item); handleData(item)} }>
        {item}
    </div>
  )
}

export default BodyPart