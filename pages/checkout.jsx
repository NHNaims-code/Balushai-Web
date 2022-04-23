import React, { useState } from 'react'
import InputField from '../components/common/InputField'

export default function checkout() {
  const BILLING_ADDRESS = 'BILLING_ADDRESS'
  const SHIPPING_ADDRESS = 'SHIPPING_ADDRESS'

  const [currentState, setCurrentState] = useState(BILLING_ADDRESS)
  const [billingAddress, setBillingAddress] = useState({})
  const [shippingAddress, setShippingAddress] = useState({})

  const handleChange = (e) => {
    if(currentState === BILLING_ADDRESS){
      const newBillingAddress = billingAddress
      newBillingAddress[e.target.name] = e.target.value
      setBillingAddress(newBillingAddress)
    }
    if(currentState === SHIPPING_ADDRESS){
      const newShippingAddress = shippingAddress
      newShippingAddress[e.target.name] = e.target.value
      setBillingAddress(newShippingAddress)
    }
  }

  const handleBillingAddressSubmit = (e) => {
    e.preventDefault()
    setCurrentState(SHIPPING_ADDRESS)
  }

  const handleShippingAddressSubmit = (e) => {
    e.preventDefault()
    setCurrentState(SHIPPING_ADDRESS)
  }

  return (
    <div className='container mx-auto'>
      <div className='mt-8 mb-12 flex justify-center'>
        <div className='w-3/5 bg-white p-4 rounded-md shadow-sm'>
          {
            (currentState === SHIPPING_ADDRESS || currentState === BILLING_ADDRESS)
            &&
            <div>
            <h4 className='text-center border-b pb-2 text-xl'>
              {
                currentState
              }
            </h4>
            <form onSubmit={currentState==BILLING_ADDRESS?handleBillingAddressSubmit:handleShippingAddressSubmit}>
              <InputField name='full_name' label="Full Name" type="text" onChange={handleChange} required={true}/>
              <InputField name='phone' label="Phone" type="number" onChange={handleChange} required={true}/>
              <InputField name='region' label="Regione" type="text" onChange={handleChange} required={true}/>
              <InputField name='city' label="City" type="text" onChange={handleChange} required={true}/>
              <InputField name='area' label="Area" type="text" onChange={handleChange} required={true}/>
              <InputField name='address' label="Address" type="text" onChange={handleChange} required={true}/>
              <button type='submit' className='bg-[#D23E41] p-2 hover:shadow-md text-white w-full mt-4 rounded-lg'>Next</button>
            </form>
          </div>
          }
        </div>
      </div>
    </div>
  )
}
