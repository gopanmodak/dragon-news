import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

function LatestNews() {
  return (
    <div className=' container mx-auto flex gap-2 items-center bg-gray-100 p-3'>
       <p className='text-[18px] bg-red-700 px-3 py-2 text-gray-100'>Latest</p>
        <Marquee pauseOnHover={true} className='space-x-3'>
       
       <Link> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, vitae.</Link>
       <Link> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, vitae.</Link>
       <Link> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, vitae.</Link>

        </Marquee>
    </div>
  )
}

export default LatestNews