import React from 'react'
import Link from 'next/link'

export default function HeroCategory() {
  return (
    <div className='grid grid-cols-5 gap-2 p-4'>
      <div>
        <Link passHref  href="#">
          <div className='flex flex-col items-center'>
            <div className='text-4xl h-16 w-16 flex justify-center items-center rounded-full text-white bg-green-500'>
              <i className="fa-light fa-list"></i>
            </div>
            <div className='text-sm'>
              Categories
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link passHref  href="#">
          <div className='flex flex-col items-center'>
            <div className='text-4xl h-16 w-16 flex justify-center items-center rounded-full text-white bg-pink-500'>
              <i className="fa-light fa-person-dress"></i>
            </div>
            <div className='text-sm text-center'>
              Women's clothing
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link passHref  href="#">
          <div className='flex flex-col items-center'>
            <div className='text-4xl h-16 w-16 flex justify-center items-center rounded-full text-white bg-blue-500'>
              <i className="fa-light fa-person-dress-simple"></i>
            </div>
            <div className='text-sm text-center'>
              Men's clothing
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link passHref  href="#">
          <div className='flex flex-col items-center'>
            <div className='text-4xl h-16 w-16 flex justify-center items-center rounded-full text-white bg-orange-500'>
              <i className="fa-light fa-mobile-button"></i>
            </div>
            <div className='text-sm text-center'>
            Phones & Accessories
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link passHref  href="#">
          <div className='flex flex-col items-center'>
            <div className='text-4xl h-16 w-16 flex justify-center items-center rounded-full text-white bg-amber-500'>
              <i className="fa-light fa-camera"></i>
            </div>
            <div className='text-sm text-center'>
              Consumer Electronics
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link passHref  href="#">
          <div className='flex flex-col items-center'>
            <div className='text-4xl h-16 w-16 flex justify-center items-center rounded-full text-white bg-orange-500'>
              <i className="fa-light fa-mobile-button"></i>
            </div>
            <div className='text-sm text-center'>
            Phones & Accessories
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link passHref  href="#">
          <div className='flex flex-col items-center'>
            <div className='text-4xl h-16 w-16 flex justify-center items-center rounded-full text-white bg-blue-500'>
              <i className="fa-light fa-list"></i>
            </div>
            <div className='text-sm'>
              Categories
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link passHref  href="#">
          <div className='flex flex-col items-center'>
            <div className='text-4xl h-16 w-16 flex justify-center items-center rounded-full text-white bg-pink-500'>
              <i className="fa-light fa-person-dress"></i>
            </div>
            <div className='text-sm text-center'>
              Women's clothing
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link passHref  href="#">
          <div className='flex flex-col items-center'>
            <div className='text-4xl h-16 w-16 flex justify-center items-center rounded-full text-white bg-blue-500'>
              <i className="fa-light fa-person-dress-simple"></i>
            </div>
            <div className='text-sm text-center'>
              Men's clothing
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link passHref  href="#">
          <div className='flex flex-col items-center'>
            <div className='text-4xl h-16 w-16 flex justify-center items-center rounded-full text-white bg-orange-500'>
              <i className="fa-light fa-mobile-button"></i>
            </div>
            <div className='text-sm text-center'>
            Phones & Accessories
            </div>
          </div>
        </Link>
      </div>

    </div>
  )
}
