import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Background from '../assets/background.jpg'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const {user, logIn} = UserAuth()
    const redirectTo = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await logIn(email, password);
            redirectTo('/');
            alert('You just logged in to Notflix!');
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    };

  return (
    <>
        <div className='w-full h-screen'>
            <img className='hidden sm:block absolute w-full h-full object-cover' src={Background} alt="" />
            <div className='bg-black/70 fixed top-0 left-0 w-full h-screen'></div>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/60 text-white rounded shadow-xl'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-semibold '>Sign In</h1>
                        {error ? <p className='p-3 bg-red-500 rounded mt-4 mb-0'>Oops!, There seems to be something wrong with your email or password</p> : null}
                        <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                            <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-4 bg-gray-600 rounded' type="email" name="email" id="" placeholder='E-mail' autoComplete='email'/>
                            <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-4 bg-gray-600 rounded' type="password" name="" id="" placeholder='Password' autoComplete='current-password'/>
                            <button className='bg-red-600 py-3 my-6 rounded font-semibold'>Sign In</button>
                            <div className='flex justify-between items-center text-sm text-gray-400'>
                                <p><input type="checkbox" name="remember" className='mr-2'/>Remember Me</p>
                                <p>Need Help?</p>
                            </div>
                            <p className='py-8'>
                                <span className='text-gray-400'>
                                    Don't have an account yet?
                                </span> 
                                <Link to='/register' className='ml-2'>Sign Up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login