import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
function Update() {
    const [name, setname] = useState();
    const [price, setprice] = useState('');
    const [categories, setcategories] = useState('');
    const [company, setcompany] = useState('');
    const navigate = useNavigate();
    const [data, setdate] = useState([]);
    const { id } = useParams();
    console.log(id);
    const updateClick = async () => {
        let result = await fetch(`https://ed-ashboard-sushantsaud9804-gmailcom.vercel.app/product/${id}`, {
            method: 'put',
            body: JSON.stringify({ name, price, categories, company }),
            headers: {
                'Content-Type': 'application/json',
                authorization: `${JSON.parse(localStorage.getItem('token'))}`

            },
            new: true
        })
        result = await result.json()
        if (result) {
            navigate('/home');
        }

    }
    useEffect(() => {
        updatecallapi();
    }, [id])
    const updatecallapi = async () => {
        let result = await fetch(`https://ed-ashboard-sushantsaud9804-gmailcom.vercel.app/product/${id}`,{
            headers: {
                authorization: `${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setname(result.name);
        setprice(result.price);
        setcategories(result.categories);
        setcompany(result.company)
    }
    return (
        <div>
            <h1>Update Product</h1>
            <input type='text' placeholder='Enter product name' value={name} onChange={(e) => { setname(e.target.value) }} />
            <input type='text' placeholder='Enter product price' value={price} onChange={(e) => { setprice(e.target.value) }} />
            <input type='text' placeholder='Enter product category' value={categories} onChange={(e) => { setcategories(e.target.value) }} />
            <input type='text' placeholder='Enter product company' value={company} onChange={(e) => { setcompany(e.target.value) }} />
            <button type='submit' onClick={updateClick}>Update Product</button>
        </div>
    )
}

export default Update