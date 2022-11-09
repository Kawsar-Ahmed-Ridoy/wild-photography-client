import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServicesCardAll = ({service}) => {
    const { _id, picture, name, title, price, details } = service;
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
          <p>Details: { details.slice(0,100)+ '...' } <Link to={`/details/${_id}`}  className="text-blue-700 underline">read-more</Link></p>
          <Link to={`/details/${_id}`} >
            <button className="btn btn-outline px-10 my-3 w-full font-bold">Details</button>
            </Link>
        </div>
      </div>
    </div>
    );
};

export default ServicesCardAll;