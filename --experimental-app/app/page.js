import React from 'react'
import Link from 'next/link'
import { Geist } from 'next/font/google'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })

const geist = Geist({
    subsets: ['latin'],
  })

const Page = () => {
  return (
    <>
    <div>
      Page
    </div>
    <Link className={geist.className} href="/about">Yönlendir 1</Link>
    <Link className={roboto.className} href="/about?name-serhat&surname-ece">Yönlendir 2</Link>
    <Link href={{
        pathname : "/about",
        query : {
            name : "serhat",
            surname : "ece"
        }
    }}>Yönlendir 3</Link>



    </>
  )
}

export default Page
