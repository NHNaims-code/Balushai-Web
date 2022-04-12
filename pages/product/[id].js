import React from 'react'
import { useRouter } from 'next/router'
import TopBar from '../../components/product/TopBar'
import HeroSection from '../../components/product/HeroSection'
import Description from '../../components/product/Description'
import Reviews from '../../components/product/Reviews'

export default function productDetail() {

  const router = useRouter()
  const productId = router.query.id
  console.log(productId)

  return (
    <div>
      <TopBar/>
      <HeroSection/>
      <Description/>
      <Reviews/>
    </div>
  )
}
