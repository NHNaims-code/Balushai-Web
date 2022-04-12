import React from 'react'

export default function HeroCategory() {
  return (
    <div className='rounded-lg bg-white p-4 my-4 relative border-b-2'>
      <div className='font-semibold border-b-2 pb-4 mb-2'>
        <i class="fa-regular fa-list mr-4"></i>Category
      </div>
      <div>
        <ul>
          <li className='py-3 border-b group hover:cursor-pointer hover:text-[#D23E41]'>
            <><i class="mr-2 fa-light fa-person-dress-simple"></i> Women's Fashion</>
            <div className='transition-all duration-200 hidden group-hover:absolute shadow-lg left-[100%] z-40 top-0 w-[780px] h-[400px] bg-white group-hover:flex justify-center items-center flex-col text-5xl rounded-sm'>
              <div className='text-sm'> Women's Fashion</div>
              Details Here
            </div>
          </li>
          <li className='py-3 border-b group hover:cursor-pointer hover:text-[#D23E41]'>
            <><i class="mr-2 fa-light fa-person-simple"></i> Men's Fashion</>
            <div className='transition-all duration-200 hidden group-hover:absolute shadow-lg left-[100%] z-40 top-0 w-[780px] h-[400px] bg-white group-hover:flex justify-center items-center flex-col text-5xl rounded-sm'>
              <div className='text-sm'> Men's Fashion</div>
              Details Here
            </div>
          </li>
          <li className='py-3 border-b group hover:cursor-pointer hover:text-[#D23E41]'>
            <><i class="mr-2 fa-light fa-mobile"></i> Phones & Telecommunications</>
            <div className='transition-all duration-200 hidden group-hover:absolute shadow-lg left-[100%] z-40 top-0 w-[780px] h-[400px] bg-white group-hover:flex justify-center items-center flex-col text-5xl rounded-sm'>
              <div className='text-sm'> Phones & Telecommunications</div>
              Details Here
            </div>
          </li>
          <li className='py-3 border-b group hover:cursor-pointer hover:text-[#D23E41]'>
            <><i class="mr-2 fa-light fa-laptop"></i> Computer, Office & Security</>
            <div className='transition-all duration-200 hidden group-hover:absolute shadow-lg left-[100%] z-40 top-0 w-[780px] h-[400px] bg-white group-hover:flex justify-center items-center flex-col text-5xl rounded-sm'>
              <div className='text-sm'> Computer, Office & Security</div>
              Details Here
            </div>
          </li>
          <li className='py-3 border-b group hover:cursor-pointer hover:text-[#D23E41]'>
            <><i class="mr-2 fa-light fa-camera"></i> Consumer Electronics</>
            <div className='transition-all duration-200 hidden group-hover:absolute shadow-lg left-[100%] z-40 top-0 w-[780px] h-[400px] bg-white group-hover:flex justify-center items-center flex-col text-5xl rounded-sm'>
              <div className='text-sm'> Consumer Electronics</div>
              Details Here
            </div>
          </li>
          <li className='py-3 border-b group hover:cursor-pointer hover:text-[#D23E41]'>
            <><i class="mr-2 fa-light fa-gem"></i> Jewelry & Watches</>
            <div className='transition-all duration-200 hidden group-hover:absolute shadow-lg left-[100%] z-40 top-0 w-[780px] h-[400px] bg-white group-hover:flex justify-center items-center flex-col text-5xl rounded-sm'>
              <div className='text-sm'> Jewelry & Watches</div>
              Details Here
            </div>
          </li>
          <li className='py-3 border-b group hover:cursor-pointer hover:text-[#D23E41]'>
            <><i class="mr-2 fa-light fa-dog-leashed"></i> Home, Pet & Application</>
            <div className='transition-all duration-200 hidden group-hover:absolute shadow-lg left-[100%] z-40 top-0 w-[780px] h-[400px] bg-white group-hover:flex justify-center items-center flex-col text-5xl rounded-sm'>
              <div className='text-sm'> Home, Pet & Application</div>
              Details Here
            </div>
          </li>
          <li className='py-3 border-b group hover:cursor-pointer hover:text-[#D23E41]'>
            <><i class="mr-2 fa-light fa-bag-shopping"></i> Bags & Shoes</>
            <div className='transition-all duration-200 hidden group-hover:absolute shadow-lg left-[100%] z-40 top-0 w-[780px] h-[400px] bg-white group-hover:flex justify-center items-center flex-col text-5xl rounded-sm'>
              <div className='text-sm'> Bags & Shoes</div>
              Details Here
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
