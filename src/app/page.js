import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col   items-center justify-between p-24">
    <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
      <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl '>  
      <div className='text-black w-2/3'>
{/* sihn up */}
<p > sign up</p>
      </div>
      <div className='text-black w-2/5'>
{/* sign in */}
 <p >sign in</p>
      </div>
     
      </div>
    </main>
      </div>
 
  )
}
