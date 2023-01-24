import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Slider = (props) => {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        axios.get(props.fetchURL).then((respose) => {
            setMovies(respose.data.results)
        })
    }, [props.fetchURL])

    const slideLeft = () => {
        var slider = document.getElementById('slider' + props.sliderID);
        slider.scrollLeft = slider.scrollLeft - 800;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider' + props.sliderID);
        slider.scrollLeft = slider.scrollLeft + 800;
    }

  return (
    <div>
        <h2 className='text-white font-semibold md:text-xl p-4'>{props.title}</h2>
        <div className='relative flex items-center group'>
            <FaChevronLeft onClick={slideLeft} className='bg-white left-0 rounded-full absolute opacity-40 hover:opacity-80 cursor-pointer z-10 hidden p-2 group-hover:block' size={35}/>
            <div id={'slider' + props.sliderID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item, id) => (
                    <Movie key={id} item={item}/>
                ))}
            </div>
            <FaChevronRight onClick={slideRight} className='bg-white right-0 rounded-full absolute opacity-40 hover:opacity-80 cursor-pointer z-10 hidden p-2 group-hover:block' size={35}/>
        </div>
    </div>
  )
}

export default Slider