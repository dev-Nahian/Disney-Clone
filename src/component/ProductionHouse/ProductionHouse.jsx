import React from 'react'

import Disney from '../../assets/Image/disney.png'
import Marvel from '../../assets/Image/marvel.png'
import NationalGeo from '../../assets/Image/nationalG.png'
import Pixax from '../../assets/Image/pixar.png'
import Starwar from '../../assets/Image/starwar.png'



import DisneyV from '../../assets/videos/disney.mp4'
import MarvelV from '../../assets/videos/marvel.mp4'
import NationalGeoV from '../../assets/videos/national-geographic.mp4'
import PixaxV from '../../assets/videos/pixar.mp4'
import StarwarV from '../../assets/videos/star-wars.mp4'











const ProductionHouse = () => {

    const productionHouseList = [
        {
            id: 1,
            image: Disney,
            video: DisneyV
        },
        {
            id: 2,
            image: Pixax,
            video: PixaxV
        },
        {
            id: 3,
            image: Marvel,
            video: MarvelV
        },
        {
            id: 4,
            image: Starwar,
            video: StarwarV
        },
        {
            id: 5,
            image: NationalGeo,
            video: NationalGeoV
        },
    ]



  return (
    <>
    <div className="container mx-auto">
        <div className='flex gap-5'>
            {productionHouseList.map((i) => (
                <div key={i.id} className='border-[2px] border-gray-600 rounded-lg hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer relative shadow-lg shadow-black'>
                    <video src={i.video} autoPlay loop playsInline className='absolute z-0 top-0 rounded-md opacity-0 hover:opacity-50'/>
                    <img src={i.image} className='w-full z-[1]' alt='Production House'/>
                </div>
            ))}
        </div>

    </div>
    
    </>
  )
}

export default ProductionHouse