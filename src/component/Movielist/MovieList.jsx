import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../../services/GlobalApi';
import MovieCard from '../MovieCard/MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from '../../HrMovieCard/HrMovieCard';

const MovieList = ({ genereId, index_ }) => {
  const [movieList, setMovieList] = useState([]);

  const elementRef=useRef(null)

  useEffect(() => {
    getMovieByGenreId();
  }, [genereId]);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genereId).then((resp) => {
      setMovieList(resp.data.results);
    });
  };


  const slideRight =(element)=>{
    element.scrollLeft+=500;
  }
  const slideLeft =(element)=>{
    element.scrollLeft-=500;
  }

  return (
    <div className='relative'>
      <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
      className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute left-[-40px] 
      ${index_%3==0? 'mt-[65px]':'mt-[150px]'}`}/>

      <div ref={elementRef} className='flex overflow-x-auto gap-8 scroll-smooth scrollbar-none py-5 px-3'>
        {movieList.map((item, index) => (
          <>
            {index_%3==0?<HrMovieCard movie={item}/>:<MovieCard key={index} movie={item}/>}
          
          </>
        ))}
      </div>

      <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0 absolute right-0
           ${index_%3==0? 'mt-[65px]':'mt-[150px]'}`}/>
    </div>
  );
};

export default MovieList;