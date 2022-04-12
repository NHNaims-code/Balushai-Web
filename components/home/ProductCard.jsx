import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({imgSrc}) {
  return (
    <Link passHref  href="#">
      <div className='transition-all duration-150 cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg'>
        <div className='bg-white'>
          <div>
            <Image alt="image"  
              src={imgSrc}
              width="100%" 
              height="100%" 
              layout="responsive" 
              objectFit="cover"
              />
          </div>
          <div className='p-2'>
            <h4 className='text-sm h-6 whitespace-nowrap overflow-hidden text-ellipsis'>Handmade Eternity Promise Gold Crystal Ring AAA CZ Zirconia Engagement Wedding Band Rings for Women Men Finger Party Jewelry</h4>
            <div>
              US <span className='text-sm'>$<span className='text-xl font-semibold'>1</span></span>
            </div>
            <div className='mt-1 text-sm'>
              <span className='text-md'>2105 sold</span>
              <span><i className="fa-solid fa-star text-amber-500 mx-2"></i>4.8</span>
            </div>
            <div className='text-sm mt-1'>
              Free Shipping
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
