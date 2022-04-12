import React from 'react'
import Link from 'next/link'

export default function MobileFooter() {
  return (
    <div className='absolute bottom-0 left-0 right-0 bg-white py-2 shadow-2xl'>
      <div className='flex justify-around'>
        <Link passHref  href="#" className='flex flex-col items-center'>
          <div className='flex flex-col items-center'>
            <div><i className="fa-light fa-house text-3xl"></i></div>
            Home
          </div>
        </Link>
        <Link passHref  href='#'>
          <div className='flex flex-col items-center'>
            <div><i className="fa-light fa-list text-3xl"></i></div>
            Category
          </div>
        </Link>
        <Link passHref  href='#'>
          <div className='flex flex-col items-center'>
            <div><i className="fa-light fa-bag-shopping text-3xl"></i></div>
            Cart
          </div>
        </Link>
        <Link passHref  href='#'>
          <div className='flex flex-col items-center'>
            <div><i className="fa-light fa-user text-3xl"></i></div>
            Account
          </div>
        </Link>
      </div>
    </div>
  )
}
