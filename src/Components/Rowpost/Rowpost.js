import React, { useEffect,useState } from 'react';
import axios from '../../axios'
import { apiKey,imageUrl} from '../../constants/constants';
import './Rowpost.css'
import Youtube from 'react-youtube'

function Rowpost(props) {
    const [movies,setMovies] = useState([])
    const [urlId, setUrlId] = useState('')
   useEffect(()=>{
    axios.get(props.url).then((response)=>{
        console.log(response.data)
        setMovies(response.data.results)
    }).catch((err)=>{
        console.log(err.message)
       
    })
   },[])
   const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
}

const handleMovie =(id)=>{
    console.log(id)

    axios.get(`/movie/
    ${id}/videos?api_key=${apiKey}&language=en-US`).then((response)=>{
        if(response.data.results.length!==0){
            setUrlId(response.data.results[0])
        }else{
console.log('nothing to excute')
        
        }
        
    })
}
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
            {movies.map((obj)=>{
                return(
                    <>
                    <div>
                    <img  onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
                     <p className='movieName'>{obj.title}</p>
                     </div>
                    
                    </>
                   
                )
            })}
            
                
                
            </div>

            {urlId&& <Youtube opts={opts} videoId={urlId.key}/>}
        </div>
    );
}//https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14&with_watch_monetization_types=flatrate
export default Rowpost;