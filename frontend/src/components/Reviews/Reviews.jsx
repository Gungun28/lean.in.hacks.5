import React from 'react';
import { useState } from 'react';
import axios from 'axios'; 
import StarRating from 'react-rating-stars-component';
import './Reviews.css'
import { useEffect } from 'react';

export default function Reviews({business}) {
    const [reviews, setReviews] = useState([  ]);
      
      useEffect( () => {
        const get_review = async() => {
          try {
            const response = await axios.get('/business/display_review', {
                params: {
                    email: business.email,
                    review : business.review
                },
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.status === 200) {
                const data = response.data;
                setReviews(data);
            } else {
                console.error('Failed to fetch reviews');
            }
        }  catch (error) {
            console.error(error);       
          }
        }

        get_review()
      },[reviews])

      return (
        <div>
          <div>
            <h2 style={{marginLeft:100, fontFamily: 'Lucida Handwriting', padding:0}}>Customer Reviews</h2>

            <div className='review-container'>

              {reviews.map((review) => (
                <div key={review.id} className="review">
                  
                    <h4 className="customer-name">{review.customerName}</h4>
                    <div className="star-rating">
                      <StarRating
                        count={5}
                        size={20}
                        value={review.rating}
                        edit={false}
                      />
                    </div>

                  <p>{review.comment}</p>
                </div>
              ))}

            </div>
          </div>
        </div>
      );
}
