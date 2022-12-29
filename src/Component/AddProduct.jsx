import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function AddProduct() {
    const [name, setname] = useState();
    const [price, setprice] = useState('');
    const [categories, setcategories] = useState('');
    const [company, setcompany] = useState('');
    const [error, seterror] = useState(false);
    const navigate = useNavigate();
    const handleClick = async () => {
        if(!name || !price  || !categories || !company)
        {
          seterror(true);
           return false; 
          
        }
        const userid = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('https://ed-ashboard-sushantsaud9804-gmailcom.vercel.app/add', {
            'method': 'post',
            'body': JSON.stringify({ name, price, categories, company, userid }),
            'headers': {
                'Content-Type': 'application/json',
                authorization: `${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        result = await result.json();
        console.log(result);
        if (result) {
            navigate('/home');
        }

    }
    return (
        <div className='register-all'>
            <div className='register'>
                <h1>Add Product</h1>
                <input type='text' placeholder='Enter product name' value={name} onChange={(e) => { setname(e.target.value) }} />
                <input type='text' placeholder='Enter product price' value={price} onChange={(e) => { setprice(e.target.value) }} />
                <input type='text' placeholder='Enter product category' value={categories} onChange={(e) => { setcategories(e.target.value) }} />
                <input type='text' placeholder='Enter product company' value={company} onChange={(e) => { setcompany(e.target.value)}}/>
               <span className='color'> {error ? "Please enter the valid details" : ''}</span>
                <button type='submit' onClick={handleClick}>Add Product</button>
            </div>
        </div>

    )
}

export default AddProduct;