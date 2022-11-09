import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServiceCard = ({ servic }) => {
  const { id, picture, name, title, price, details } = servic;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
      <PhotoProvider>
            <PhotoView src={picture}>
          <figure>
          <img src={picture} className="h-60" alt="Animal" />
        </figure>
            </PhotoView>
          </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <h4>Title: {title}</h4>
          <span>Price: ${price}</span>
          <p>Details: { details.slice(0,100)+ '...' } <Link to='/' className="text-blue-700 underline">read-more</Link></p>
          <div className="card-actions justify-end">
            <Link to={`/service/${id}`} >
            <button className="btn btn-outline px-10 my-3 w-full font-bold">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
