import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCardAll = ({servic}) => {
    const { picture, name, title, price, details } = servic;
    return (
        <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
        <figure>
          <img src={picture} className="h-60" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <h4>Title: {title}</h4>
          <span>Price: ${price}</span>
          <p>Details: { details.slice(0,100)+ '...' } <Link to='/' className="text-blue-700 underline">read-more</Link></p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline px-10 my-3 w-full font-bold">Details</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ServiceCardAll;