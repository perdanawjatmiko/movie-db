import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import {searchMovie} from '../Requests'
import Movie from './Movie'

const ResultSearch = (props) => {
    const [result, setResult] = useState([])

    useEffect(() => {
        searched(props.search)
    }, [props.search])

    const searched = async (q) => {
        try{
            const searchResult = await searchMovie(q)
            setResult(searchResult.results)
        } catch(error) {
            // alert('Oops!, movie not found error code (404)')
            console.log(error)
        }
    }

    console.log(result)

    const slideLeft = () => {
        var slider = document.getElementById('searchSlider');
        slider.scrollLeft = slider.scrollLeft - 800;
    }

    const slideRight = () => {
        var slider = document.getElementById('searchSlider');
        slider.scrollLeft = slider.scrollLeft + 800;
    }

  return (
    <div>
        <h2 className='text-white font-semibold md:text-xl p-4'>you can slide result for more</h2>
        <div className='relative flex items-center group'>
            <FaChevronLeft onClick={slideLeft} className='bg-white left-0 rounded-full absolute opacity-40 hover:opacity-80 cursor-pointer z-10 hidden p-2 group-hover:block' size={35}/>
            <div id={'searchSlider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {result.map((item, id) => (
                    <Movie key={id} item={item}/>
                ))}
            </div>
            <FaChevronRight onClick={slideRight} className='bg-white right-0 rounded-full absolute opacity-40 hover:opacity-80 cursor-pointer z-10 hidden p-2 group-hover:block' size={35}/>
        </div>
    </div>
  )
}

export default ResultSearch