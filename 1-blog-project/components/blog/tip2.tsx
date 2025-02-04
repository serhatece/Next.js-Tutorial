import { BlogsType } from '@/constans';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


interface BlogTwoProps{
    blog:BlogsType[];
}



const BlogTipTwo = ({blog}:BlogTwoProps) => {
    return (
        <div className='min-h-96 group border rounded-lg shadow-lg 
        overflow-hidden transition duration-500'>
            <div>
                <Image
                alt={blog.title}
                src={blog.image}
                width={1024}
                height={768}
                className='w-full h-56 object-cover transition-transform transform group-hover:scale-105 duration-700'
                />

            </div>
            <div className='p-6'>
            <h2 className='text-2xl font-bold mb-2 group-hover:text-red-600 duration-700 transition '>{blog.title}</h2>
            <p className='line-clamp-4 mb-5'>
                {blog.description}
            </p>
            <Link href={`blog/${blog.id}`}>
            <div className='inline-block w-full px-4 py-2 bg-red-600 text-white text-center
            rounded-lg hover:bg-red-700 duration-700 transition '>
                Detail
            </div>
            </Link>
            </div>
       
        </div>
    )
}

export default BlogTipTwo