import React from 'react'
import '../../App.css';
import '../../MiniLaptop.css';
import '../../Mobile.css';
import '../../Tablet.css'; 
function NutriCat({ handleNutriCategory, bar }) {
  return (
    <div className='nut-cat'>
        <div className={bar === 0 ? 'nut-item-active':'nut-item'} onClick={() => handleNutriCategory(0)}>
            <p>all</p>
        </div>
        <div className={bar === 1 ? 'nut-item-active':'nut-item'} onClick={() => handleNutriCategory(1)}>
            <p>weight loss</p>
        </div>
        <div className={bar === 4 ? 'nut-item-active':'nut-item'} onClick={() => handleNutriCategory(4)} >

            <p>weight gain</p>
        </div>
        <div className={bar === 2 ? 'nut-item-active':'nut-item'} onClick={() => handleNutriCategory(2)} >
            <p>performance</p>
        </div>
        <div className={bar === 3 ? 'nut-item-active':'nut-item'} onClick={() => handleNutriCategory(3)} >
            <p>rehabilitation</p>
        </div>
    </div>
  )
}

export default NutriCat