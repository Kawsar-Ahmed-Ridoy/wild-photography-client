import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard/ReviewCard';

const Review = () => {

  const {user, logOut} = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

    useEffect(()=>{
      fetch(`http://localhost:5000/reviews?email=${user?.email}`,{
        headers: {
          authorization: `Bearer ${localStorage.getItem('userToken')}`
        }
      })
      .then(res =>{ 
        if(res.status === 401 || res.status === 403){
         return logOut()
        }
        return res.json()
      })
      .then(data => {
        setReviews(data)
      }).catch(err => console.error(err))
    },[user?.email, logOut])


    const handleDelete = _id =>{
      const proceed = window.confirm('Are you sure, you  want to delete this review?');
      if(proceed){
          fetch(`http://localhost:5000/reviews/${_id}`, {
              method: 'DELETE',
              headers: {
                authorization: `Bearer ${localStorage.getItem('userToken')}`
              }
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if(data.deletedCount > 0 ){
                  alert('delete success');
                  const remaining = reviews.filter(rev => rev._id !== _id);
                  setReviews(remaining)
              }
          })
      }
  }

    return (
        <div>
          <div style={{height: "auto", marginTop: '25px'}}>
            <div className="mb-12">
    <div className="mb-8">
        <h2 className="text-center text-4xl font-bold ">My Reviews</h2>
        <p className="text-center  text-gray-500">__________________</p>
      </div>
   
      {
            reviews.length? 
      <>
      {
        reviews.map(review => <ReviewCard
        key={review._id}
        review={review}
        handleDelete={handleDelete}
        ></ReviewCard>)
      }
      </>
     : <div style={{height: "45vh"}} className="flex  justify-center align-middle w-full text-center">
     <h4 className='text-5xl text-center my-auto '>No reviews were added!</h4> </div>
}
</div> 
</div> 
          
        </div>
    );
};

export default Review;