import React, { useState } from 'react'
import './Login.css'
import {signup,login} from '../../Firebase'
import { ToastContainer } from 'react-toastify';
import { FaArrowLeft } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const Navigate=useNavigate()
  const gotoHome=()=>{
    Navigate("/")

  }
    const [signState,setSignState]=useState("Sign In")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    
    const HandleAuthentication=async(event)=>{
     event.preventDefault()
      if(signState==='Sign In'){
        await login(email,password)
      }else{
        await signup(name,email,password)
      }
    }
  return (
    
    <div className='login'>
          <ToastContainer />
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="login-logo"  className='login-logo'/>
      <div className="login-form">
        <h1 className='Signup-text'>{signState}</h1>
        <form action="">
            {signState === 'Sign Up' ?<input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter Your Name' />:<></>}
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter Email' />
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter Password'/>
            <button onClick={HandleAuthentication}>{signState}</button>
            <div className="form-help">
                <div className="remember">
                    <input type="checkbox" />
                    <label htmlFor="">Remember Me</label>
                </div>
                <p>Need Help ?</p>
            </div>
        </form>
        <div className="form-switch">
            {signState==='Sign In' ? <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>sign up Now</span></p>:
            <p>Already Have Account? <span onClick={()=>{setSignState("Sign In")}}>Sing in Now</span></p>}
            
        </div>
       <div className='Gohome-Area'>
       <FaArrowLeft onClick={()=>gotoHome()} size={24} style={{ cursor: 'pointer' }} />
       <p onClick={()=>gotoHome()}>Go To Home</p>
       </div>




      </div>
    </div>
  )
}

export default Login