import React, { useContext } from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../provider/AuthProvider'

const SocialLogin = () => {
  const {gooleLogin} =useContext(AuthContext)

  const handleOnGoogle =()=>{
    
gooleLogin()
    .then((result)=>{
      console.log(result)
    })
    .catch((error)=>{
      console.log(error.message)
    })
  }
  return (
    
    <div className='flex flex-col gap-2 '>
        <h2 className='font-semibold mb-3'>Login With</h2>
 <button onClick={handleOnGoogle} className='btn  border-blue-600 border-2 text-blue-600 justify-center'><FaGoogle />Login With Google</button>
 <button className='btn border-black border-2 justify-center'><FaGithub/> Login With Github</button>

    </div>
  )
}

export default SocialLogin