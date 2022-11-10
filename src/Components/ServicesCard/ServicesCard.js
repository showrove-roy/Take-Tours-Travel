import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { service_id, title, price, thumbnail_URL, description } = service;
  return (
    <div className='card bg-neutral shadow-xl rounded'>
      <figure>
        <img src={thumbnail_URL} alt={title} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          {title}
          <div
            className='badge badge-secondary cursor-pointer text-white  bg-[#EB6440]'
            title={`$${price} Per Person`}>
            ${price}/P
          </div>
        </h2>
        <p>{description.slice(0, 100)}...</p>
        <div className='card-actions justify-end'>
          <Link to={`/services/${service_id}`} className='btn btn-primary'>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
