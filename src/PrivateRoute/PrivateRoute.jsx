import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'

const PrivateRoute = ({children}) => {
    const {currentUser,loading} =useContext(AuthContext)
if(!loading){
    return  <div className="w-screen h-screen flex justify-center items-center">
      <span className="loading loading-spinner text-error loading-lg"></span>
    </div>

}
    if(currentUser){

        return children
    }
  return (
    <div>

        <Navigate to='/auth/login'></Navigate>
    </div>
  )
}

export default PrivateRoute