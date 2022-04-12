import React from 'react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className='bg-white py-8 mb-8'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-10 gap-4'>
          <div className='bg-teal-500 col-span-4'>
            <div>
              <Image alt="image" 
                src='/product-images/product1.webp'
                width="100%" 
                height="100%" 
                layout="responsive" 
                objectFit="cover"
              />
            </div>
          </div>
          <div className='col-span-5'>
            <div>
              <h1>274pcs Clear Stickers For Spice Jars Label Words In Black And White Food Bottle Container Gadget Seasoning Marks Sticker 8 Sheet</h1>
              <div className='flex mt-4 text-sm'>
                <div className='mr-2'>
                  <i className="fa-solid fa-star text-amber-500 mr-1"></i>
                  <i className="fa-solid fa-star text-amber-500 mr-1"></i>
                  <i className="fa-solid fa-star text-amber-500 mr-1"></i>
                  <i className="fa-solid fa-star text-amber-500 mr-1"></i>
                  <i className="fa-solid fa-star text-amber-500 mr-1"></i>
                </div>
                <div className='mr-3'>4.8</div>
                <div className='mr-3'>170 Reviews</div>
                <div>915 orders</div>
              </div>
              <div className='border-y my-8 py-4'>
                <div className='flex items-center'>
                  <span className='text-4xl font-semibold mr-4'>US $15</span>
                  <span className='line-through'>US $20</span>
                  <span className='ml-4 bg-red-200 text-red-600 px-2'>-34%</span>
                </div>
              </div>
              {/* 3 Images */}
              <div className='mb-8'>
                <h4 className='mb-2'>Images: </h4>
                <div className='flex'>
                  <div className='h-16 w-16 border p-2 rounded mr-4 hover:cursor-pointer'>
                    <Image alt="image"  
                      src='/product-images/product2.webp'
                      width="100%" 
                      height="100%" 
                      layout="responsive" 
                      objectFit="cover"
                    />
                  </div>
                  <div className='h-16 w-16 border p-2 rounded mr-4 hover:cursor-pointer'>
                    <Image alt="image"  
                      src='/product-images/product2.webp'
                      width="100%" 
                      height="100%" 
                      layout="responsive" 
                      objectFit="cover"
                    />
                  </div>
                  <div className='h-16 w-16 border p-2 rounded mr-4 hover:cursor-pointer'>
                    <Image alt="image"  
                      src='/product-images/product2.webp'
                      width="100%" 
                      height="100%" 
                      layout="responsive" 
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
              {/* Add Quantity */}
              <div>
                <div className='mb-2'>Quantity: </div>
                <div>
                  <i className="fa-light fa-circle-plus text-2xl hover:cursor-pointer"></i>
                  <span className='text-2xl mx-2'>1</span>
                  <i className="fa-light fa-circle-minus text-2xl hover:cursor-pointer"></i>
                </div>
              </div>
              {/* Action area */}
              <div className='mt-20'>
                <div>
                  <button className='text-white px-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 mr-4 p-4 font-semibold rounded-md'>Buy Now</button>
                  <button className='text-white px-16 bg-gradient-to-r from-sky-500 to-indigo-500 mr-4 p-4 font-semibold rounded-md'>Add to Cart</button>
                  <button className='border p-4 rounded-md'>
                    <i className="fa-light fa-heart mr-1"></i>
                    15.8K
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
