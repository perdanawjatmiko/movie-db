import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Background from '../assets/background.jpg'
import {UserAuth} from '../context/AuthContext'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, signUp} = UserAuth()
    const redirectTo = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(email, password);
            redirectTo('/')
        } catch (error) {
            console.log(error)
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
                        <h1 className='text-3xl font-semibold '>Sign Up</h1>
                        <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                            <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-4 bg-gray-600 rounded' type="email" placeholder='E-mail' autoComplete='email'/>
                            <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-4 bg-gray-600 rounded' type="password" placeholder='Password' autoComplete='current-password'/>
                            
                            <button className='bg-red-600 py-3 my-6 rounded font-semibold'>Sign Up</button>
                            
                            <div className='flex justify-between items-center text-sm text-gray-400'>
                                <p><input type="checkbox" name="remember" className='mr-2'/>Remember Me</p>
                                <p>Need Help?</p>
                            </div>
                            <p className='py-8'>
                                <span className='text-gray-400'>
                                    Already have an account? 
                                </span> 
                                <Link to='/login' className='ml-2'>Sign In</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUp