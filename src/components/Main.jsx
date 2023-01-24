import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Requests'

const Main = () => {

    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.requestPopular).then((respose) => {
            setMovies(respose.data.results)
        })
    }, [])

    const truncateText = (str, num) => {
        if(str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    }

  return (
    <div className='w-full h-[750px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[750px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <div className='flex flex-row justify-start items-center w-auto'>
                    <h1 className='text-3xl md:text-5xl font-semibold '>{movie?.original_title}</h1>
                    <p className='text-black text-lg p-2 font-bold ml-2 border border-black bg-yellow-300'>{movie?.vote_average}</p>
                </div>
                <div className='my-8'>
                    <button className='border rounded bg-red-600 text-white border-red-600 py-2 px-5'>Save Movie</button>
                    <button className='border rounded text-white border-gray-300 py-2 px-5 ml-4'>Watch Trailer</button>
                </div>
                <p className='text-gray-400'>Released : {movie?.release_date}</p>
                
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-300'>
                    {truncateText(movie?.overview, 150)}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main