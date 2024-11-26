import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { TestimonialsCards } from './Cards'
// import { TestimonialsCards } from './Cards'

const Testimonials = () => {
  return (
    <>
    <div className="mt-12 flex justify-center text-center md:h-max ">
        <h1 className="text-3xl px-4 md:text-5xl poppins-bold">Hear from Our Global Learners</h1>   
    </div>
    <TestimonialsCards/>
    </>
  )
}

export default Testimonials