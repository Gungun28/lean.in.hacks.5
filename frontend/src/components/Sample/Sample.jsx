import React from 'react';
import './Sample.css';

export default function Sample({ sample }) {
  return (
    <div className='main-containers'>
      <h1 style={{ marginLeft: 410, color: '#6c6c03' }}> Sample Products </h1>
      <div className='container second-containers'>
        {sample.map((item, index) => (
          <div key={index} className='card link-containers'>
            <img src={item} alt={`Sample ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
