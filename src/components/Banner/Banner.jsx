import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='Banner'>
    <img src="https://wallpaperaccess.com/full/2703652.png" alt="" className='Banner_Img' />
     <div className='Banner-Caption'>
      <h4 className='Banner-Title'>The Movie Title</h4>
      <div className='Buttons'>
        <button className="button"><i className='fa fa-play'></i>Play</button>
        <button className="button">More Info</button>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, amet. </p>
     </div>
    </div>
  )
}

export default Banner