import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import '../../App.css';
import '../../MiniLaptop.css';
import '../../Mobile.css';
import '../../Tablet.css';
import axiosInstance from '../../axios';
import { Grid } from '@material-ui/core';
import { BsSearch } from 'react-icons/bs';
import {exerciseOptions, fetchData } from '../../utils/fetchData';
import Header from '../header';
import HorizontalScrollbar from '../HorizontalScrollbar';
import LoadingExercises from './LoadingExercises';
import Nutrition from './Nutrition';
import NutriCat from './NutriCat';
import { GiHamburgerMenu } from "react-icons/gi";
import {Helmet} from "react-helmet";
function Exercise() {

  const history = useHistory();
  const [state, setState] = useState(false);
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  const [startIndex, setStartIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(9);
  const [nutriStart, setNutriStart] = useState(0);
  const [nutriLast, setNutriLast] = useState(4);
  const [nutrition, setNutrition] = useState([])
  const [bar, setBar] = useState(0)
  const [showCats, setShowCats] = useState(false)
 


  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      const nutritionData = await axiosInstance.get('nutrition/')

      setBodyParts(['all', ...bodyPartsData]);
      setExercises(exerciseData);
      setNutrition(nutritionData.data)
    };

    fetchExercisesData();
  }, []);


  const handleData =  (stuff) => {
    if(stuff === 'all') {
      const bodyData = async () => {
        const data = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        setExercises(data)
      }
      bodyData()
    } else {
      const bodyData = async () => {
        const data = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${stuff}`, exerciseOptions);
        setExercises(data)
      
      }
      bodyData()
    }
  }

  
  const handleSearch = async () => {
    
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      // window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
      setState(true);
      
    }
  };

  const handleNutriCategory = (category) => {
    if(category === 0) {
      axiosInstance.get('nutrition/')
      .then((res) => {
        setNutrition([])
        setNutrition(res.data)
        setBar(0)
        setNutriStart(0)
        setNutriLast(4)
      })
    } else {
      axiosInstance.get('nutrition/?category=' + category) 
      .then((res) => {
        setNutrition([])
        setNutrition(res.data)
        setBar(category)
        setNutriStart(0)
        setNutriLast(4)
      })
    }
  }

  const current = exercises.slice(startIndex, lastIndex)
  const nutriCurrent =nutrition && nutrition.slice(nutriStart, nutriLast)

  const nextPage = () => {
    if(lastIndex < exercises.length) {
      setStartIndex( startIndex + 9 )
      setLastIndex( lastIndex + 9 )
    } 
    if(lastIndex - startIndex >= exercises.length) {
      setStartIndex( startIndex + 9 )
      setLastIndex( lastIndex + (lastIndex - startIndex) )
    }

  }

  const handleCatToggle = () => {
    setShowCats(!showCats)
  }

  const handleClosure = () => {
    setState(true)
    setShowCats(!showCats)
  }


  const handleCloset = () => {
    setState(false)
    setShowCats(!showCats)
  }



  const nextNutri = () => {
    if(nutriLast < nutrition.length) {
      setNutriStart( nutriStart + 4 )
      setNutriLast( nutriLast + (nutriLast - nutriStart) )
    } 

  }

  const lastPage = () => {
    if(startIndex !== 0 ) {
      if( lastIndex - startIndex <= 9) {
        setStartIndex( startIndex - 9 )
        setLastIndex(lastIndex - (lastIndex - startIndex) )
      } else {
        setStartIndex( startIndex - 9 )
        setLastIndex( lastIndex - 9 )     
      }      
    }
 
  }

  const prevNutri = () => {
    if(nutriStart !== 0 ) {
      if( nutriLast - nutriStart <= 4) {
        setNutriStart( nutriStart - 4 )
        setNutriLast(nutriLast - (nutriLast - nutriStart) )
      } else {
        setNutriStart( nutriStart - 4 )
        setNutriLast( nutriLast - 4 )     
      }      
    }
 
  }


  return (
    <div className='exercise'>
      <Helmet>
        <title>Fitness</title>
      </Helmet>
        < Header />
        <Grid item  className='exercise-nav' >
          <Grid item xs={3} className={!state ? 'exercise-nav-buttons-b-act':'exercise-nav-buttons-b'} onClick={() => setState(false)}>
            <h1>Nutrition</h1>
          </Grid>
          <Grid item xs={3} className={state ? 'exercise-nav-buttons-e-act':'exercise-nav-buttons-e'} onClick={() => setState(true)}>
            <h1>Exercises</h1>
          </Grid>
          <div className='exercise-menu-btn'>
            <GiHamburgerMenu onClick={handleCatToggle}/>
          </div>
          <Grid item xs={9} md={6} className='ftness-srch'>
                <input 
                  placeholder='Search workout'
                  onChange={(e)=> setSearch(e.target.value.toLowerCase())}
                  type='text'
                  value={search}
                />
                < BsSearch className='sch-icon' onClick={handleSearch} />
          </Grid>
        </Grid>
        <Grid className='ex-item' >
          <Grid item xs={2} className='ex-cat'>
              <h1>Categories</h1>
              {state ? 
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} handleData={handleData} />:
                <NutriCat handleNutriCategory={handleNutriCategory} bar={bar} />
              }
              
          </Grid>
          <Grid item xs={12} md={10} className='ex-container'>
            { state ? <LoadingExercises exercises={current} lastPage={lastPage} nextPage={nextPage}/> :
              < Nutrition nutrition={nutriCurrent} lastPage={prevNutri} nextPage={nextNutri} />}

          </Grid>
          {showCats && 
            <div className='side-bar-tena'>
              <div className='side-bar-btn-e'  onClick={handleClosure}>
                <h1>Exercises</h1>
              </div>
              <div className='side-bar-btn-n'  onClick={handleCloset}>
                <h1>Nutrition  + </h1>
              </div>
            </div>
          }
        </Grid>
    </div>
  )
}

export default Exercise
