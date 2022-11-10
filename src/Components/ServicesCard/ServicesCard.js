import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServicesCard = ({ service }) => {
  const { service_id, title, price, thumbnail_URL, description } = service;
  return (
    <div className='card bg-neutral shadow-xl rounded'>
      <figure>
        <PhotoProvider>
          <div className='foo cursor-pointer'>
            <PhotoView src={thumbnail_URL}>
              <img src={thumbnail_URL} alt='' />
            </PhotoView>
          </div>
        </PhotoProvider>
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
