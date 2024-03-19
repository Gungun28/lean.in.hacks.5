import React from 'react'
import Login from '../../components/login/Login'
const LoginPage = ({type, user, setUser}) => {
  return (
    <div className='login'>
        <Login type={type} user={user} setUser={setUser}></Login>
    </div>
  )
}

export default LoginPage