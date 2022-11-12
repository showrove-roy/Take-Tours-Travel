import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import ReadRating from "../Ratings/ReadRating/ReadRating";

const SingleReview = ({ review }) => {
  const { re_rating, re_text, se_title } = review;
  return (
    <div className='card bg-slate-700 text-neutral-content'>
      <div className='card-body text-start md:flex-row-reverse justify-between p-4'>
        <div className='md:w-5/6 grid gap-5 grid-cols-1 md:grid-cols-2 items-center '>
          <h3 className='card-title text-lg'>{se_title}</h3>
          <ReadRating ratingNum={re_rating} />
          <p className='md:col-span-2 capitalize'>{re_text}</p>
        </div>
        <div className='card-actions md:w-1/6 mt-3 md:mt-0'>
          <button className='btn btn-sm rounded-sm rounded-r-none btn-active btn-warning '>
            <FaEdit />
          </button>
          <button className='btn btn-sm rounded-sm rounded-l-none btn-active btn-accent'>
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
