import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

const MovieCard = ({movie}) => {
    
  return (
   
        <img src={IMAGE_BASE_URL+movie.poster_path}  className='w-[220px] rounded-lg hover:border-[3px] border-gray-500 hover:scale-110  transition-all duration-100 ease-linear cursor-pointer shadow-lg shadow-black'/>
  )
}

export default MovieCard