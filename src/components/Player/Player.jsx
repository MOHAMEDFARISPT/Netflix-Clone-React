import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from '../../Axios'
import YouTube from 'react-youtube'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; 
import './Player.css'
const api_key=import.meta.env.VITE_API_KEY
const Player = () => {
    const navigate = useNavigate();
    const {id}=useParams();
    const [MovieKey,setMovieKey]=useState(null)
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`).then((response)=>{
            setMovieKey(response.data.results[0].key)
        })
    })
    const opts = {
        height: '800',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        controls:0
        },
      }
  return (
    <div className='Youtube-Frame'>
    {/* Back Arrow Icon */}
    <div className="back-button" onClick={() => navigate(-1)}>
      <FaArrowLeft size={24} style={{ cursor: 'pointer' }} />
    </div>

    <YouTube videoId={MovieKey} className='Youtube' opts={opts} />
  </div>
    
  )
}

export default Player