import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createAddress, updateAddress } from '../adapters/address'
import { createOrder } from '../adapters/order'
import InputField from '../components/common/InputField'
import SelectOption from '../components/common/SelectOption'
import { updateCart } from '../redux/cart/cartActions'

export default function Checkout() {
  const router = useRouter()
  const dispatch = useDispatch()

  const BILLING_ADDRESS = 'BILLING_ADDRESS'
  const SHIPPING_ADDRESS = 'SHIPPING_ADDRESS'
  const PAYMENT_INFO = 'PAYMENT_INFO'
  const cart_products = useSelector(state => state.cart?.data?.items)
  const userData = useSelector(state => state.user?.data)
  const [currentState, setCurrentState] = useState(BILLING_ADDRESS)
  const [billingAddress, setBillingAddress] = useState({})
  const [shippingAddress, setShippingAddress] = useState({})
  const [billingAddressId, setBillingAddressId] = useState(null)
  const [shippingAddressId, setShippingAddressId] = useState(null)
  const [paymentInfo, setPaymentInfo] = useState({amount: 0, method: 'COD'})
  const [totalAmount, setTotalAmount] = useState(0)

  const paymentMethods = [
    {key: 'COD', value: 'COD'},
    {key: 'bKash', value: 'bKash'},
  ]

  useEffect(() => {
    if(!userData){
      router.push("/auth/sign-in")
    }
  },[])

  useEffect(() => {
    let temp_amount = 0;
    cart_products?.map(product => {
      temp_amount += product?.special_price * product?.quantity
    })
    setTotalAmount(temp_amount)
  }, [cart_products])

  const handleChange = (e) => {
    if(currentState === BILLING_ADDRESS){
      const newBillingAddress = billingAddress
      newBillingAddress[e.target.name] = e.target.value
      setBillingAddress(newBillingAddress)
    }
    if(currentState === SHIPPING_ADDRESS){
      const newShippingAddress = shippingAddress
      newShippingAddress[e.target.name] = e.target.value
      setShippingAddress(newShippingAddress)
    }
    if(currentState === PAYMENT_INFO){
      const newPaymentInfo = paymentInfo
      newPaymentInfo[e.target.name] = e.target.value
      setPaymentInfo(newPaymentInfo)
    }
  }

  const handleBillingAddressSubmit = async(e) => {
    e.preventDefault()
    try {
      console.log("billing address: ", billingAddress)
      if(billingAddressId){
        const response = await updateAddress(billingAddressId, billingAddress)
        if(response?.data){
          console.log("response update: ", response.data)
          setCurrentState(SHIPPING_ADDRESS)
        }
      }else{
        const response = await createAddress(billingAddress)
        if(response?.data){
          console.log("response: ", response.data)
          setBillingAddressId(response.data._id)
          setCurrentState(SHIPPING_ADDRESS)
        }
      }
    } catch (error) {
      // alert("Error: "+error?.message?.err)
      console.log(error)
    }
  }

  const handleShippingAddressSubmit = async(e) => {
    e.preventDefault()
    try {
      if(shippingAddressId){
        const response = await updateAddress(shippingAddressId, shippingAddress)
        if(response?.data){
          console.log("response: ", response.data)
          setCurrentState(PAYMENT_INFO)
        }
      }else{
        const response = await createAddress(shippingAddress)
        if(response?.data){
          console.log("response: ", response.data)
          setShippingAddressId(response.data._id)
          setCurrentState(PAYMENT_INFO)
        }
      }
    } catch (error) {
      alert("Error: "+error?.messages?.err)
      console.log(error.Error)
    }
  }

  const handleOrderSubmit = async(e) => {
    e.preventDefault()
    const newCartProducts = cart_products?.map(product => {
      return {
        quantity: product?.quantity,
        vendor_id: product?.vendor_id,
        product_id: product?.product_id?._id,
        price: product?.special_price,
        name: product?.product_id?.product_name,
        color: product?.color_family,
        image: product?.image,
        size: product?.size,
        shipment_fee: 0 
      }
     })
    const order = {
      products: newCartProducts,
      payment_information: paymentInfo,
      billing_address: billingAddressId,
      shipping_address: shippingAddressId
    }
    console.log(order)
    try {
      const response = await createOrder(order)
      if(response?.data){
        dispatch(updateCart(null))
        router.push('/order')
      }
    } catch (error) {
      alert('something went worng. try again!')
    }
    console.log("place order: ", order)
  }

  if(!userData){
    return<div className='container mx-auto flex justify-center items-center p-32 bg-white'>Auth Checking...</div>
  }else{
    return (
      <div className='container mx-auto mt-[58px] sm:mt-0 px-2 sm:px-0'>
        <div>
          <h4 className='text-center mt-8 text-2xl border-b pb-4 font-bold'>Checkout</h4>
        </div>
        <div className='mt-4 mb-12 flex justify-center'>
          <div className='sm:w-3/5 bg-white rounded-md overflow-hidden shadow-sm'>
            <div className='grid grid-cols-3 bg-gray-400 text-white mb-4'>
              <div className={`col-span-1 border-b border-r text-center py-2 text-sm sm:text-lg ${currentState == BILLING_ADDRESS && 'bg-[#D23E41] text-center border-b p-2 text-white'}`}>BILLING ADDRESS</div>
              <div className={`col-span-1 border-b border-r text-center py-2 text-sm sm:text-lg ${currentState == SHIPPING_ADDRESS && 'bg-[#D23E41] text-center border-b p-2 text-white'}`}>SHIPPING ADDRESS</div>
              <div className={`col-span-1 border-b border-r text-center py-2 text-sm sm:text-lg ${currentState == PAYMENT_INFO && 'bg-[#D23E41] text-center border-b p-2 text-white'}`}>PAYMENT INFORMATION</div>
            </div>
            {
              currentState === BILLING_ADDRESS
              &&
              <form className=' p-4' onSubmit={handleBillingAddressSubmit}>
                <InputField value={billingAddress?.full_name} name='full_name' label="Full Name" type="text" onChange={handleChange} required={true}/>
                <InputField value={billingAddress?.phone} name='phone' label="Phone" type="tel" onChange={handleChange} required={true}/>
                <InputField value={billingAddress?.region} name='region' label="Regione" type="text" onChange={handleChange} required={true}/>
                <InputField value={billingAddress?.city} name='city' label="City" type="text" onChange={handleChange} required={true}/>
                <InputField value={billingAddress?.area} name='area' label="Area" type="text" onChange={handleChange} required={true}/>
                <InputField value={billingAddress?.address} name='address' label="Address" type="text" onChange={handleChange} required={true}/>
                <div className='flex justify-end'>
                  <button type='submit' className='bg-[#D23E41] py-2 px-4 hover:shadow-md text-white mt-4 rounded-lg'>Next</button>
                </div>
              </form>

            }
            {
              currentState === SHIPPING_ADDRESS
              &&
              <form className='p-4' onSubmit={handleShippingAddressSubmit}>
                <InputField value={shippingAddress?.full_name} name='full_name' label="Full Name" type="text" onChange={handleChange} required={true}/>
                <InputField value={shippingAddress?.phone} name='phone' label="Phone" type="tel" onChange={handleChange} required={true}/>
                <InputField value={shippingAddress?.region} name='region' label="Regione" type="text" onChange={handleChange} required={true}/>
                <InputField value={shippingAddress?.city} name='city' label="City" type="text" onChange={handleChange} required={true}/>
                <InputField value={shippingAddress?.area} name='area' label="Area" type="text" onChange={handleChange} required={true}/>
                <InputField value={shippingAddress?.address} name='address' label="Address" type="text" onChange={handleChange} required={true}/>
                <div className='flex justify-end'>
                  <button onClick={()=> {setCurrentState(BILLING_ADDRESS)}} className='bg-gray-400 py-2 px-4 hover:shadow-md text-white mt-4 rounded-lg'>Previous</button>
                  <button type='submit' className='bg-[#D23E41] py-2 px-4 ml-4 hover:shadow-md text-white mt-4 rounded-lg'>Next</button>
                </div>
              </form>
            }
            {
              currentState === PAYMENT_INFO
              &&
              <form className='p-4' onSubmit={handleOrderSubmit}>
                <InputField value={totalAmount} name='amount' label="Amount" type="number" onChange={handleChange} required={true}/>
                <SelectOption required={true} options={paymentMethods} label='Method' name='method' id='method' onClick={handleChange}/>
              
                <div className='flex justify-end'>
                  <button onClick={()=> {setCurrentState(SHIPPING_ADDRESS)}} className='bg-gray-400 py-2 px-4 hover:shadow-md text-white mt-4 rounded-lg'>Previous</button>
                  <button type='submit' className='bg-[#D23E41] py-2 px-4 ml-4 hover:shadow-md text-white mt-4 rounded-lg'>CONFIRM</button>
                </div>
              </form>
            }
          </div>
        </div>
      </div>
    )
  }
}
