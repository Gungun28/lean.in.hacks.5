

import React from 'react';
import './Header.css'; 
import {Link} from 'react-router-dom'
export default function Header({name}) {
  return (
    <div className='heading' >
      {/* <div className='go-back'>
        Go Back
      </div> */}
      <Link to="/">

      <div className='go-back'>
        <button className="image-button">
          <i class="fa-regular fa-circle-left" ></i>
        </button>
      </div>
      </Link>
      <div className='main-title'>
        <h1 style={{fontSize:'4em'}}>{name}</h1>
      </div>
    </div>
  );
}
