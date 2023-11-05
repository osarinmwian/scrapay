import SignIn from '@/app/(auth)/signIn/page'
import Sidebar from '@/component/SIdeBar'
import Dashboard from '@/dashboard/page'
import Image from 'next/image'
import {FaFacebookF, FaGoogle, FaLinkedinIn, FaRegEnvelope,  } from 'react-icons/fa';

import {MdLockOutline } from 'react-icons/md'
import {BsFillPersonCheckFill} from 'react-icons/bs'

export default function SignUp() {
  return (
    <div className="flex min-h-screen bg-white flex-col   items-center justify-between p-24">
    <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
      <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl '>  
      <div className=' w-2/3 p-5'>
{/* sihn up */}
<div className='text-left font-bold'>
<span className='  text-green-500'> CompanyName</span>
</div>
<div className='py-10'>
  <h1 className= 'text-2xl font-bold text-green-500'>
  Create Account
  </h1>
  <div className='border-2 w-10 border-green-500 inline-block '/>
  <div className='flex flex-col items-center'>
  <div className='bg-gray-100 w-64 p-2 flex items-center mb-2 ' >
<BsFillPersonCheckFill className='text-gray-400 m-2'/>
<input
  className='bg-gray-100 outline-none text-sm text-black'
            id="fullName"
            type="fullName"
            placeholder="FullName"
            
          />
    </div>

    <div className='bg-gray-100 w-64 p-2 flex items-center mb-2' >
<FaRegEnvelope className='text-gray-400 m-2'/>
<input
  className='bg-gray-100 outline-none text-sm text-black'
            id="email"
            type="email"
            placeholder="Email"
            
          />
    </div>
    <div className='bg-gray-100 w-64 p-2 flex items-center mb-2' >
<MdLockOutline className='text-gray-400 m-2'/>
<input
  className='bg-gray-100 outline-none text-sm text-black'
            id="password"
            type="password"
            placeholder="Password"
            
          />
    </div>
    <div className='bg-gray-100 w-64 p-2 flex items-center mb-2' >
<MdLockOutline className='text-gray-400 m-2'/>
<input
  className='bg-gray-100 outline-none text-sm text-black'
            id="phoneNumber"
            type="phoneNumber"
            placeholder="Phone Number"
            
          />
    </div>
  </div>
  
</div>
<a href='#' className='border-2 border-green-500 rounded-full px-12 py-2 
 inline-block font-semibold  text-green-500 hover:bg-green hover:text-green-500'>
SignUp
 </a>
      </div>
     
     
      </div>
    </main>
      </div>

 
  )
}
