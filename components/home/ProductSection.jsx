import React from 'react'
import ProductCard from './ProductCard'

export default function ProductSection() {
  return (
    <div className='container mx-auto mb-8 mt-8'>
      <div className='text-center p-4 border-b-2 mb-4'>
        <h1 className='text-2xl'>Explore what you love</h1>
      </div>
      <div className='grid sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-x-4 gap-y-6'>
        <ProductCard imgSrc="/product-images/product5.webp"/>
        <ProductCard imgSrc="/product-images/product6.webp"/>
        <ProductCard imgSrc="/product-images/product7.webp"/>
        <ProductCard imgSrc="/product-images/product4.webp"/>
        <ProductCard imgSrc="/product-images/product3.webp"/>
        <ProductCard imgSrc="/product-images/product5.webp"/>
        <ProductCard imgSrc="/product-images/product6.webp"/>
        <ProductCard imgSrc="/product-images/product2.webp"/>
        <ProductCard imgSrc="/product-images/product4.webp"/>
        <ProductCard imgSrc="/product-images/product7.webp"/>
        <ProductCard imgSrc="/product-images/product5.webp"/>
        <ProductCard imgSrc="/product-images/product1.webp"/>
      </div>
    </div>
  )
}
