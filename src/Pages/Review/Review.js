import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard/ReviewCard';

const Review = () => {

  const {user} = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

    useEffect(()=>{
      fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setReviews(data))
    },[user?.email])

    return (
        <div style={{height: "auto", marginTop: '25px'}}>
            <div className="mb-12">
    <div className="mb-8">
        <h2 className="text-center text-4xl font-bold ">My Reviews</h2>
        <p className="text-center  text-gray-500">__________________</p>
      </div>
   
      {
        reviews.map(review => <ReviewCard
        key={review._id}
        review={review}
        ></ReviewCard>)
      }
     
</div>
        </div>
    );
};

export default Review;