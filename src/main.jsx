import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes, Route  } from 'react-router-dom'
import Login from './components/Login/Login'
import Player from './components/Player/Player.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>

    <Routes>
      <Route path="/" element={ <App/>}/>
      <Route path="/login" element={<Login />} />
      <Route path='/player/:id' element={<Player/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)