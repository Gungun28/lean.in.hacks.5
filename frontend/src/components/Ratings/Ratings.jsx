import React from 'react';
import './Ratings.css';
import StarRating from 'react-rating-stars-component';
import { useState } from 'react';
import Reviews from '../Reviews/Reviews';
import ReviewForm from '../ReviewForm/ReviewForm';
import axios from 'axios'; // Import Axios

export default function Ratings({ business, user }) {
    const [userrating, setRating] = useState(0);
    const [reviews, setReviews] = useState([]); // Define 'reviews' state

    const handleRatingChange = async (newRating) => {
        setRating(newRating);
        const reqBody = { business: business, id: user, userRating: newRating };

        try {
            const response = await axios.post('/business/update', reqBody, {
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.status === 200) { // Check if response is successful
                const data = response.data;
                // console.log(data);
            } else {
                console.error('Rating not updated');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleReviewSubmit = (newReview) => {
        setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
    };


    const getRatingCount = (eachRating) => {
        if (!business || !business.rating) return 0;
        // Count the occurrences of the rating
        return Object.values(business.rating).filter((value) => value === eachRating).length;

    };

    const ratingCounts = [];
    for (let i = 1; i <= 5; i++) {
        ratingCounts[i - 1] = getRatingCount(i);
    }

    const getRatingPercentage = (eachRating) => {
        const percentage = (eachRating / Object.keys(business.rating).length) * 100;
        return Math.round(percentage);
    };

    return (
        <div style={{ color: '#6c6c03' }}>
            {/* ***********rating stars*********** */}
            <div className='rating star-rating-container'>
                <div className='rate-us'>
                    <h1> Rate us</h1>
                    <StarRating
                        count={5}
                        size={80}
                        activeColor='#6c6c03'
                        value={userrating}
                        onChange={handleRatingChange}
                        edit
                    />
                </div>
            </div>

            {/* *******bar representation of ratings ********* */}
            <div className='ratings-reviews'>
                <div className='rating-addreview'>
                    <div className='rating-percentages'>
                        <h2 style={{ marginLeft: 100 }}>Customer Ratings</h2>

                        {ratingCounts.map((rating, index) => (
                            <div key={index + 1} className='percentage-bar'>
                                <span className='star-rating'>{`${index + 1} ⭐:`}</span>
                                <div className='bar'>
                                    <div style={{ width: `${getRatingPercentage(rating)}%` }}></div>
                                </div>
                                <span>{`${rating}`}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                        
                        <ReviewForm business={business} user={user} />
                    </div>
                </div>

                {/* ************ customer reviews displayed ********* */}
                <div className='part2'>
                   
                    <Reviews  business={business} />
                </div>
            </div>
        </div>
    );
}
