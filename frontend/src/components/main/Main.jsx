import React from 'react'
import {Link} from "react-router-dom"
import './Main.scss'
const Main = () => {
  return (
    <div className='main'>
      <div className="first">
        <Link to="/jewellery"><span>JEWELLERY</span></Link>
      </div>
      <div className="sec">
      <Link to="/phonecase"><span>PHONE CASE</span></Link>
      </div>
      <div className="last">
      <Link to="/purse"><span>PURSES</span></Link>
      </div>
    </div>
  )
}

export default Main