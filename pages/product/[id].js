import React from 'react'
import TopBar from '../../components/product/TopBar'
import HeroSection from '../../components/product/HeroSection'
import Description from '../../components/product/Description'
import Reviews from '../../components/product/Reviews'

export default function productDetail() {

  return (
    <div>
      <TopBar/>
      <HeroSection/>
      <Description/>
      <Reviews/>
    </div>
  )
}
