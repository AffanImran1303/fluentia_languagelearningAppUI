import Link from 'next/link'
import React from 'react'
import Button from './Button'

const HeroSection = () => {
  return (
    <div className="h-[32rem] w-full md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="relative mt-24 grid grid-rows-3 gap-4 z-10 w-full text-center">
        <h1 className='text-3xl poppins-extrabold md:text-5xl'>Your Journey to Language Fluency Starts Here.</h1>
        <p className='text-sm mx-12 md:text-xl mt-4'>fluentia simplifies language learning by its engaging courses, and 24/7 access. Start today and see the difference</p>
        <Link href="/" className="mt-2">
        <Button type={'button'} title="Explore Courses" icon="/images/icons/book-icon.png"></Button>
        </Link>
      </div>


    </div>
  )
}

export default HeroSection