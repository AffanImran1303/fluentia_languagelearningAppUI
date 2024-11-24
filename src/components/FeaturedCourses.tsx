import React from 'react'
import Button from './Button'
import courseData from '../data/language_courses.json';
import { CourseCard } from './CourseCard';

interface Course{
    id:number,
    title:string,
    slug:string,
    description:string,
    price:number,
    instructor:string,
    isFeatured:boolean,
    image:string,
}

const FeaturedCourses = () => {
    const featuredCourseData=courseData.courses.filter((course:Course)=>course.isFeatured)

  return (
    <div className="py-12 md:h-max">
        <div>
        <div className="text-center">
            <h1 className="text-4xl poppins-bold mt-0 m-4 md:text-5xl m-12">Featured Courses</h1>
            <p className="text-md poppins-regular mt-4 px-12">Explore the top language courses from the best tutors!</p>
        </div>
        </div>
        <div className="mt-8 flex justify-center">
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 justify-center'>
                {featuredCourseData.map((course:Course)=>(<CourseCard key={course.id} id={course.id} title={course.title} slug={''} description={course.description} price={0} instructor={''} isFeatured={false} image={course.image}/>))}
            </div>


        </div>
    <div className="mt-20 text-center">
        <Button type={'button'} title="View All Courses" icon="/images/icons/view-icon.png"></Button>
    </div>
    </div>
  )
}

export default FeaturedCourses