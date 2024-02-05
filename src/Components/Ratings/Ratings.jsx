import React from 'react';
import './Ratings.css';
import StarRating from 'react-rating-stars-component';
import { useState } from 'react';
import Reviews from '../Reviews/Reviews';
import ReviewForm from '../ReviewForm/ReviewForm';

export default function Ratings() {
    const [rating, setRating] = useState(0);
    const [reviews, setReviews] = useState([]); // Define 'reviews' state

    const handleRatingChange = (newRating) => {
      setRating(newRating);
    };

    const handleReviewSubmit = (newReview) => {
        setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
    };
    
    const ratingsData = {
        5: 10, 
        4: 20, 
        3: 15, 
        2: 30, 
        1: 5,  
    };

  return (
    <div style={{color:'#6c6c03'}}>

        {/* ***********rating stars*********** */}
        <div className='rating star-rating-container'>
            <div className='rate-us'>
                <h1> Rate us</h1>
                <StarRating
                count={5}
                size={80}
                activeColor="#6c6c03"
                value={rating}
                onChange={handleRatingChange}
                edit
                />
            </div>
        </div>


        {/* *******bar representation of ratings ********* */}
        <div className='ratings-reviews'>

            <div className='rating-addreview'>

                    <div className='rating-percentages'>
                        <h2 style={{marginLeft:100}}>Customer Ratings</h2>
                        
                        {Object.keys(ratingsData).map(starRating => (
                        <div key={starRating} className='percentage-bar'>
                            <span className='star-rating'>{`${starRating} ⭐:`}</span>
                            <div className='bar'>
                            <div style={{ width: `${ratingsData[starRating]}%` }}></div>
                            </div>
                            <span>{`${ratingsData[starRating]}%`}</span>
                        </div>
                        ))}
                    </div>
                    
                    <div>
                        <ReviewForm onReviewSubmit={handleReviewSubmit } />
                    </div>
            </div>

            {/* ************ customer reviews displayed ********* */}
            <div className='part2'>
                <Reviews/>
            </div>
        </div>


    </div>

    


  );
}
