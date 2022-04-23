import next from 'next'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'
import { decQuantity, decreaseSingleQuantity, incQuantity, increaseSingleQuantity, removeItem } from '../redux/cart/cartActions'

export default function Cart() {
  const userData = useSelector(state => state.user.data)
  const cart = useSelector(state => state.cart.data)
  const cartItems = useSelector(state => state.cart.data?.items)
  const dispatch = useDispatch()



  const handleRemoveFromCart = async(product) => {
    const response = await deleteFromCart(product)
    console.log(response.data)
  }


  return (
    <div className='container mx-auto p-4'>
      <div className='bg-white p-4'>
        <div className='border-b-4 pb-4'>
          <p className='text-center text-2xl'>Your Cart</p>
        </div>
        {
          cartItems?.map((product, index) => (
            <div key={index} className='border-b py-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <div className='h-16 w-16 mr-4'>
                  <Image alt="image"  
                    src={product.image}
                    // src="https://res.cloudinary.com/ismail61/image/upload/v1650217191/balushai/product/2d6132a2-4caa-48c2-88f2-20acaaecbac0-e27-200w-5g-bulb-surveillance-camera-night-vision-full-color-automatic-human-tracking-zoom-indoor-security.jpg_q90.jpg__yjl8zz.webp"
                    width="100%" 
                    height="100%" 
                    layout="responsive" 
                    objectFit="cover"
                  />
                  </div>
                  <h4><Link href={`/product/${product.product_id.slug}`}>{product?.product_id?.product_name}</Link></h4>
                </div>
               <div className='flex'>
                <div className='mr-16'>
                    <i onClick={() => decQuantity(cart, product, dispatch)} className="fa-light fa-circle-minus text-2xl hover:cursor-pointer"></i>
                      <span className='text-2xl mx-2'>{product.quantity}</span>
                    <i onClick={() => incQuantity(cart, product, dispatch)} className="fa-light fa-circle-plus text-2xl hover:cursor-pointer"></i>
                </div>
                <span onClick={()=> removeItem(cart, product, dispatch)} className='bg-red-100 text-red-600 px-3 py-2 rounded shadow-sm hover:cursor-pointer'>Remove</span>
               </div>
              </div>
            </div>
          ))
        }
        {
          cartItems?.length == 0 
          && <div className='my-32 flex justify-center items-center'>Empty Cart</div>
        }
        { cartItems?.length != 0
          && <Link passHref href={`${userData?'/checkout':'auth/sign-in'}`}><div className='bg-[#D23E41] text-white w-full py-4 font-semibold hover:shadow-lg text-center hover:cursor-pointer transition-all duration-150'>CheckOut</div></Link>
        }
      </div>
    </div>
  )
}

// export async function getStaticProps(){
//   const response = await getCartProducts()
//   console.log("Cart Products", response?.data)

//   return {
//     props: {
//       cartProducts: response.data
//     }
//   }
// }