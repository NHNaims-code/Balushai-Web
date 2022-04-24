import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { getCustomerCart, updateCartOnDB } from '../adapters/cart'
import { updateCart } from '../redux/cart/cartActions'
import { setUserData } from '../redux'
import { getUserData } from '../adapters/user'

export default function StartingComponent() {
  const dispatch = useDispatch()

  const initialFunc = async()=>{
    console.log("starting component working!")
    if(Cookies.get('token')){
      const userResponse = await getUserData()
      const cartResponse = await getCustomerCart();
      dispatch(setUserData(userResponse?.data))
      dispatch(updateCart(cartResponse?.data))
    }
  }


  useEffect(()=> {
    initialFunc()
  }, [])

  return (
    <div>StartingComponent</div>
  )
}
