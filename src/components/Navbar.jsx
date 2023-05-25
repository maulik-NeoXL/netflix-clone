import React from 'react'

export default function Navbar(){
  return(
    <div className='flex items-center justify-between p-4 px-8 z-[100] w-full absolute'>
      <h1 className='text-[#E50914] text-4xl font-bold cursor-pointer '> NETLFIX</h1>
      <div className=''>
        <button className='text-white pr-4'> Sign In</button>
        <button className='bg-[#E50915] px-6 py-2 text-white font-bold rounded cursor-pointer'> Sign Up</button>
      </div>
    </div>
  )
}
