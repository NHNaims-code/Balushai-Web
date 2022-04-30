import React from 'react'
import Link from 'next/link'

export default function TopBar() {

  return (
    <div className='bg-[#FAFAFA] py-4'>
      <div className='container mx-auto'>
        <div>
          <ul className='flex px-2 sm:px-0 justify-between sm:justify-start items-center'>
            <li className='sm:mr-8'>
              <Link passHref  href="/"><h4 className='sm:text-xl font-semibold text-gray-500 hover:cursor-pointer'>Store Home</h4></Link>
            </li>
            <li className='sm:mr-8 hidden sm:block'>93.0% Positive feedback</li>
            <li className='sm:mr-8 text-sm sm:text-md'>1335 Followers</li>
            <li className='sm:mr-8'>
              <button className='bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-1 text-sm sm:text-md sm:px-8 sm:py-2 text-white rounded-full shadow-sm'>Follow</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
