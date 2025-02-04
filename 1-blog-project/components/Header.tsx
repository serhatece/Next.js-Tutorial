'use client'

import Link from 'next/link';
import React from 'react'
import { useEffect, useState } from "react";


const Header = () => {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [darkMode]);

  return (
   <>
   
<div className="items-center text-center bg-white dark:bg-black 

">
  <a href="" className="font-semibold text-sm text-black hover:text-red-700
  dark:text-white dark:hover:text-red-300
  ">

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quod, eum atque officiis tempore animi?
  </a>

        
</div>

      <header className="bg-mycolor3 p-4 ">
        <div className="container mx-auto flex flex-row justify-between items-center ">
          <div className="text-white text-lg md:text-xl  font-semibold">
            logo
          </div>

          <div className="hidden md:block md:w-1/3 lg:w-1/2">
            <input type="text" className="w-full focus:outline-none pl-2" />
          </div>


          <div className="text-white flex text-lg font-semibold gap-4">
            <div>
            login
            </div>
            
            <button onClick={()=>setDarkMode(!darkMode)}>
              dark
            </button>
          </div>

        </div>
      </header>

      <div className="flex items-center p-3 space-x-8  text-white justify-center bg-mycolor4 border-b-2 border-b-red-600  shadow-2xl">
       <Link href="/" className="text-white hover:text-black"> Anasayfa </Link>
        <Link href="/about" className="text-white hover:text-black"> About </Link>
        <Link href="/blog" className="text-white hover:text-black"> Blog </Link>
        <Link href="/contact" className="text-white hover:text-black"> Contact </Link>


      </div>
   </>
  )
}

export default Header