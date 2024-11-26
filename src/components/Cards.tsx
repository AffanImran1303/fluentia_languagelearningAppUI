"use client";
import { cn } from "@/utils/cn";
import { PricingPlans, Testimonials} from "@/constants";
import Button from "./Button";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import {Plan } from "@/constants/types";

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

// interface Price{
//   id:number,
//   title:string,
//   price:string,
//   features:string,
// }

export function CourseCard({id,title,description,image}:Course) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
        //   `bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover`
            "bg-cover bg-blend-darken"
    )}
        style={{backgroundImage:`url(${image})`}}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="text content mt-56">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function PriceCard({name,planFor,price,features,description}:Plan){
  return(
<div className="max-w-xs w-full group/card shadow-2xl bg-transparent border-4 rounded-xl border-[#6f53ef] text-[#6f53ef]">
      <div
        className={cn(
          "overflow-hidden relative card h-max rounded-md max-w-sm mx-auto flex flex-col justify-between p-4",
    )}
      >
        <div className="absolute w-full h-max top-0 left-0 transition duration-300 group-hover/ease-in"></div>
        <div className="items-center p-4">
          <div className="text-center poppins-bold">
          <p className="text-3xl p-2">
            {price}
          </p>
          <h1 className="font-bold p-2 text-xl md:text-2xl">
            {name}
          </h1>
          <p className="text-sm">{planFor}</p>
          </div>
          <div className="text-center text-sm my-4">
          {features.map((features,index)=>(
            <li key={index} className="p-2">{features}</li>
          ))}
          </div>
          <div className="flex justify-center place-self-stretch">
          <Button type={"button"} title={"Subscribe"}/>
          </div>
        </div>
      </div>
    </div>
  )
}
export function TestimonialsCards(){
  return (
    <div className="h-[24rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
 
const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];