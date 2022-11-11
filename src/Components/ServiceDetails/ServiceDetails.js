import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useAuth } from "../../Contexts/Auth Context/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import ReadRating from "../Ratings/ReadRating/ReadRating";
import CreateRating from "../Ratings/CreateRating/CreateRating";

const ServiceDetails = () => {
  const [userRating, setUserRating] = useState(0);
  const service = useLoaderData();
  const { _id, thumbnail_URL, title, price, rating, description } = service;

  const { user } = useAuth();

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
            <span className='text-orange-500 flex items-center'>
              <ReadRating ratingNum={rating} />
            </span>
          </div>
        </div>
        <div className=''>
          <h2 className='text-3xl mt-2 mb-3'>{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      {/* review section */}

      <div className='my-10 flex justify-between flex-col-reverse md:flex-row'>
        <div className='md:w-3/5  md:h-80 md:overflow-y-scroll nd:relative'>
          <h4 className='text-2xl text-center font-semibold md:sticky md:top-0 bg-neutral py-3'>
            Top Review
          </h4>
          <div className='h-96'>
            <h4 className='text-2xl text-center font-semibold'>
              Top Review {userRating}
            </h4>
          </div>
        </div>

        <div className='md:w-2/5'>
          <h4 className='text-2xl text-center font-semibold bg-neutral py-3'>
            Add Review
          </h4>
          <div className='mt-3 flex'>
            <div className='avatar md:w-11  mx-5 w-8 '>
              {user?.photoURL ? (
                <div className='w-12 rounded'>
                  <img
                    src={user?.photoURL}
                    alt={user?.displayName}
                    title={user?.displayName}
                  />
                </div>
              ) : (
                <FaUserAlt />
              )}
            </div>
            <div className=''>
              <p>Name: {user?.displayName}</p>
              <p>Email: {user?.email}</p>
            </div>
          </div>
          <div className='mx-2 pt-3'>
            <span className='mt-10'>
              <span className='label-text'>Your Rating</span>
              <CreateRating setUserRating={setUserRating} />
            </span>
            <form>
              <div className='form-control w-full'>
                <label className='label'>
                  <span className='label-text'>Your Comment</span>
                </label>
                <textarea
                  className='textarea textarea-bordered h-24'
                  placeholder=''></textarea>
              </div>

              <input
                type='button'
                className={`btn btn-primary text-white my-5 ${
                  user?.uid ? "" : "btn-disabled"
                }`}
                value='Add Review'
              />
              {user?.uid ? null : (
                <Link
                  to='/login'
                  className='btn btn-sm bg-[#EB6440] text-white hover:bg-[#F98E54]'>
                  Login
                </Link>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
