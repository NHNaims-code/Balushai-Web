import React from 'react'

export default function SelectOption({options=[], label, value, name, placeholder, required=false, onChange, type="text"}) {
  return (
    <div className='grid grid-cols-6 my-2'>
      <label htmlFor={name} className='col-span-1 flex items-center justify-end mr-4'>
        {label} :
      </label>
      <div className='col-span-5'>
      <select required className='border w-full p-2'>
        <option>Select</option>
        {
          options.map((option, index) => (<option className='hover:bg-[#D23E41]' key={index} value={option?.value}>{option?.key}</option>))
        }
      </select>
      </div>
    </div>
  )
}
