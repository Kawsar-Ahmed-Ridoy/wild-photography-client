import React, { useContext } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const CardDetails = () => {
  const { _id, picture, name, title, price, details } = useLoaderData();
  const { user } = useContext(AuthContext);
console.log(user);
  const handleReview = event =>{
    event.preventDefault();
    const form = event.target;
    const names = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const review = {
        service: _id,
        servicePicture: picture,
        serviceName: name,
        serviceTitle: title,
        servicePrice: price,
        serviceDetails: details,
        names,
        email,
        message,

    }


    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('userToken')}`
      },
      body: JSON.stringify(review)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.acknowledged){
          alert('Review Added')
          form.reset()
        }
      })
      .catch(err => console.error(err))

  }

  return (
    <div>
      <div className="card bg-base-100 shadow-xl my-16 mx-10">
        <PhotoProvider>
          <PhotoView src={picture}>
            <figure>
              <img src={picture} alt="Album" />
            </figure>
          </PhotoView>
        </PhotoProvider>
        <div className="card-body mx-auto text-center ">
          <h2 className="card-title text-center block">Name: {name}</h2>
          <span>Title: {title}</span>
          <span>Price: ${price}</span>
          <p className="px-10 ">
            <span className="font-bold">Details:</span> {details}
          </p>
        </div>
        <div className="card-actions justify-between p-10 mx-auto mb-8">
          <button className="btn px-28 ">Add Service</button>
        </div>
      </div>

      {/* review form */}

      <div className="mb-16">
        <div className="mb-4">
          <h2 className="text-center text-4xl font-bold ">Review</h2>
          <p className="text-center  text-gray-500">__________________</p>
        </div>
        <h4 className="text-center mb-4 font-bold capitalize">
          If you like my photography of my website, <br /> please give a review.
        </h4>
        <div className="hero ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleReview} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  placeholder="Name "
                  className="input input-bordered"
                  require
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="email "
                  className="input input-bordered"
                  readOnly
                />
              </div>

              <div className="form-control mt-6">
                <textarea
                  className="textarea textarea-bordered h-24" placeholder="Please Review"
                  type='text'
                  name='message'
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <input className="btn" type="submit" value="Add Review" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
