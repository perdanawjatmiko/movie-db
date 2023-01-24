import React, {useState, useEffect} from 'react'
import { FaChevronLeft, FaChevronRight, FaTrash } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import {updateDoc, doc, onSnapshot} from 'firebase/firestore'

const SavedShows = () => {

    const {user} = UserAuth()

    const [movies, setMovies] = useState([])

    const slideLeft = () => {
        var slider = document.getElementById('savedSlider');
        slider.scrollLeft = slider.scrollLeft - 800;
    }

    const slideRight = () => {
        var slider = document.getElementById('savedSlider');
        slider.scrollLeft = slider.scrollLeft + 800;
    }

    const userID = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (d) => {
        try {
            const result = movies.filter((item) => item.id !== d);
            await updateDoc(userID, {
                savedShows: result,
            });
        } catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedShows);
        })
    }, [user?.email]);

  return (
    <>
        <h2 className='text-white font-semibold md:text-xl p-4'>Saved Shows</h2>
        <div className='relative flex items-center group'>
            <FaChevronLeft onClick={slideLeft} className='bg-white left-0 rounded-full absolute opacity-40 hover:opacity-80 cursor-pointer z-10 hidden p-2 group-hover:block' size={35}/>
            <div id={'savedSlider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies?.map((item, id) => (
                    <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                        <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
                        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                            <p className='whitespace-normal text-xs md:text-sm flex flex-wrap justify-center items-center h-full text-center p-4'>{item?.title}</p>
                            <p onClick={() => deleteShow(item.id)} className='absolute text-white top-4 right-4 bg-red-600 p-2 rounded-full hover:scale-125'><FaTrash /></p>
                        </div>
                    </div>
                ))}
            </div>
            <FaChevronRight onClick={slideRight} className='bg-white right-0 rounded-full absolute opacity-40 hover:opacity-80 cursor-pointer z-10 hidden p-2 group-hover:block' size={35}/>
        </div>
    </>
  )
}

export default SavedShows