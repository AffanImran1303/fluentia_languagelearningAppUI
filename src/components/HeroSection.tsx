import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="border-2 h-[25rem] w-full md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className='text-xl md:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, reiciendis!</h1>
        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, doloremque obcaecati laudantium assumenda fugiat facilis.</p>
        <div className="mt-4">
        <Link href="/" className="">Explore Courses</Link>
        </div>
      </div>


    </div>
  )
}

export default HeroSection