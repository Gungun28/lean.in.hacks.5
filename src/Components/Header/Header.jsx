

import React from 'react';
import './Header.css'; 

export default function Header() {
  return (
    <div className='heading' >
      {/* <div className='go-back'>
        Go Back
      </div> */}
      <div className='go-back'>
        <button className="image-button">
          <i class="fa-regular fa-circle-left" ></i>
        </button>
      </div>
      <div className='main-title'>
        <h1 style={{fontSize:'4em'}}>Shringari</h1>
      </div>
    </div>
  );
}
