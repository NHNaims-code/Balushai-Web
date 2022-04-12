import React from 'react'
import Link from 'next/link'

export default function HeroRightSection() {
  return (
    <div className=' rounded-lg bg-white mt-4 hidden xl:flex flex-col mb-4'>
      <div className='flex items-center flex-col mt-8'>
        <i className="fa-solid fa-circle-user text-5xl"></i>
        <p className='font-semibold mt-2'>Welcome to Balushai</p>
      </div>
      <div className='p-4 flex justify-around'>
        <Link passHref  href='/auth/sign-up'>
          <button className='bg-[#D23E41] text-white h-12 w-24 rounded-2xl'>Join</button>
        </Link>
        <Link passHref  href='/auth/sign-in'>
          <button className='bg-[#D23E41] text-white h-12 w-24 rounded-2xl'>Sign in</button>
        </Link>
      </div>
      <div className='h-full bg-gray-200 m-4 flex justify-center items-center'>

        {/* Offer card here */}
        <h1 className=''>Offer Here</h1>

      </div>
    </div>
  )
}
