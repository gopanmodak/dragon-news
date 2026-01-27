import React from 'react'
import imgZone from '../assets/swimming.png'
import classImg from '../assets/class.png'
import playground from '../assets/playground.png'


const Q_zone = () => {
  return (
    <div className='bg-gray-200 p-5'>

        <h1 className='font-semibold mb-5'>Q-Zone</h1>

        <div className='flex flex-col justify-center items-center space-y-6 '>

       <img src={imgZone} alt="" />
       <img src={classImg} alt="" />
       <img src={playground} alt="" />
        
        </div>
      
    </div>
  )
}

export default Q_zone