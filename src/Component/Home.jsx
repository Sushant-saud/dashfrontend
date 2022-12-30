import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'


function Home() {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    callApi();
  }, [])
  const callApi = async () => {
    let resut = await fetch('https://ed-ashboard-sushantsaud9804-gmailcom.vercel.app/product',{
   headers:
   {
    authorization:`${JSON.parse(localStorage.getItem('token'))}`
   }
  })
    let data = await resut.json()
    setproduct(data);
  }
  const deleteProduct= async (id) => {
    let result = await fetch(`https://ed-ashboard-sushantsaud9804-gmailcom.vercel.app/product/${id}`,
      {
        'method': 'Delete',
         headers:{
          authorization:`${JSON.parse(localStorage.getItem('token'))}`
         }

      })
    result = await result.json();
    if (result) {
      alert("product is Deleting");
      callApi();

    }
  }
  const handleSearch = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch(`https://ed-ashboard-sushantsaud9804-gmailcom.vercel.app/search/${key}`,{
        headers:{
          authorization:`${JSON.parse(localStorage.getItem('token'))}`
         }
      });
      result = await result.json();
      if (result) {
        setproduct(result);
      }
      else {
        callApi();
      }
    }
  }
  return (
    <div className='product-list'>
      <h2>Product List:</h2>
      <input className='search-product' type='text' placeholder='Search Item' onChange={handleSearch} />
      <table>
        <thead>
      <tr>
        <th scope='col'>S.No</th>
        <th scope='col'>Name</th>
        <th scope='col'>Price</th>
        <th scope='col'>Categories</th>
        <th scope='col'>Company</th>
        <th scope='col'>Operation</th>
      </tr>
      </thead>
      <tbody>
      {
        product.length > 0 ?
          product.map
          
          ((data, index) => {
            return (
              <>
                <tr key={data._id}>
                  <td data-label='s.no'>{index + 1}</td>
                  <td data-label='Name'>{data.name}</td>
                  <td data-label='Price'>${data.price}</td>
                  <td data-label='Categories'>{data.categories}</td>
                  <td data-label='Company'>{data.company}</td>
                  <td data-label='Operation' className='op'><button onClick={() => { deleteProduct(data._id) }}>delete</button><button><Link to={"/update/" + data._id} className='Link'>Update</Link></button></td>
                </tr>
              </>
              )
          }) : <h1>No product are Found</h1>
      }
      </tbody>
  </table>
    </div>
  )
}

export default Home