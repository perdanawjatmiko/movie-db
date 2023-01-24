import React from 'react'
import requests from '../Requests.js'
import Main from '../components/Main'
import Slider from '../components/Slider'


const Home = () => {
  return (
    <div>
      <Main/>
      <Slider sliderID='1' title='Now Playing' fetchURL={requests.requestNowPlaying}/>
      <Slider sliderID='2' title='Popular' fetchURL={requests.requestPopular}/>
      <Slider sliderID='3' title='Top Rated' fetchURL={requests.requestTopRated}/>
      <Slider sliderID='4' title='Upcoming' fetchURL={requests.requestUpcoming}/>
    </div>
  )
}

export default Home