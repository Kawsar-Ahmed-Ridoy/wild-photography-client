import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const { picture, name, title, price, details } = useLoaderData();

  return (
    <div className="">
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
        <p className="px-10 "><span className="font-bold">Details:</span> {details}</p>
      </div>
      <div className="card-actions justify-between p-10 mx-auto mb-8">
      <button className="btn px-28 ">Service</button>
    </div>   
    </div>

 {/* review form */}
 
<div className="mb-16">
<div className="mb-4">
        <h2 className="text-center text-4xl font-bold ">Review</h2>
        <p className="text-center  text-gray-500">__________________</p>
      </div>
      <h4 className="text-center mb-4 font-bold capitalize">If you like my photography of my website, <br/> please give a review.</h4>
<div className="hero ">

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name " className="input input-bordered" require/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email " className="input input-bordered" required/>
        </div>
        
        <div className="form-control mt-6">
        <textarea className="textarea textarea-bordered" placeholder="Review Please"></textarea>
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
