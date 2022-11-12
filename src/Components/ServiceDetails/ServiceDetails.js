import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReadRating from "../Ratings/ReadRating/ReadRating";

import ReviewSection from "../ReviewSection/ReviewSection";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { thumbnail_URL, title, price, rating, description } = service;

  const [reviewOnTime, setReviewOnTime] = useState(rating);

  return (
    <div className='my-5 md:my-10'>
      <div className='mx-2 lg:mx-10'>
        <div className='lg:h-[30rem] md:h-[25rem] overflow-hidden'>
          <img src={thumbnail_URL} alt={title} className='w-full' />
        </div>
        <div className='mt-5 flex '>
          <p className='font-semibold text-xl'>
            Per Person: <span className='text-orange-500'>${price}</span>
          </p>
          <div className='flex'>
            <p className='ml-5 mr-1 font-bold text-xl'>{reviewOnTime}</p>
            <span className='text-orange-500 flex items-center'>
              <ReadRating ratingNum={reviewOnTime} />
            </span>
          </div>
        </div>
        <div className=''>
          <h2 className='text-3xl mt-2 mb-3'>{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      {/* review section */}
      <ReviewSection service={service} setReviewOnTime={setReviewOnTime} />
    </div>
  );
};

export default ServiceDetails;
