// ReviewForm.js
import React, { useState } from 'react';
import StarRating from 'react-rating-stars-component';
import './ReviewForm.css';

export default function ReviewForm({ onReviewSubmit }) {
  const [newReview, setNewReview] = useState({
    customerName: '',
    rating: 0,
    comment: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.customerName && newReview.rating && newReview.comment) {
      onReviewSubmit({ ...newReview });
      setNewReview({ customerName: '', rating: 0, comment: '' });
    }
  };

  return (
    <div className='form-container'> 
        <h3> Add Review about the store</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Your Name: 
            <input
              type="text"
              name="customerName"
              value={newReview.customerName}
              onChange={handleInputChange}
            />
          </label>
          <br />
          
          <br />
          <label>
            Your Review:
            <textarea
              name="comment"
              value={newReview.comment}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button type="submit" style={{backgroundColor:'#6c6c03',width:100,height:50}}>Post Review</button>
        </form>
    </div>
  );
}
