// import React from 'react'
// import './About.scss'
// const About = () => {
//     return (
//         <div className='about'>
//             <div className="text">
//                 <h1 className='head'>ABOUT US</h1>
//                 <p>
//                     Centralized platform where businesses showcase their excellence and get the reach they deserve.
//                 </p>
//                 <p>
//                     Get known to thriving businesses around you and harness the best out of it in addition to helping them grow.
//                 </p>
//             </div>
//         </div>
//     )
// }

// export default About
import React from 'react';
import {Link} from "react-router-dom"
import './About.css';

export default function About({about,logo,profile}) {
  return (
    <div className="main-container">
      <div className='container second-container'>
        <div className='text-container'>
          <h1>About Us</h1>
          <p>{about}</p>
        </div>
          <a href={profile} target="_blank" rel="noopener noreferrer">
        <div className='image-container'>
          <img src={logo} alt='...' />  
    </div>
          </a>
      </div>
    </div>
  );
}
