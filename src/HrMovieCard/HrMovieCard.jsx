import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";


const HrMovieCard = ({movie}) => {
  return (
    <>
    <div className='hover:scale-110 transition-all duration-100 ease-linear cursor-pointer'>
        <img src={IMAGE_BASE_URL+movie.backdrop_path}  className='w-[220px] h-[130px] rounded-lg hover:border-[3px] border-gray-500 shadow-lg shadow-black'/>

        <h4 className='w-[210px] text-white mt-2'>{movie.title}</h4>
    </div>
    </>
  )
}

export default HrMovieCard