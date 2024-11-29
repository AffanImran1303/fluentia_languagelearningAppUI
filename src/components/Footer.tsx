import { footerItems } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
<div className="mt-24 w-full mx-auto text-gray-500">
<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
	<footer className="p-4 rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
		<div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/" className="text-lg poppins-bold nav-hover m-2 sm:text-2xl">
          fluentia
        </Link>
			<ul className="flex flex-wrap items-center space-x-6 mb-6 sm:mb-0">
                    {footerItems.map((item)=>(
                        <li key={item.key}>
                            <Link href={item.href}>{item.label}</Link>
                        </li>
                    ))}
			</ul>
		</div>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" target="_blank" className="hover:underline">fluentia™</a>. All Rights Reserved.
        </span>
	</footer>
</div>
  )
}

export default Footer