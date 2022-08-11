import React from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css'
import '../MiniLaptop.css';
import '../Mobile.css';
import '../Tablet.css';
import me from './video/me.jpg'
import savana from './video/savana.jpg'
import vid from './video/hoffice2.jpg'

function Header() {
	const history = useHistory();

	const handleBack = () => {
    	history.push('/')
  	}
		return (
		<div className='header-comp'>
			<h1 className='header-txt'>Kwemange Nyagrowa</h1>
			<div className='bread-crumb-button-tech' onClick={handleBack}><h1>back</h1></div>
			< img src={vid} alt='' />
			
		</div>
	);
}

export default Header;
