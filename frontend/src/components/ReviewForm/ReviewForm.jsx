// ReviewForm.js
import React, { useState } from 'react';
import StarRating from 'react-rating-stars-component';
import './ReviewForm.css';
import axios from 'axios'; 

export default function ReviewForm({business , user }) {
  const [newReview, setNewReview] = useState("hjvvjvh");

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setNewReview(e.target.value);
  };

  const handleSubmit = async(e) => {    
    e.preventDefault();
    console.log('hell with u')
    
        const reqBody = { business: business, id: user, userReview: newReview };

          try {
              const response = await axios.post('/business/review', reqBody, {
                  headers: { 'Content-Type': 'application/json' },
              });


              if (response.status === 200) {
                  const data = response.data;
                  // console.log(data);
              } else {
                  console.error('Review not added');
              }
          } catch (error) {
              console.error(error);
          
    }
  };

  return (
    <div className='form-container'> 
        <h3> Add Review about the store</h3>
        <form >          
          <br />
          <label>
            Your Review:
            <textarea
              value={newReview}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button onClick={handleSubmit} style={{backgroundColor:'#6c6c03',width:100,height:50}}>Post Review</button>
        </form>
    </div>
  );
}
