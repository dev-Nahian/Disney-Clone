import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../../services/GlobalApi'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

const Slider = () => {

    const [movielist, setMovielist] = useState([]);

    // for show data
    useEffect(()=>{
        getTrandingMovies()
    },[])


    // for showing fetching data
    const getTrandingMovies = ()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            setMovielist(resp.data.results)
        })
    }

    // for slider
    const elementRef = useRef()

    // for slider scroll Right
    const sliderRight = (element)=>{
        element.scrollLeft+=screenWidth - 110
    }

    // for slider scroll Left
    const sliderLeft = (element)=>{
        element.scrollLeft-=screenWidth - 110
    }


  return (
    <>
        <div>

            <FiChevronLeft 
            className='hidden md:block text-white text-[50px] absolute mx-4 mt-[200px] cursor-pointer'
            onClick={()=> sliderLeft(elementRef.current)}/>

            <FiChevronRight 
            className='hidden md:block text-white text-[50px] absolute mx-3 mt-[200px] cursor-pointer right-8'
            onClick={()=> sliderRight(elementRef.current)}/>

            
                <div className='flex overflow-x-auto w-full px-16 py-4  scrollbar-none scroll-smooth' ref={elementRef}>
                    {movielist.map((item,index)=>(
                        <img src={IMAGE_BASE_URL+item.backdrop_path} 
                        className='min-w-full h-[500px] object-cover object-left-top mr-6 rounded-md hover:border-[4px] border-gray-300 transition-all duration-100 ease-linear cursor-pointer'/>
                    ))};
                </div>
            

        </div>
    </>
  )
}

export default Slider