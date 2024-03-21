import { Link } from 'react-router-dom'
import Register from '../register/Register.jsx'
import { useEffect } from 'react'

function Landing({setUser}) {
  useEffect(()=>{
    localStorage.setItem('user', "0");
    setUser("0")
  })
  return (
    <div>
      <Link to="/userlogin">
        <button> Sign up as customer</button>
      </Link>
      <Link to="/login">
        <button> Sign up as business</button>

      </Link>
    </div>
  )
}

export default Landing