import React, { useState } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { FaBars, FaTimes, FaSearch} from 'react-icons/fa'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const [submited, setSubmit] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setSubmit(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(submited)
    navigate('/search', {state:{search:submited}});
  }

  const {user, logOut} = UserAuth()
  const redirectTo = useNavigate()
  const handleLogout = async () => {
    try {
      await logOut();
      redirectTo('/');
      alert('You just Log Out from Notflix, we will miss u.');
      setNav(false)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='flex absolute items-center justify-between w-full p-4 z-[99]'>
      <Link to='/'>      
        <h1 className='text-red-600 bg-transparent text-3xl md:text-5xl font-lato font-bold cursor-pointer'>notFlix</h1>
      </Link>

      <form onSubmit={handleSubmit} className='w-[50%] lg:w-full max-w-sm lg:ml-[20%]'>
        <div className='hidden lg:flex items-center border-b border-white py-2'>
          <input onChange={handleChange} type="text" className='appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none ' placeholder='Search Movie..'/>
          <button className='flex-shrink-0 rounded-full text-base text-white py-1 px-2 bg-transparent hover:scale-110 duration-300 '><FaSearch/> </button>
        </div>
      </form>

      <div className='hidden lg:block'>
        {user?.email ? (
          <div>
            <Link to='/account'>
              <button className='text-white pr-4 hover:scale-110 duration-300'>Account</button>
            </Link>
            <button onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded text-white hover:scale-110 duration-300'>Logout</button>

        </div>
        ) : (
          <div>
              <Link to='/login'>
                <button className='text-white pr-4 hover:scale-110 duration-300'>Sign In</button>
              </Link>
              <Link to='/register'>
                <button className='bg-red-600 px-6 py-2 rounded text-white hover:scale-110 duration-300'>Sign Up</button>
              </Link>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <div className={nav ? 'fixed flex flex-col justify-center items-center top-0 left-0 h-screen w-full lg:hidden bg-black/90 duration-500' : 'fixed flex flex-col justify-center items-center top-0 -left-full h-screen w-[20%] bg-black/90 duration-500'}>
      <form className='w-[90%] max-w-sm mb-4'>
        <div className='flex items-center border border-white py-2 px-4 rounded-full'>
          <input type="text" className='bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none ' placeholder='Search Movie..'/>
          <button className='flex justify-between items-center rounded-full text-base text-white p-2 bg-red-600'><FaSearch className='mx-2'/></button>
        </div>
      </form>
      <Link to='/'>      
        <h1 className='absolute top-4 left-4 text-red-600 text-3xl md:text-4xl font-lato font-bold cursor-pointer bg-transparent'>notNetflix</h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to='/account'>
            <button className='text-white pr-4' onClick={() => setNav(false)}>Account</button>
          </Link>
          <button onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded text-white'>Logout</button>

      </div>
      ) : (
        <div>
            <Link to='/login'>
              <button className='text-white pr-4'>Sign In</button>
            </Link>
            <Link to='/register'>
              <button className='bg-red-600 px-6 py-2 rounded text-white'>Sign Up</button>
            </Link>
        </div>
      )}
      </div>

      {/* Sidebar Toggler */}

      {!nav ? (
        <button className='text-white mr-4 z-50 fixed right-2 lg:hidden' onClick={() => setNav(true)}>
          <FaBars size={30}/>
        </button>
      ) : (
        <button className='text-white mr-4 z-50 fixed right-2 lg:hidden' onClick={() => setNav(false)}>
          <FaTimes size={30}/>
        </button>
      )}


      
        
    </div>
  )
}

export default Navbar