import Head from 'next/head'
import Footer from '../layout/footer/Footer'
import Header from '../layout/header/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Header/>
        <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
