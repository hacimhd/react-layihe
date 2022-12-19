import React from 'react'

import { useState } from 'react';
import { getMovieData } from '../../services/db';
import './form.css'

const Form = () => {
  const[data,setData]=useState([]);
  const handleSubmit=async (e)=>{
    e.preventDefault();
   
    const result =await getMovieData(e.target.movieName.value);
    setData(result);

  }
  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor='moviename'>Search movie by title:
        <input type='text' id='moviename' name='movieName' placeholder='For example, Shawshank Redemption'/>
      </label>
      <button type='submit' className='search'>Search</button>
    </form>
    
    <ul>
      {
        data?.map(item=>{
          return(
            <>
            <li>{item.Title}</li>
            </>
          )
        })
      }
    </ul>
    </>
  )
}

export default Form