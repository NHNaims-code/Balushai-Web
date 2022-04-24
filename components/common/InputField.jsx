import React from 'react'

export default function InputField({label, value, name, placeholder, required=false, onChange, type="text"}) {
  return (
    <div className='grid grid-cols-6 my-2'>
      <label htmlFor={name} className='col-span-1 flex items-center justify-end mr-4'>
        {label} :
      </label>
      <div className='col-span-5'>
        <input id={name} name={name} onChange={onChange} defaultValue={value} placeholder={placeholder} required={required} className='border w-full p-2' type={type}/>
      </div>
    </div>
  )
}
