import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { createAddress, updateAddress } from '../adapters/address'
import InputField from '../components/common/InputField'
import SelectOption from '../components/common/SelectOption'

export default function checkout() {
  const BILLING_ADDRESS = 'BILLING_ADDRESS'
  const SHIPPING_ADDRESS = 'SHIPPING_ADDRESS'
  const PAYMENT_INFO = 'PAYMENT_INFO'
  const cart_products = useSelector(state => state.cart?.data?.items)
  console.log("cart Products : ", cart_products)
  const [currentState, setCurrentState] = useState(BILLING_ADDRESS)
  const [billingAddress, setBillingAddress] = useState({})
  const [shippingAddress, setShippingAddress] = useState({})
  const [billingAddressId, setBillingAddressId] = useState(null)
  const [shippingAddressId, setShippingAddressId] = useState(null)
  const [paymentInfo, setPaymentInfo] = useState({amount: 0, method: 'COD'})

  const paymentMethods = [
    {key: 'COD', value: 'COD'},
    {key: 'bKash', value: 'bKash'},
  ]

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

  const handleOrderSubmit = (e) => {
    e.preventDefault()
    const order = {
      products: cart_products,
      payment_information: paymentInfo,
      billingAddress: billingAddressId,
      shippingAddress: shippingAddressId
    }
    alert("Order successfull!")
    console.log("place order: ", order)
  }

  return (
    <div className='container mx-auto'>
      <div className='mt-8 mb-12 flex justify-center'>
        <div className='w-3/5 bg-white p-4 rounded-md shadow-sm'>
          {
            currentState === BILLING_ADDRESS
            &&
            <div>
            <h4 className='text-center border-b pb-2 text-xl'>
              BILLING ADDRESS
            </h4>
            <form onSubmit={handleBillingAddressSubmit}>
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
          </div>
          }
          {
            currentState === SHIPPING_ADDRESS
            &&
            <div>
            <h4 className='text-center border-b pb-2 text-xl'>
              SHIPPING ADDRESS
            </h4>
            <form onSubmit={handleShippingAddressSubmit}>
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
          </div>
          }
          {
            currentState === PAYMENT_INFO
            &&
            <div>
            <h4 className='text-center border-b pb-2 text-xl'>
              PAYMENT INFORMATION
            </h4>
            <form onSubmit={handleOrderSubmit}>
              <InputField value={paymentInfo?.amount} name='amount' label="Amount" type="number" onChange={handleChange} required={true}/>
              <SelectOption required={true} options={paymentMethods} label='Method' name='method' id='method' onClick={handleChange}/>
             
              <div className='flex justify-end'>
                <button onClick={()=> {setCurrentState(SHIPPING_ADDRESS)}} className='bg-gray-400 py-2 px-4 hover:shadow-md text-white mt-4 rounded-lg'>Previous</button>
                <button type='submit' className='bg-[#D23E41] py-2 px-4 ml-4 hover:shadow-md text-white mt-4 rounded-lg'>CONFIRM</button>
              </div>
            </form>
          </div>
          }
        </div>
      </div>
    </div>
  )
}
