import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Login() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();
    const collectData = async () => {
        let result = await fetch('https://ed-ashboard-sushantsaud9804-gmailcom.vercel.app/login',
            {
                method: 'post',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        result = await result.json();
        if (result.auth) {
            localStorage.setItem('user', JSON.stringify(result.user));
            localStorage.setItem('token', JSON.stringify(result.auth));
            navigate('/homecomp');
        }
        else {
            alert("User Not Valid");
        }

    }
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/home');
        }
    }, [])
    return (
        <div className='register-all'>
            <div className='register'>
                <h1>Login</h1>
                <input type='text' placeholder='Enter Email' name="email" onChange={(e) => { setemail(e.target.value) }} value={email} />
                <input type='password' placeholder='Enter password' name="password" onChange={(e) => { setpassword(e.target.value) }} value={password} />
                <button type='submit' onClick={collectData}>Login</button>
                <p className='para'>Not a member ? <Link to='/sighup' className='Link'>Signup</Link></p>
            </div>
        </div>
    )
}

export default Login;