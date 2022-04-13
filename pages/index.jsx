import Head from 'next/head'
import HeroSection from '../components/home/HeroSection'
import Banner from '../components/home/mobile/Banner'
import HeroCategory from '../components/home/mobile/HeroCategory'
import ProductCard from '../components/home/ProductCard'
import ProductSection from '../components/home/ProductSection'
import SuperDealsSection from '../components/home/SuperDealsSection'
import Footer from '../layout/footer/Footer'
import Header from '../layout/header/Header'
import MobileFooter from '../layout/mobile/footer/MobileFooter'
import MobileHeader from '../layout/mobile/header/MobileHeader'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link  rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className='hidden sm:block'>
 
        {/* Hero Section */}
        <HeroSection/>
        {/* Super Deals Section */}
        <SuperDealsSection/>
        {/* Product Section */}
        <ProductSection/>
      </div>
      <div className='sm:hidden'>
        <MobileHeader/>
        <HeroCategory/>
        <Banner/>
        <MobileFooter/>
      </div>

      
    </div>
  )
}
