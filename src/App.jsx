import { useState } from 'react'
import { Navbar } from './component/Header/Navbar'
import Slider from './component/Slider/Slider'
import ProductionHouse from './component/ProductionHouse/ProductionHouse'
import GenreMovieList from './component/GenreMovie/GenreMovieList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''> 
          <Navbar/>

          <Slider/>

          <ProductionHouse/>

          <GenreMovieList/>
      </div>
    </>
  )
}

export default App
