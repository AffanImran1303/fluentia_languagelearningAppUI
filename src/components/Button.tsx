import React from 'react'
import Image from 'next/image';
type ButtonProps={
    type:'button'|'submit',
    title:string;
    icon?:string;
}

const Button = ({type,title,icon}:ButtonProps) => {
  return (
<button className="bg-[#6f53ef] text-white poppins-regular rounded-xl transition delay-150 duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[#3e477a] duration-300 focus:outline-none focus:ring focus:ring-violet-300 text-grey-darkest font-bold p-4 rounded inline-flex items-center" type={type}>
    {icon && <Image src={icon} alt={title} width={22} height={22} className="mx-2"/>}
  <label className="">{title}</label>
</button>
  )
}

export default Button