import React from 'react'
import "./SingleMovie.css"
import { Img_Base_Url } from '../../utils/api-request'

const SingleMovie = (movie) => {
  console.log(movie.movis)



  return (
   
      <div className="movi-img">
        <img src={`${Img_Base_Url}${movie?.movis.poster_path}`} alt="" />
        <p>{movie?.movis.original_title }</p>
      </div>
   
  )
}

export default SingleMovie  