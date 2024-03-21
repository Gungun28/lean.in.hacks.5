import React from 'react';
import './Ratings.css';
import StarRating from 'react-rating-stars-component';
import { useState,useEffect } from 'react';
import Reviews from '../Reviews/Reviews';
import ReviewForm from '../ReviewForm/ReviewForm';
import axios from 'axios'; // Import Axios

export default function Ratings({ business, user }) {
    const [userrating, setRating] = useState(0);
    const [reviews, setReviews] = useState([]); // Define 'reviews' state'
    const [ratingarr,setRatingarr]=useState([])

    useEffect(() => {
        updaterating(business)
    }, []);
    const handleRatingChange = async (newRating) => {
        setRating(newRating);
        const reqBody = { business: business, id: user, userRating: newRating };

        try {
            const response = await axios.post('/business/update', reqBody, {
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.status === 200) { // Check if response is successful
                updaterating(response.data.business)
                const data = response.data;
                // console.log(data.business);
            } else {
                console.error('Rating not updated');
            }
        } catch (error) {
            console.error(error);
        }
    };


    const getRatingCount = (business1,eachRating) => {
        if (!business || !business.rating) return 0;
        // Count the occurrences of the rating
        console.log(business1.rating)
        return Object.values(business1.rating).filter((value) => value === eachRating).length;

    };
    const updaterating=(business1)=>{
        console.log("hi")
        const ratingCounts = [];
        for (let i = 1; i <= 5; i++) {
            ratingCounts[i - 1] = getRatingCount(business1,i);
        }
        setRatingarr(ratingCounts)
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

                        {ratingarr.map((rating, index) => (
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
