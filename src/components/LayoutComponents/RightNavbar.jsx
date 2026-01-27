import React from 'react'
import SocialLogin from '../../pages/SocialLogin'
import FindUsOn from '../../pages/FindUsOn'
import Q_zone from '../../pages/Q_zone'
import bg from '../../assets/bg.png'


const RightNavbar = () => {

  
  return (
    <div>
       <SocialLogin/>
       <FindUsOn/>
       <Q_zone/>
       <img src={bg} alt="" className='w-full mt-5' />

      

    </div>
  )
}

export default RightNavbar