import React, { useEffect, useState } from 'react'
import "./List.css"
import { Link } from "react-router-dom"
const List = ({ list }) => {
  const starColor = (index) => {
    const ratings = Object.values(list.rating);
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    const average = sum / ratings.length;
    // Customize the logic based on your requirements
    if (index + 1 <= average) {
      return '#FFD700'; // Yellow color for filled stars
    } else {
      return '#C0C0C0'; // Grey color for unfilled stars
    }
  };
  return (
    <Link to="/store" state={{ list }}>

      <div className="listitem ">
        <div className="item">
          <div className="img">
            <img src={list.businessLogo} alt="img" />
          </div>
          <div className="head-foot">
            <div className="details">
              <h3>{list.businessname}</h3>
              <p style={{ fontSize: '14px' }}>Owner: {list.ownername}</p>
            </div>
            <div className='foot'>
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  style={{
                    color: starColor(index),
                    fontSize: '1.5em', // Adjust the size as needed
                  }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default List
