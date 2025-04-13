import React from 'react'
import Netflix_logo from '../../Assets/Netflix_logo.png'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { logout } from '../../Firebase'

const Navbar = () => {
  return (
    <div className="navbar">
  <div className="navbar-left">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix_logo" />
    <ul>
      <li>Home</li>
      <li>Tv Shows</li>
      <li>Movies</li>
      <li>New & Popular</li>
      <li>My List</li>
      <li>Browse by Languages</li>
    </ul>
  </div>

  <div className="navbar-right">
    <div className="search-section">
      <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="#ffffff">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 001.48-5.34C15.16 5.2 12.28 3 9 3S2.84 5.2 2.09 8.39c-.65 2.86 1.03 5.68 3.77 6.78 1.46.6 3.1.6 4.56 0l.27.28v.79l5 5L20.49 19l-5-5zm-6.5 0C6.01 14 4 11.99 4 9.5S6.01 5 8.5 5 13 7.01 13 9.5 10.99 14 8.5 14z"/>
      </svg>
      <span className="children-text">Children</span>
    </div>

    <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="#ffffff">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6v-5c0-3.1-1.64-5.64-4.5-6.32V4a1.5 1.5 0 10-3 0v.68C7.63 5.36 6 7.9 6 11v5l-1.99 2A.996.996 0 005 21h14a.996.996 0 00.79-1.62L18 16z"/>
    </svg>

    <div className="profile-section">
      <img src="https://i.pravatar.cc/150?img=3" alt="Profile" className="profile-icon" />
      <svg className="icon arrow-icon" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="#ffffff">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M7 10l5 5 5-5z"/>
      </svg>
      <div className="sign-out-dropdown">
        <p><Link to='/login' className='LoginLink'>Login</Link></p>
        <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Navbar