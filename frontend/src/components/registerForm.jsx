import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../hooks/authContext'
import { useNavigate } from 'react-router-dom'

export default function RegisterForm() {

    const { register } = useContext(AuthContext)
    const [userName , setUserName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [error , setError] = useState(null);

    const navigate = useNavigate()




    const handleSubmit = async (e) => {

        e.preventDefault();

        try{

          await register(userName , email , password);
          navigate('/login');


        }catch(err){

            setError('Registration failed. Please try again')
        }
    }


  return (

    <>    
    <div
    className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
    <div className="w-full">
        <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Sign up</h1>
            <p className="mt-2 text-gray-500">Sign up below to join us</p>
        </div>
        <div className="mt-5">
            <form action="" onSubmit={handleSubmit}>


                <div className="relative mt-6">
                    <input onChange={(e)=> setUserName(e.target.value)} type="text" name="email"  placeholder="Name" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                    <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Name</label>
                </div>

                <div className="relative mt-6">
                    <input onChange={(e)=> setEmail(e.target.value)} type="email" name="email" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                    <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                </div>
                <div className="relative mt-6">
                    <input onChange={(e)=> setPassword(e.target.value)} type="password" name="password" placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                    <label htmlFor="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                </div>

                <div className="my-6">
                    <button type="submit" className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign up</button>
                </div>
                <p className="text-center text-sm text-gray-500">you have an account ?

                    <Link to={'/login'} className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Sign in</Link>
                </p>
            </form>
            {error && <p className='text-red'>{error}</p>}
        </div>
    </div>
</div>

    </>
  )
}
