import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const FindUsOn = () => {
  return (
    <div className='join join-vertical flex my-10'>
        <h2 className='font-semibold mb-4'>Find Us On</h2>

        <button className='btn join-item bg-base-100 justify-start'><FaFacebook/>Facebook</button>
        <button className='btn join-item bg-base-100 justify-start'> <FaTwitter/> Twitter</button>
        <button className='btn join-item bg-base-100 justify-start'> <FaInstagram/>Instagram</button>
        
    </div>
  )
}

export default FindUsOn