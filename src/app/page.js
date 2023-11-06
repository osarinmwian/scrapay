
"use client";
import React, { useState } from 'react';
import {FaFacebookF, FaGoogle, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';
import { useRouter } from 'next/navigation'
import {MdLockOutline } from 'react-icons/md'
import { isEmailValid } from '../validation/index'
import {useUser} from '@auth0/nextjs-auth0/client'
export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const {user, error, isLoading} = useUser();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.email === "" ){
      setEmailError('Enter Email');
      setPasswordError('Enter Password');
      return;
    }
    if(formData.password === ""){
      setPasswordError('Enter Password');
      return;
    }
    if (!isEmailValid(formData.email)) {
      setEmailError('Invalid email address');
      return;
    }
    

    router.push('/dashboard')
  };
  return (
    <div>
      <a href=''>


      </a>
   
    <div className="flex min-h-screen bg-white flex-col   items-center justify-between p-24">
    <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
      <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl '>  
      <div className=' w-2/3 p-5'>

<div className='text-left font-bold'>
<span className='  text-green-500'> Halloway</span>
</div>
<div className='py-10'>
  <h1 className= 'text-2xl font-bold text-green-500'>
    Sign in to Account
  </h1>
  <div className='border-2 w-10 border-green-500 inline-block mb-2'/>

  <div className='flex justify-center my-2'>
  <a href='#' className='border-2 border-gray-200 inline-block rounded-full p-2 mx-1'>
     <FaFacebookF className='text-black text-sm'/>
 </a>
 <a href='#' className='border-2 border-gray-200 inline-block rounded-full p-2 mx-1'>
<FaLinkedinIn className='text-black text-sm'/>
 </a>
 <a href='#' className='border-2 border-gray-200 inline-block rounded-full p-2 mx-1'>
<FaGoogle className='text-black text-sm'/>
 </a>
  </div>
  <p className='text-gray-400 my-3'>or use your email account</p>
  <div className='flex flex-col items-center'>
    <div className='bg-gray-100 w-64 p-2 flex items-center mb-2' >
<FaRegEnvelope className='text-gray-400 m-2'/>
<input
  className='bg-gray-100 outline-none text-sm text-black'
            id="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              setEmailError('');
            }}
          />
          
    </div>
    {emailError && <p className="text-red-500 text-xs mt-1  mb-2 text-left px-0">{emailError}</p>}
    <div className='bg-gray-100 w-64 p-2 flex items-center ' >
<MdLockOutline className='text-gray-400 m-2'/>
<input
  className='bg-gray-100 outline-none text-sm text-black'
            id="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
              setPasswordError('');
            }}
            
          />
          
    </div>
    {passwordError && <p className="text-red-500 text-xs mt-2 text-left  px-0 mb-1">{passwordError}</p>}
  </div>
</div>
<a href='#' className='border-2 border-green-500 rounded-full px-12 py-2 
 inline-block font-semibold  text-green-500 hover:bg-green-500 hover:text-white '
 onClick={handleSubmit}
 >
  
SignIn
 </a>
      </div>
      <div className=' w-2/5 bg-green-500 text-white rounded-tr-2xl  rounded-br-2xl  py-36 px-10 ' >
<h1 className='text-2xl font-bold mb-2 flex-row'>Welcome!</h1>
<div className='border-2 w-10 border-white inline-block mb-2'/>

 <p  className='mb-10 text-1 '>Fill up the information below</p>
 <a href='#' className='border-2 border-white rounded-full px-12 py-2 
 inline-block font-semibold  hover:bg-white hover:text-green-500'
 onClick={()=> router.push('/signup')}
 >
SignUp
 </a>
      </div>
     
      </div>
    </main>
      </div>

      </div>
  )
}
