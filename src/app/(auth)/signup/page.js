"use client";
import React, { useState } from 'react';
import { FaRegEnvelope,  } from 'react-icons/fa';
import { useRouter } from 'next/navigation'

import {MdLockOutline } from 'react-icons/md'
import {BsFillPersonCheckFill} from 'react-icons/bs'
import {IoIosCall} from 'react-icons/Io'

export default function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    password: '',
  
  });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const handleSubmit = async (e) => {
    if(formData.email === "" ){
      setEmailError('Enter Email');
      setPasswordError('Enter Password');
      setFullNameError('Enter Full Name');
      setPhoneError('Enter Phone Number');
      return;
    }
    if(formData.password === ""){
      setPasswordError('Enter Password');
      return;
    }
    if(formData.fullName === ""){
      setFullNameError('Enter Full Name');
      return;
    }
    if(formData.phoneNumber === ""){
      setPhoneError('Enter Phone Number');
      return;
    }
   
    e.preventDefault();
    router.push('/');
  };
  return (
    <div className="flex min-h-screen bg-white flex-col   items-center justify-between p-24">
    <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
      <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl '>  
      <div className=' w-2/3 p-5'>
<div className='py-2'>
  <h1 className= 'text-2xl font-bold text-green-500 mb-4'>
  Create Account
  </h1>
  <div className='flex flex-col items-center'>
  <div className='bg-gray-100 w-64 p-2 flex items-center mb-2 ' >
<BsFillPersonCheckFill className='text-gray-400 m-2'/>
<input
  className='bg-gray-100 outline-none text-sm text-black'
            id="fullName"
            type="fullName"
            placeholder="FullName"
            value={formData.fullName}
            onChange={(e) => {
              setFormData({ ...formData, fullName: e.target.value })
              setFullNameError('')
          }}
          />
    </div>
    {fullNameError && <p className="text-red-500 text-xs mt-2 mb-2">{fullNameError}</p>}
    <div className='bg-gray-100 w-64 p-2 flex items-center mb-2' >
<FaRegEnvelope className='text-gray-400 m-2'/>
<input
  className='bg-gray-100 outline-none text-sm text-black'
            id="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>{ 
              setFormData({ ...formData, email: e.target.value })
              setEmailError('')
          
          }}
          />
    </div>
    {emailError && <p className="text-red-500 text-xs mt-2 mb-2">{emailError}</p>}
    <div className='bg-gray-100 w-64 p-2 flex items-center mb-2' >
<MdLockOutline className='text-gray-400 m-2'/>
<input
  className='bg-gray-100 outline-none text-sm text-black'
            id="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value })
            setPasswordError('')
            }}
            
          />
    </div>
    {passwordError && <p className="text-red-500 text-xs mt-2 mb-2">{passwordError}</p>}
    <div className='bg-gray-100 w-64 p-2 flex items-center mb-2' >
<IoIosCall className='text-gray-400 m-2'/>
<input
  className='bg-gray-100 outline-none text-sm text-black'
            id="phoneNumber"
            type="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={(e) =>{
               setFormData({ ...formData, phoneNumber: e.target.value })
              setPhoneError('')}
              }
          />
    </div>
    {phoneError && <p className="text-red-500 text-xs mt-2 mb-2">{phoneError}</p>}
  </div>
  
</div>
<a href='#' className='border-2 border-green-500 rounded-full px-12 py-2 mt-5 mb-5 
 inline-block font-semibold  text-green-500 hover:bg-green-500 hover:text-white'
 onClick={handleSubmit}>
SignUp
 </a>
      </div>
     
     
      </div>
    </main>
      </div>

 
  )
}
