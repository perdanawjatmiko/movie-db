import React, { useEffect, useState } from 'react'
import Background from '../assets/background.jpg'
import { useLocation } from 'react-router-dom'
import ResultSearch from '../components/ResultSearch'

const SearchResult = () => {
    const location = useLocation();
    const [result, setResult] = useState('')

    useEffect(() => {
        setResult(location.state.search)
    }, [location.state.search])

    return (
        <>
            <div className='w-full text-white'>
                <div className='absolute w-full h-[400px] bg-black/60'></div>
                <img className='w-full h-[400px] object-cover' src={Background} alt="" />
                <div className='absolute top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-semibold'>You just searching for {result}</h1>
                    <p className='text-gray-400 my-4'>Here you can see results of your searched movies.</p>
                </div>
            </div>
            <ResultSearch search={result}/>
        </>
    )
}

export default SearchResult