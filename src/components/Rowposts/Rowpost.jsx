import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../Axios'
import { useNavigate } from 'react-router-dom';
const api_key=import.meta.env.VITE_API_KEY


const Rowpost = (props) => {
  const navigate = useNavigate();
  const HandledMovie=(movieId)=>{
    console.log(movieId)
    navigate(`/player/${movieId}`)
  }
  const [nowPlayingmovie,setNowplayingmovie]=useState([])
  useEffect(()=>{
    axios.get(`${props.fetchUrl}&api_key=${api_key}`).then((response)=>{
      setNowplayingmovie(response.data.results)
    })
  },[props.fetchUrl])
   
  return (
    <div className="Rowposts">
        <h2 className='title'>{props.title}</h2>
        <div className='cards'>
        
        <div className='card'>
  {nowPlayingmovie.map((Movie, index) => (
    <div onClick={() => HandledMovie(Movie.id)}
      className={`movieItem ${props.isUpcoming ? 'isUpcoming' : ''}`}
      key={index}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${Movie.backdrop_path}`}
        alt={Movie.title}
      />
    </div>
  ))}
</div>


</div>

    </div>
  )
}

export default Rowpost