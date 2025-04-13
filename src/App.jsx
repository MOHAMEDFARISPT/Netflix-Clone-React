/* eslint-disable no-unused-vars */

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Rowpost from './components/Rowposts/Rowpost'
import Footer from './components/Footer/Footer'
import { ToastContainer } from 'react-toastify';




function App() {
 
 
  const Nowplaying=import.meta.env.VITE_NOW_PLAYING_URL
  const UpcomingMovies=import.meta.env.VITE_UPCOMING_MOVIES
  const Top_rated=import.meta.env.VITE_TOP_RATED
  return (
    
     <div>
<ToastContainer/>
      <Navbar/>
      <Banner/>
      <Rowpost fetchUrl={Nowplaying} title='Popular On Netflix'/>
      <div  className="More-cards">
        <Rowpost fetchUrl={UpcomingMovies} isUpcoming title='Upcoming Movies' />
        <Rowpost fetchUrl={Top_rated} title='Top Rated Movies'/>
      </div>
      <Footer/>
     
     </div>
        
    
  )
}

export default App
