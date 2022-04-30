import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteCartItem, getCustomerCart } from '../../adapters/cart'
import { decQuantity, incQuantity, removeItem, updateCart } from '../../redux/cart/cartActions'
import { useRouter } from 'next/router'

export default function HeroSection({data}) {
  const router = useRouter()
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.data)
  const userData = useSelector(state => state.user?.data)
  const [onCart, setOnCart] = useState(false)
  const [currentSize, setCurrentSize] = useState(data?.variant_stock_price[0]?.sizes[0])
  const [currentVariant, setCurrentVariant] = useState(data?.variant_stock_price[0])
  const [quantity, setQuentity] = useState(1)

  useEffect(() => {
    if(cart?.items?.length == 0){
      setOnCart(false)
    }
    cart?.items?.map(item => {
      if(item.product_id?._id == data?._id){
        setOnCart(item)
        setQuentity(item.quantity)
      }else{
        setOnCart(false)
      }
    })
  }, [cart])

  // useEffect(() => {
  //   const updateCartFetcher = async () => {
  //     const updateCartItemData = {
  //     color_family: currentVariant?.color_family,
  //     size: currentSize?.size,
  //     price: currentSize?.pricing?.price,
  //     image: currentVariant?.images[0]?.url,
  //     special_price: currentSize?.pricing?.special_price || null,
  //     offer_price: currentSize.pricing?.offer_price,
  //     quantity: quantity
  //     }
  
  //     let updatedCartItems = []
  
  //     cart?.items?.map((product, index) => {
  //       if(product?._id == data?._id) {
  //         const updatedItem = {...product, ...updateCartItemData}
  //         updatedCartItems.push(updatedItem)
  //       }else{
  //         updatedCartItems.push(product)
  //       }
  //     })
  
  //     const result = await updateCart({...cart, items:updatedCartItems})
  //     console.log('result:', result)
  //   }
  //   updateCartFetcher()
  // }, [currentSize, currentVariant])

  const handleAddToCart = async() => {
    if(!userData){
      router.push('/auth/sign-in')
      return 0
    }
    const cartItem = {
      product_id: data?._id,
      vendor_id: data?.vendor_id,
      color_family: currentVariant?.color_family,
      size: currentSize?.size,
      price: currentSize?.pricing?.price,
      image: currentVariant?.images[0]?.url,
      special_price: currentSize?.pricing?.special_price || null,
      offer_price: currentSize.pricing?.offer_price,
      quantity: quantity
    }
    addToCart(cartItem).then( async response => {
      if(response?.data){
        const cartResponse = await getCustomerCart()
        dispatch(updateCart(cartResponse?.data))
        console.log("success")
      }
    })
  }


  return (
    <div className='bg-white py-8 mb-8'>
      <div className='container mx-auto'>
      <h1 className='mx-2 mb-2 sm:hidden'>{data?.product_name}</h1>
        <div className='grid grid-cols-10 gap-4'>
          {/* Image Container */}
          <div className='col-span-10 sm:col-span-4'>
            <div>
            {/* src={data?.variant_stock_price[0]?.images[0]?.url} */}
            <Image alt="image"  
              src={currentVariant.images[0]?.url}
              width="100%" 
              height="100%" 
              layout="responsive" 
              objectFit="contain"
              />
            </div>
          </div>
          <div className='col-span-10 sm:col-span-5 px-2 sm:px-0'>
            <div>
              <h1 className='hidden sm:block'>{data?.product_name}</h1>
              <div className='flex justify-between sm:justify-start items-center mt-4 text-sm'>
                <div className='mb-2 sm:mb-0 sm:mr-2'>
                  {data?.rating > 0 &&<i className="fa-solid fa-star text-amber-500 mr-1"></i> }
                  {data?.rating > 1 &&<i className="fa-solid fa-star text-amber-500 mr-1"></i> }
                  {data?.rating > 2 &&<i className="fa-solid fa-star text-amber-500 mr-1"></i> }
                  {data?.rating > 3 &&<i className="fa-solid fa-star text-amber-500 mr-1"></i> }
                  {data?.rating > 4 &&<i className="fa-solid fa-star text-amber-500 mr-1"></i> }
                  {data?.rating == 0 &&<span className='bg-yellow-200 text-yellow-700 px-2 py-1 rounded-md shadow-sm'>New</span> }
                  
                </div>
                <div className='mr-3'>
                  {data?.rating != 0 && data?.rating }
                </div>
                <div className='mr-3'>
                  {data?.reviews.length != 0 ? data?.reviews.length+' Reviews' : 'No Reviews'}
                </div>
                <div className='mr-3'>
                  {data?.orders.length != 0 ? data?.orders.length+' Orders' : 'No Orders'}
                </div>
              </div>
              <div>
                <p className='font-semibold mt-4'>{data?.brand}</p>
              </div>
              <div className='border-y my-8 py-4'>
                <div className='flex items-center'>
                  <span className='text-2xl font-semibold mr-4'>BDT ৳{parseInt(currentSize.pricing.special_price).toLocaleString()}</span>
                  <span className='line-through'>BDT ৳{parseInt(currentSize.pricing.price).toLocaleString()}</span>
                  <span className='ml-4 bg-red-200 text-red-600 px-2'>-{Math.round(((parseInt(currentVariant.sizes[0].pricing.price)-parseInt(currentVariant.sizes[0].pricing.special_price))*100)/parseInt(currentVariant.sizes[0].pricing.price))}%</span>
                </div>
              </div>
              {/* Varient's Images */}
              <div className='mb-8'>
                <h4 className='mb-2'>Images: </h4>
                <div className='flex'>
                  {
                    currentVariant?.images.map((image,index) => (
                      <div key={index} className='h-16 w-16 border p-1 rounded mr-4 hover:cursor-pointer'>
                        <Image alt="image"  
                          src={image?.url}
                          width="100%" 
                          height="100%" 
                          layout="responsive" 
                          objectFit="contain"
                        />
                      </div>
                    ))
                  }
                </div>
              </div>
              {/* Colors */}
              <div className='mb-8 flex'>
                {data?.variant_stock_price.map((variant, index) => (
                 <div key={index}>
                  { 
                    currentVariant?.color_family == variant.color_family 
                    ? <div onClick={() => {setCurrentVariant(variant); setCurrentSize(variant?.sizes[0])}} key={index} className='mr-2 bg-[#D23E41] text-white hover:cursor-pointer inline-block px-4 py-2 rounded '>
                      <h4>{variant.color_family}</h4>
                    </div>
                    : <div onClick={() => {setCurrentVariant(variant); setCurrentSize(variant?.sizes[0])}} key={index} className='mr-2 bg-gray-100 hover:cursor-pointer inline-block px-4 py-2 rounded '>
                      <h4>{variant.color_family}</h4>
                    </div>
                  }
                 </div>
                ))}
              </div>
              {/* Sizes */}
              <div className='mb-8'>
                {currentVariant?.sizes.map((size, index) => (
                  currentSize === size 
                    ? <div onClick={()=> setCurrentSize(size)} key={index} className='bg-[#D23E41] text-white font-semibold mr-3 hover:cursor-pointer inline-block px-2 py-1 rounded '>
                        <h4>{size.size}</h4>
                      </div>
                    : <div onClick={()=> setCurrentSize(size)} key={index} className='bg-gray-100 font-semibold mr-3 hover:cursor-pointer inline-block px-2 py-1 rounded '>
                        <h4>{size.size}</h4>
                      </div>

                  
                ))}
              </div>
              {/* Add Quantity */}
              {onCart && <div>
                <div className='mb-3'>Quantity: </div>
                <div className='flex items-center'>
                  <div className='mr-4'>
                    {quantity > 1 && <i onClick={()=>decQuantity(cart, onCart, dispatch)} className="fa-light fa-circle-minus text-2xl hover:cursor-pointer"></i>}
                    <span className='text-2xl mx-2'>{quantity}</span>
                    {(quantity < 5 || quantity < parseInt(currentSize.quantity)) && <i onClick={()=>incQuantity(cart, onCart, dispatch)} className="fa-light fa-circle-plus text-2xl hover:cursor-pointer"></i>}
                  </div>
                  <span>In Stock: {currentSize.quantity}</span>
                </div>
              </div>}
              {/* Action area */}
              <div className='mt-4'>
                <div className='grid grid-cols-2 gap-2 sm:block'>
                  <button onClick={() => dispatch(addToCart({...data, quantity}))} className='w-full sm:w-auto col-span-1 hover:shadow-md text-white px-4 py-2 sm:px-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 mr-4 sm:p-4 font-semibold rounded-md'>Buy Now</button>
                  { !onCart
                    ?<button onClick={handleAddToCart} className='w-full sm:w-auto col-span-1 hover:shadow-md text-white sm:px-16 bg-gradient-to-r from-sky-500 to-indigo-500 mr-4 px-4 py-2 sm:p-4 font-semibold rounded-md focus:shadow-md transition-all duration-200'>Add to Cart</button>
                    :<button onClick={() => {removeItem(cart, onCart, dispatch); setQuentity(1)}} className='w-full sm:w-auto col-span-1 hover:shadow-md text-white px-4 py-2 sm:px-16 bg-gradient-to-r from-sky-500 to-indigo-500 mr-4 sm:p-4 font-semibold rounded-md focus:shadow-md transition-all duration-200'>Remove</button>
                  }
                  <button className='col-span-2 border py-2 px-4 sm:p-4 rounded-md'>
                    <i className="fa-light fa-heart mr-1"></i>
                    15.8K
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Varients by images */}
        <div className='mt-4 flex mx-2 sm:mx-0'>
          {
            data?.variant_stock_price.map((varient, index) => (
              <div  onClick={() => setCurrentVariant(varient)} key={index} className='h-20 w-20 border p-1 rounded mr-4 hover:cursor-pointer'>
                <Image alt="image"  
                  src={varient?.images[0]?.url}
                  width="100%" 
                  height="100%" 
                  layout="responsive" 
                  objectFit="contain"
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
