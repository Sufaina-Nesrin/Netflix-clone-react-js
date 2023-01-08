import React, { useEffect, useState } from 'react';
import './Banner.css'
import axios from '../../axios' //it means the axios is in the 2nd parent folder src/components/Banner
                               //axios is in the directory of src
import {apiKey,imageUrl} from '../../constants/constants'                               
function Banner(props) {
    const [movies,setMovies] = useState()
    useEffect(()=>{
        const randomNumber = Math.floor(Math.random() * 21);
         axios.get(`trending/all/day?api_key=${apiKey}`).then((response)=>{
            
            setMovies(response.data.results[randomNumber])
         })
    },[])
    return (
        <div style={{backgroundImage:`url(${movies?imageUrl+movies.backdrop_path:""})`}}>
            
        <div className='banner'>
            <div className='content'>
                <h1 className='title'>{movies ?movies.title||movies.name:""}</h1>
                <div className='banner-buttons'>
                    <button className='button'>play</button>
                    <button className='button'>play</button>
                </div>
                 <h1 className='description'>{movies? movies.overview:""}</h1>
                 
            </div>
            <div className="fade-bottom"></div>
            
        </div>
        </div>
       
    );
}

export default Banner;