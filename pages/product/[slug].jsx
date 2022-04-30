import React from 'react'
import { AllProducts, SingleProduct } from '../../adapters/product'
import TopBar from '../../components/product/TopBar'
import HeroSection from '../../components/product/HeroSection'
import Description from '../../components/product/Description'
import Reviews from '../../components/product/Reviews'

export default function productDetail({product}) {
 
  return (
    <div className='mt-[48px]'>
     {
       product
       && <>
          <TopBar data={product}/>
          <HeroSection data={product}/>
          <Description data={product}/>
          <Reviews data={product}/>
          </>
     }
    </div>
  )
}

export async function getStaticPaths(){
  const response = await AllProducts();
  const products = response.data
  const paths = products.map(product => {
    return{
      params: {
        slug: product.slug
      }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
  const { params } = context
  console.log("params: ", params)
  const response = await SingleProduct(`product/${params.slug}`)
  console.log("product data: ",response.data)
    return {
      props: {
        product: response.data
      }, // will be passed to the page component as props
      revalidate: 10,
    }
  }

  
