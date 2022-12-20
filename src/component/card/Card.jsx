import React from 'react'
import './card.css'
const Card = ({ movieData }) => {
console.log(movieData);
  return (
    <>
      {
        movieData?.map(item => {
          return (
            <div className='card'>
              <img src={item.Poster} alt={item.Title} className=''/>
              <div className='card-title'> 
                <h2>{item.Title}</h2>
                <button className='card-btn'>Add to the list</button>
              </div>
            </div>
          )
        })
      }




    </>
  )
}

export default Card