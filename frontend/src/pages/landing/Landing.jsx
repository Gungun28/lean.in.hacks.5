import { Link } from 'react-router-dom'
import Register from '../register/Register.jsx'

function Landing() {
  
  return (
    <div>
      <Link to="/userlogin">
        <button> Sign up as customer</button>
      </Link>

      <button> Sign up as business</button>
    </div>
  )
}

export default Landing