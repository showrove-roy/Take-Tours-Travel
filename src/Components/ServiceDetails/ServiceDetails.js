import React from "react";
import { useLoaderData } from "react-router-dom";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id, thumbnail_URL, title, price, rating, description } = service;
  console.log(service);

  const ratingCount = () => {
    if (rating === 5) {
      return (
        <>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
        </>
      );
    } else if (rating >= 4.5) {
      return (
        <>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarHalf></BsStarHalf>
        </>
      );
    } else if (rating >= 4) {
      return (
        <>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStar></BsStar>
        </>
      );
    } else if (rating >= 3.5) {
      return (
        <>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarHalf></BsStarHalf>
          <BsStar></BsStar>
        </>
      );
    } else if (rating >= 3) {
      return (
        <>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStar></BsStar>
          <BsStar></BsStar>
        </>
      );
    } else if (rating >= 2.5) {
      return (
        <>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStarHalf></BsStarHalf>
          <BsStar></BsStar>
          <BsStar></BsStar>
        </>
      );
    } else if (rating >= 2) {
      return (
        <>
          <BsStarFill></BsStarFill>
          <BsStarFill></BsStarFill>
          <BsStar></BsStar>
          <BsStar></BsStar>
          <BsStar></BsStar>
        </>
      );
    } else if (rating >= 1.5) {
      return (
        <>
          <BsStarFill></BsStarFill>
          <BsStarHalf></BsStarHalf>
          <BsStar></BsStar>
          <BsStar></BsStar>
          <BsStar></BsStar>
        </>
      );
    } else if (rating >= 1) {
      return (
        <>
          <BsStarFill></BsStarFill>
          <BsStar></BsStar>
          <BsStar></BsStar>
          <BsStar></BsStar>
          <BsStar></BsStar>
        </>
      );
    } else if (rating > 0) {
      return (
        <>
          <BsStarHalf></BsStarHalf>
          <BsStar></BsStar>
          <BsStar></BsStar>
          <BsStar></BsStar>
          <BsStar></BsStar>
        </>
      );
    } else {
      return (
        <>
          <BsStar></BsStar>
          <BsStar></BsStar>
          <BsStar></BsStar>
          <BsStar></BsStar>
          <BsStar></BsStar>
        </>
      );
    }
  };

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
            <p className='ml-5 mr-1 font-bold text-xl'>{rating}</p>
            <p className='text-orange-500 flex items-center'>{ratingCount()}</p>
          </div>
        </div>
        <div className=''>
          <h2 className='text-3xl mt-2 mb-3'>{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      {/* review section */}
    </div>
  );
};

export default ServiceDetails;
