import React, {useState} from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { FaPlus, FaCheck, FaEye } from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import {arrayUnion, doc, updateDoc} from 'firebase/firestore'

const Movie = (props) => {

    const item = props.item
    const [like, setLike] = useState(false)
    const [saved, setSaved] = useState(false)
    const {user} = UserAuth();

    const userID = doc(db, 'users', `${user?.email}`);

    const saveShow = async () => {
        if(user?.email) {
            setLike(!like)
            setSaved(true)
            await updateDoc(userID, {
                savedShows: arrayUnion({
                    id: item.id,
                    title: item.title,
                    img: item.poster_path
                })
            })
        } else {
            alert('Oops! , Please log in first to save a movie');
        }
    }

    return (
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`} alt={item?.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <div className='flex flex-col justify-center items-center pt-[50%]'>
                    <p className='flex whitespace-normal text-xs md:text-lg h-full text-center mb-4'>{item?.title}</p>
                    <div className='flex justify-center w-full items-center'>
                        {like ? (
                            <button className='bg-white text-red-600 text-center items-center inline-flex border rounded-full border-white px-4 py-1 text-base hover:scale-110'>
                                <FaCheck className='mr-2' size={10}/> Saved
                            </button>
                        ) : (
                            <button onClick={saveShow} className='bg-red-600 text-center items-center inline-flex border rounded-full border-red-600 px-4 py-1 text-base hover:scale-110'>
                                <FaPlus className='mr-2' size={10}/> Save
                            </button>
                        )}
                        
                        <button className='bg-black/60 text-center items-center inline-flex rounded-full px-4 py-1 text-base border border-white hover:scale-110 ml-2'>
                            <FaEye className='mr-2'/> Trailer
                        </button>
                    </div>
                </div>
                <p onClick={saveShow}>
                    {like ? <AiFillStar className='absolute top-4 left-4 text-gray-400' /> : <AiOutlineStar className='absolute top-4 left-4 text-gray-400' />}
                </p>
            </div>
        </div>
    )
}

export default Movie