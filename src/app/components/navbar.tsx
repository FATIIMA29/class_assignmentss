import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function navbar() {
  return (
    <div className=' sticky-top-0 bg-[#044e83] bg-main print-hidden'>
        <div className='m-auto flex h-16 w-[95%] items-center justify-between md:h-20 capitalize '>
            <Link href="#">
                 <Image src="/logo.png" alt="logo" width='90' height='113' className='mt-14 w-[70px] sm:w-[80px] md:w-[90px]'  />
            </Link>
        <h1 className='text_shadow hidden text-[15px] font-extrabold text-[#b9d8f3] lg:block xl-lg:text-xl xl:text-2xl '>
            tuition free education program on latest technologies 
            </h1>
        <h1 className='text_shadow text-[1.125rem] font-extrabold text-[#b9d8f3] lg:hidden '>
            tuition free program  </h1>
        <div className='hidden items-center gap-5 text-[#FAF9f6] sm:flex lg:gap-10'>  
      <Link href="/"  > <div>home</div>    </Link>            
      <Link href="/apply" > <div>apply</div></Link>             
      <Link href="/jobs" > <div>jobs</div></Link>      
      <Link href="/results"> <div>results</div></Link>    
      <Link href="/course" > <div>courses</div> </Link>   
      </div>  
      <div className='block  sm:hidden'>
        <svg stroke='currentColor' fill='none' strokeWidth='2' viewBox='0 0 24 24' strokeLinecap='round' strokeLinejoin='round' className='text-white  w-6 h-18'>
     <line x1="3" y1="12" x2="21" y2="12"> </line>
     <line x1="3" y1="6" x2="21" y2="6"></line>
     <line x1="3" y1="18" x2="21" y2="18"></line>
     
      
      
     </svg>
     </div>
      
      </div>
    </div>
  )
}
