import React from 'react'
import Background from '../assets/background.jpg'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <div className='absolute w-full h-[400px] bg-black/60'></div>
        <img className='w-full h-[400px] object-cover' src={Background} alt="" />
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-semibold'>My Saved Shows</h1>
          <p className='text-gray-400 my-4'>Here you can see and delete your personal bookmarked movies.</p>
        </div>
      </div>
      <SavedShows />
    </>
  )
}

export default Account