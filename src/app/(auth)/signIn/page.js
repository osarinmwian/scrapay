import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

const SignIn = () => {
  return (
    <div className="w-2/3 p-5">
      <div className='text-left font-bold'>
        <span className='text-green-500'>CompanyName</span>
      </div>
      <div className='py-10'>
        <h1 className='text-2xl font-bold text-green-500'>
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
          <div className='bg-gray-100 w-64 p-2 flex items-center mb-2'>
            <FaRegEnvelope className='text-gray-400 m-2'/>
            <input
              className='bg-gray-100 outline-none text-sm text-black'
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className='bg-gray-100 w-64 p-2 flex items-center' >
            <MdLockOutline className='text-gray-400 m-2'/>
            <input
              className='bg-gray-100 outline-none text-sm text-black'
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
      </div>
      <a href='#' className='border-2 border-green-500 rounded-full px-12 py-2 
        inline-block font-semibold text-green-500 hover:bg-green-500 hover:text-green-500'>
        SignIn
      </a>
      
    </div>
  );
};

export default SignIn;