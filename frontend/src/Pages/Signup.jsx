import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import {ToastContainer} from 'react-toastify'; 

function Signup() {

    const [signupInfo, setSignupInfo] = useState({
       name: '',
       email: '',
       password:''
       
    })

    const handleChange =(e)=>{
       const {name,value}=e.target;
       console(name,email);
       const copySignupInfo = {...signupInfo};
       copySignupInfo[name]= value;
       setLoginInfo(copySignupInfo);
    }

    

    const handleSignup =(e) =>{
        e.preventDefault();
        // const {name, email, password} = signupInfo
        // if()
    }
  return (
    <div className='container'>
      <h1>Login</h1>
      <form onSubmit={handleSignup}>
        <div>
            <label htmlFor='name'> Name</label>
            <input  
            onChange={handleChange}
            type='text'
            name='name'
            autoFocus
            placeholder='Enter your name...'
            value={signupInfo.name}
            />
        </div>
        <div>
            <label htmlFor='email'> Email</label>
            <input
            onChange={handleChange}
            type='email'
            name='email'
            placeholder='Enter your email...'
            value={signupInfo.email}
            />
        </div>
        <div>
            <label htmlFor='password'> Password</label>
            <input
            onChange={handleChange}
            type='password'
            name='password'
            placeholder='Enter your password...'
            value={Signup.password}
            />
        </div>
        <button type='submit'>Signup</button>
        <span>Already have an account?
            <Link to="/login">Login </Link>
        </span>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default Signup
