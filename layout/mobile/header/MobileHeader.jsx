import React from 'react'
import Image from 'next/image'

export default function MobileHeader() {
  return (
    <div className=' bg-white px-3'>
      <div className='flex items-center'>
        <div className=''>
          <Image alt="image"  
            src="/images/logo.jpg" 
            width="51px" 
            height="51px" 
        
            alt="Balushai" 
          />
        </div>
        <div className='grow'>
          <div className='w-full bg-[#F2F2F2] flex p-2 rounded-full'>
            <input type='text' placeholder='ring' className='w-full bg-[#F2F2F2]'/>
            <i className="fa-light fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
