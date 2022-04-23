import React from 'react'
import htmlParse from 'html-react-parser'

export default function Description({data}) {
  return (
    <div>
      <div className='container mx-auto bg-white my-8  rounded-lg shadow-md'>
        <div className='text-center text-xl border-b py-4'>
          Short Description
        </div>
        <div className='p-4'>
          {data?.short_description}
        </div>
      </div>
      <div className='container mx-auto bg-white my-8  rounded-lg shadow-md'>
        <div className='text-center text-xl border-b py-4'>
          Long Description
        </div>
        <div className='p-4'>
          {htmlParse(data?.long_description)}
        </div>
      </div>
      {/* Table */}
      <div className='container mx-auto bg-white my-8  p-4 rounded-lg shadow-md'>
        <div className='grid grid-cols-6 border-x border-t'>
          <div className='col-span-1 border-r p-2'>
            Dangerous Goods
          </div>
          <div className='col-span-5 pl-4 p-2'>
            None
          </div>
        </div>
        <div className='grid grid-cols-6 border-x border-t'>
          <div className='col-span-1 border-r p-2'>
            Package Height
          </div>
          <div className='col-span-5 pl-4 p-2'>
           {data?.package_dimensions?.height}
          </div>
        </div>
        <div className='grid grid-cols-6 border-x border-t'>
          <div className='col-span-1 border-r p-2'>
            Package Width
          </div>
          <div className='col-span-5 pl-4 p-2'>
           {data?.package_dimensions?.width}
          </div>
        </div>
        <div className='grid grid-cols-6 border-x border-t'>
          <div className='col-span-1 border-r p-2'>
            Package Lenght
          </div>
          <div className='col-span-5 pl-4 p-2'>
           {data?.package_dimensions?.length}
          </div>
        </div>
        <div className='grid grid-cols-6 border-x border-t'>
          <div className='col-span-1 border-r p-2'>
            Package Weight
          </div>
          <div className='col-span-5 pl-4 p-2'>
            1
          </div>
        </div>
        <div className='grid grid-cols-6 border-x border-t'>
          <div className='col-span-1 border-r p-2'>
            Warranty
          </div>
          <div className='col-span-5 pl-4 p-2'>
            {data?.warranty_type}
          </div>
        </div>
        <div className='grid grid-cols-6 border-x border-y '>
          <div className='col-span-1 border-r p-2'>
            What is in the box
          </div>
          <div className='col-span-5 pl-4 p-2'>
            {data?.whats_in_the_box}
          </div>
        </div>
      </div>
    </div>
  )
}
