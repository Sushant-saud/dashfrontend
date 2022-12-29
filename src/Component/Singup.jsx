import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Singup() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const Auth = localStorage.getItem('user');
    if (Auth) {
      navigate('/login');
    }
  })
  const collectData = async () => {
    let result = await fetch('https://ed-ashboard-sushantsaud9804-gmailcom.vercel.app/register',{
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();
    localStorage.setItem('user', JSON.stringify(result.result))
    localStorage.setItem('token', JSON.stringify(result.auth))
    if (result) {
      navigate('/login');
    }

  }
  return (
    <div className='register-all'>
      <div className='register'>
        <h1>Register</h1>
        <input type="text" placeholder='Enter Name' name="name" onChange={(e) => { setname(e.target.value) }} value={name} />
        <input type='text' placeholder='Enter Email' name="email" onChange={(e) => { setemail(e.target.value) }} value={email} />
        <input type='password' placeholder='Enter passWord' name="password" onChange={(e) => { setpassword(e.target.value) }} value={password} />
        <button type='submit' onClick={collectData}>Submit</button>
      </div>
    </div>

  )
}

export default Singup;