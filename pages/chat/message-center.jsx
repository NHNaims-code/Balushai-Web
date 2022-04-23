import Head from 'next/head'
import React from 'react'
import Message from '../../components/chat/Message'
import User from '../../components/chat/user'

export default function messageCenter() {
  return (
    <div className='container mx-auto py-8'>
       <Head>
          <title>Balushai Ecommerce - Chat</title>
          <meta name="description" content="Generated by create next app" />
          <link  rel="icon" href="/images/logo.jpg" />
        </Head>
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-4 bg-white py-4 rounded-md'>
          <div className='text-center border-b-4 border-[#D23E41] pb-4'>
            <h4 className='text-2xl'>Chat List</h4>
          </div>
          <User/>
          <User/>
          <User/>
          <User/>
        </div>
        <div className='col-span-8'>
          <Message/>
        </div>
      </div>
    </div>
  )
}
