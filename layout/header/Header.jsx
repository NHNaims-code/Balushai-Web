import Image from 'next/image'
import React from 'react'
import Dropdown from '../../components/dropdown/Dropdown'
import TopHeader from './topHeader'

export default function Header() {

  const account = {
    title: <><i class="fa-light fa-circle-user"></i><span className='mx-2'>Account</span></>,
    options: [
      {title: <><a href='#'><div className='py-2 group-hover:text-red-400'>My Orders</div></a></>},
      {title: <><a href='#'><div className='py-2'>Message Center</div></a></>},
      {title: <><a href='#'><div className='py-2'>Wish List</div></a></>},
      {title: <><a href='#'><div className='py-2'>My Favorite Stores</div></a></>},
      {title: <><a href='#'><div className='py-2'>My Copons</div></a></>},
    ]
  }
  const help = {
    title: <><span className='mx-2'>Help</span></>,
    options: [
      {title: <><a href='#'><div className='py-2'>Customer Service</div></a></>},
      {title: <><a href='#'><div className='py-2'>Disputs & Reports</div></a></>},
    ]
  }
  return (
    <div>
      {/* <TopHeader/> */}
      <div className='bg-[#fafafa]'>
      <div className='sm:none md:flex h-12 container mx-auto'>
        <ul className='flex ml-auto hover:cursor-pointer'>
          <li className='px-4 my-auto border-r-2'><Dropdown data={help}/></li>
          <li className='px-4 my-auto'><i class="fa-light fa-mobile-notch mr-2"></i>App</li>
          <li className='px-4 my-auto border-x-2'><i class="fa-light fa-heart mr-2"></i>Wish List</li>
          <li className='px-4 my-auto '><Dropdown data={account}/></li>
        </ul>
      </div>
      </div>
      {/* Main Header */}
      <div className='bg-white h-[96px] w-full'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-5 gap-4'>
            <div className='h-100 flex justify-center items-center'>
              <Image 
                src="/images/logo.jpg" 
                width="100%" 
                height="96px" 
            
                alt="Balushai" 
              />
            </div>

            {/* Search section */}
            <div className='col-span-3 my-auto'>
              <div className='flex border-2 border-[#D23E41] box-border h-[38px]'>
                <div className='flex w-full'>
                  <input className='w-full px-4' type='text' placeholder='summer clothes for women'/>
                  <select className='w-[200px] px-4 mr-2 border-l-2'>
                    <option>All Category</option>
                    <option>Man</option>
                    <option>Women</option>
                  </select>
                  <div className='bg-[#D23E41] px-4 py-2'>
                    <i class="fa-light fa-magnifying-glass text-white"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Cart section */}
            <div className=' flex justify-start items-center'>
              <div className='relative'>
                <i class="fa-light fa-cart-shopping text-2xl"></i>
                <small className='bg-[#D23E41] p-1 rounded-full text-white text-xs absolute top-[-8px] right-[-5px]'>0</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
