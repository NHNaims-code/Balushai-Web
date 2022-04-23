import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { getCustomerCart, updateCartOnDB } from '../adapters/cart'
import { updateCart } from '../redux/cart/cartActions'
import { setUserData } from '../redux'
import { getUserData } from '../adapters/user'

export default function StartingComponent() {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.data)

  const initialFunc = async()=>{
    console.log("starting component working!")
    if(Cookies.get('token')){
      const userResponse = await getUserData()
      dispatch(setUserData(userResponse?.data))
      const cartResponse = await getCustomerCart();
      dispatch(updateCart(cartResponse?.data))
    }
  }

  const handleUpdateCartOnDB = async () => {
    const response = await updateCartOnDB(cart._id, cart)
    // dispatch(updateCart(response?.data))
    console.log("cart db updated!", response.data)
  }


 useEffect(()=> {
  initialFunc()
 }, [])

 useEffect(()=> {
   console.log("updated cart: ", cart)
  // handleUpdateCartOnDB()
 }, [cart])


  
  return (
    <div>StartingComponent</div>
  )
}
