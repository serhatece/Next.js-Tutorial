'use client'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillAlert, AiFillAlipayCircle, AiFillAmazonCircle, AiFillBehanceCircle } from "react-icons/ai";

//const inter = Inter({ subsets: ["latin"] });

const pacifiko = Pacifico({ subsets: ["cyrillic"], weight: "400" });


export default function Home() {

  const router = useRouter()



  return (
    <>
      <Hero />

      <button type="button"  className="bg-red-700 p-4 text-white" onClick={() => router.push('/blog')}>
      Blog
    </button>
      <div className="container mt-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          <div className=" lg:col-span-3 border-2 items-center justify-center flex flex-col p-4">

            <div className="relative">
              <AiFillAlipayCircle className="text-6xl z-10" />
              <div className="z-50 absolute right-1 -top-2  bg-red-700 rounded-full px-2 text-white"> 2</div>
              <h2>Home1</h2>

            </div>


          </div>

          <div className="border-2 items-center justify-center flex flex-col p-4">
            <AiFillAlert className="text-6xl" />
            <h2>Home2</h2>
          </div>


          <div className="border-2 items-center justify-center flex flex-col p-4">
            <AiFillAmazonCircle className="text-6xl" />
            <h2>Home3</h2>
          </div>

          <div className="border-2 items-center justify-center flex flex-col p-4">
            <AiFillBehanceCircle className="text-6xl" />
            <h2>Home4</h2>
          </div>





        </div>
      </div>

    </>
  );
}

