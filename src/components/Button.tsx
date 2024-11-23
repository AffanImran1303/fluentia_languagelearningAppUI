import React from 'react'
import Image from 'next/image';
type ButtonProps={
    type:'button'|'submit',
    title:string;
    icon?:string;
}

const Button = ({type,title,icon}:ButtonProps) => {
  return (
<button className="bg-[#6f53ef] text-white poppins-regular rounded-xl hover:bg-grey text-grey-darkest font-bold p-4 rounded inline-flex items-center" type={type}>
    {icon && <Image src={icon} alt={title} width={22} height={22} className="mx-2"/>}
  <label className="">{title}</label>
</button>
  )
}

export default Button