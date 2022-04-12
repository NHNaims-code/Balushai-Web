import React from 'react'
import Link from 'next/link'

export default function TopBar() {

  return (
    <div className='bg-[#FAFAFA] py-4'>
      <div className='container mx-auto'>
        <div>
          <ul className='flex items-center'>
            <li className='mr-8'>
              <Link passHref  href="/"><h4 className='text-xl font-semibold text-gray-500 hover:cursor-pointer'>Store Home</h4></Link>
            </li>
            <li className='mr-8'>93.0% Positive feedback</li>
            <li className='mr-8'>1335 Followers</li>
            <li className='mr-8'>
              <button className='bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-2 text-white rounded-full shadow-sm'>Follow</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
