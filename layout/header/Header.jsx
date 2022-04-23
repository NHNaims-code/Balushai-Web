import Image from 'next/image'
import React, { useEffect } from 'react'
import Dropdown from '../../components/dropdown/Dropdown'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { setUserData } from '../../redux'
import { getUserData } from '../../adapters/user'
import { getCustomerCart } from '../../adapters/cart'
import { updateCart } from '../../redux/cart/cartActions'

export default function Header() {

  const userData = useSelector(state => state.user?.data)
  const cartItems = useSelector(state => state.cart?.data?.items)
  console.log("cart items: ", cartItems)
  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogout = () => {
    localStorage.clear()
    sessionStorage.clear()
    router.push('/auth/sign-in')
    dispatch(setUserData(null))
    Object.keys(Cookies.get()).forEach(function(cookieName) {
      var neededAttributes = {
        // Here you pass the same attributes that were used when the cookie was created
        // and are required when removing the cookie
      };
      Cookies.remove(cookieName, neededAttributes);
    });
  }

  const account = {
    title: <><i className="fa-light fa-circle-user"></i><span className='mx-2'>Account</span></>,
    options: [
      {title: <><Link href='#'><div className='py-2 transition-all duration-200 hover:underline group-hover:text-red-400'>My Orders</div></Link></>},
      {title: <><Link href='/chat/message-center'><div className='py-2 transition-all duration-200 hover:underline'>Message Center</div></Link></>},
      {title: <><Link href='#'><div className='py-2 transition-all duration-200 hover:underline'>Wish List</div></Link></>},
      {title: <><Link href='#'><div className='py-2 transition-all duration-200 hover:underline'>My Favorite Stores</div></Link></>},
      {title: <><Link href='#'><div className='py-2 transition-all duration-200 hover:underline'>My Copons</div></Link></>},
      {title: <><Link href='/profile'><div className='py-2 transition-all duration-200 hover:underline'>Settings</div></Link></>},
      {title: <><Link href='#'><div onClick={handleLogout} className='py-2'>Log Out</div></Link></>},
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
    <div className='shadow w-full'>
      {/* <TopHeader/> */}
      <div className='bg-[#fafafa]'>
      <div className='sm:none md:flex h-[42px] container mx-auto'>
        <ul className='flex ml-auto hover:cursor-pointer'>
          <li className='px-4 my-auto border-r-2'><Dropdown data={help}/></li>
          <li className='px-4 my-auto'><i className="fa-light fa-mobile-notch mr-2"></i>App</li>
          {
            userData
            &&<li className='px-4 my-auto border-x-2'><i className="fa-light fa-heart mr-2"></i>Wish List</li>
          }
          {
            !userData
            &&<li className='px-4 my-auto border-x-2'><Link href='/auth/sign-up'>Sign Up</Link></li>
          }
          <li className='px-4 my-auto '>
            {
              userData
              ?<Dropdown data={account}/>
              :<Link href='/auth/sign-in'>Sign In</Link>

            }
          </li>
        </ul>
      </div>
      </div>
      {/* Main Header */}
      <div className='bg-white h-[96px] w-full'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-5 gap-4'>
            <div className='h-100 flex justify-center items-center cursor-pointer'>
             <Link passHref  href='/'>
              <Image  
                src="/images/logo.jpg" 
                width="100%" 
                height="96px" 
                alt="Balushai" 
              />
             </Link>
            </div>

            {/* Search section */}
            <div className='col-span-3 my-auto'>
              <div className='flex border-2 border-[#D23E41] box-border h-[38px]'>
                <div className='flex w-full'>
                  <input className='w-full px-4 outline-none' type='text' placeholder='summer clothes for women'/>
                  <select className='w-[200px] px-4 mr-2 border-l-2 outline-none'>
                    <option>All Category</option>
                    <option>Man</option>
                    <option>Women</option>
                  </select>
                  <div className='bg-[#D23E41] px-4 py-2 hover:cursor-pointer'>
                    <i className="fa-light fa-magnifying-glass text-white"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Cart section */}
            <div className=' flex justify-start items-center'>
              <Link href='/cart'>
              <div className='relative hover:cursor-pointer'>
                <i className="fa-light fa-cart-shopping text-2xl"></i>
                {
                  cartItems
                  && <small className='bg-[#D23E41] p-1 rounded-full text-white text-xs absolute top-[-8px] right-[-5px]'>
                    {cartItems?.length}
                  </small>
                }
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
