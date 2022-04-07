import Head from 'next/head'
import Image from 'next/image'
import TopOffer from '../components/home/TopOffer'
import TopSlider from '../components/home/TopSlider'
import Header from '../layout/header/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className='container mx-auto'>
        <div className='grid grid-cols-5 gap-4 h-8'>

          {/* Category sidebar */}
          <div className='bg-white p-4 my-4 relative border-b-2'>
            <div className='font-semibold border-b-2 pb-4 mb-2'>
              <i class="fa-regular fa-list mr-4"></i>Category
            </div>
            <div>
              <ul>
                <li className='py-3 border-b group hover:cursor-pointer hover:text-[#D23E41]'>
                  <><i class="mr-2 fa-light fa-person-dress-simple"></i> Women's Fashion</>
                  <div className='transition-all duration-200 hidden group-hover:absolute shadow-lg left-[100%] z-40 top-0 w-[780px] h-[400px] bg-white group-hover:flex justify-center items-center flex-col text-5xl rounded-sm'>
                    <div className='text-sm'> Women's Fashion</div>
                    Details Here
                  </div>
                </li>
                <li className='py-3 border-b group hover:cursor-pointer hover:text-[#D23E41]'>
                  <><i class="mr-2 fa-light fa-person-simple"></i> Men's Fashion</>
                  <div className='transition-all duration-200 hidden group-hover:absolute shadow-lg left-[100%] z-40 top-0 w-[780px] h-[400px] bg-white group-hover:flex justify-center items-center flex-col text-5xl rounded-sm'>
                    <div className='text-sm'> Men's Fashion</div>
                    Details Here
                  </div>
                </li>
                <li className='py-3 border-b group hover:cursor-pointer hover:text-[#D23E41]'>
                  <><i class="mr-2 fa-light fa-mobile"></i> Phones & Telecommunications</>
                  <div className='transition-all duration-200 hidden group-hover:absolute shadow-lg left-[100%] z-40 top-0 w-[780px] h-[400px] bg-white group-hover:flex justify-center items-center flex-col text-5xl rounded-sm'>
                    <div className='text-sm'> Phones & Telecommunications</div>
                    Details Here
                  </div>
                </li>
                <li className='py-3 border-b group hover:cursor-pointer hover:text-[#D23E41]'>
                  <><i class="mr-2 fa-light fa-laptop"></i> Computer, Office & Security</>
                  <div className='transition-all duration-200 hidden group-hover:absolute shadow-lg left-[100%] z-40 top-0 w-[780px] h-[400px] bg-white group-hover:flex justify-center items-center flex-col text-5xl rounded-sm'>
                    <div className='text-sm'> Computer, Office & Security</div>
                    Details Here
                  </div>
                </li>
                <li className='py-3 border-b group hover:cursor-pointer hover:text-[#D23E41]'>
                  <><i class="mr-2 fa-light fa-camera"></i> Consumer Electronics</>
                  <div className='transition-all duration-200 hidden group-hover:absolute shadow-lg left-[100%] z-40 top-0 w-[780px] h-[400px] bg-white group-hover:flex justify-center items-center flex-col text-5xl rounded-sm'>
                    <div className='text-sm'> Consumer Electronics</div>
                    Details Here
                  </div>
                </li>
                <li className='py-3 border-b group hover:cursor-pointer hover:text-[#D23E41]'>
                  <><i class="mr-2 fa-light fa-gem"></i> Jewelry & Watches</>
                  <div className='transition-all duration-200 hidden group-hover:absolute shadow-lg left-[100%] z-40 top-0 w-[780px] h-[400px] bg-white group-hover:flex justify-center items-center flex-col text-5xl rounded-sm'>
                    <div className='text-sm'> Jewelry & Watches</div>
                    Details Here
                  </div>
                </li>
                <li className='py-3 border-b group hover:cursor-pointer hover:text-[#D23E41]'>
                  <><i class="mr-2 fa-light fa-dog-leashed"></i> Home, Pet & Application</>
                  <div className='transition-all duration-200 hidden group-hover:absolute shadow-lg left-[100%] z-40 top-0 w-[780px] h-[400px] bg-white group-hover:flex justify-center items-center flex-col text-5xl rounded-sm'>
                    <div className='text-sm'> Home, Pet & Application</div>
                    Details Here
                  </div>
                </li>
                <li className='py-3 border-b group hover:cursor-pointer hover:text-[#D23E41]'>
                  <><i class="mr-2 fa-light fa-bag-shopping"></i> Bags & Shoes</>
                  <div className='transition-all duration-200 hidden group-hover:absolute shadow-lg left-[100%] z-40 top-0 w-[780px] h-[400px] bg-white group-hover:flex justify-center items-center flex-col text-5xl rounded-sm'>
                    <div className='text-sm'> Bags & Shoes</div>
                    Details Here
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Center contents */}
          <div className=' col-span-3 mt-4 rounded-lg mb-8'>
            <div>
              <TopSlider/>
              <TopOffer/>
            </div>
          </div>
          <div className='bg-white mt-4 flex flex-col'>
            <div className='flex items-center flex-col mt-8'>
              <i class="fa-solid fa-circle-user text-5xl"></i>
              <p className='font-semibold mt-2'>Welcome to Balushai</p>
            </div>
            <div className='p-4 flex justify-around'>
              <button className='bg-[#D23E41] text-white h-12 w-24 rounded-2xl'>Join</button>
              <button className='bg-[#D23E41] text-white px-4 w-24 rounded-2xl'>Sign in</button>
            </div>
            <div className='h-full bg-gray-200 m-4 flex justify-center items-center'>
              <h1 className=''>Offer Here</h1>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}
