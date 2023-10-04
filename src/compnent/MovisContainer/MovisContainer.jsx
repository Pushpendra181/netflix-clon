import React from 'react'
import "./MovisContainer.css"
import GenreContener from '../GenreContener/GenreContener'
import { Movie_Content } from '../../utils/content'

const MovisContainer = () => {
  return (
    <div className='MovisContainer'>
      {Movie_Content?.map((content) => (
        <GenreContener title= {content.title} movie_url= {content.movie_url}/>
        
      ))}

    </div>
   
  )
}

export default MovisContainer