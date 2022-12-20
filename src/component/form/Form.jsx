import React from 'react'

import { useState } from 'react';
import { getMovieData } from '../../services/db';
import Card from '../card/Card';
import './form.css'
//#region Formdan datanin alinib serverin gonderilmesi
const Form = () => {
  const[data,setData]=useState([]);
  const handleSubmit=async (e)=>{
    e.preventDefault();
    
    if(e.target.movieName.value){
      const result =await getMovieData(e.target.movieName.value);
    setData(result);

    }
    
  }
  //#endregion
  return (
    <div className='form-row'>
    <form onSubmit={handleSubmit}>
      <label htmlFor='moviename'>Search movie by title:<br/>
        <input type='text' id='moviename' name='movieName'  placeholder='For example, Shawshank Redemption' required />
      </label>
      <button type='submit' className='search'>Search</button>
    </form>
    <div>
      <Card movieData={data}/>
    </div>
    </div>
  )
}

export default Form