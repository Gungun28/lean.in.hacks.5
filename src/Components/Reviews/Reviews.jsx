import React from 'react';
import { useState } from 'react';
import StarRating from 'react-rating-stars-component';
import './Reviews.css'

export default function Reviews() {
    const [reviews, setReviews] = useState([
        { id: 1, customerName: 'Customer 1', rating: 5, comment: 'Great experience!' },
        { id: 2, customerName: 'Customer 2', rating: 4, comment: 'Good service.' },
        { id: 3, customerName: 'Customer 3', rating: 4, comment: 'Good service.' },
        { id: 4, customerName: 'Customer 4', rating: 4, comment: 'Good service.' },
        // Add more reviews as needed
      ]);
    
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
