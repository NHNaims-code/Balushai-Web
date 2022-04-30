import jsCookie from 'js-cookie'
import { NextResponse } from 'next/server'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getUserData } from '../adapters/user'
import { baseUrl } from '../constants'
import { setUserData } from '../redux'

export default async function middleware(req) {
  
  const token = jsCookie.get('token')
  const url = req.nextUrl.pathname
  const cookie =  req.cookies["token"];
  if(cookie){
    fetch(`${baseUrl}/customer/account-info`, {
      headers: {
        'Content-type':'application/json',
        Authorization: `${cookie}`
      }
    }).then(res => res.json())
    .then(result => {
      console.log("result : ", result)
      // dispatch(setUserData(result))
    })
    console.log("url: ", url)
    console.log("token: ", token)
    console.log("cookie: ", cookie)
  }

  // if(url.includes("/cart")){
  //   if(token === undefined){
  //     return NextResponse.redirect('/auth/sign-in')
  //   }

  //   try {
  //     const response = await getUserData()
  //     return NextResponse.next()
  //   } catch (error) {
  //     return NextResponse.redirect('/auth/sign-in')
  //   }
  // }
}
