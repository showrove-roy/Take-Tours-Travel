import React from "react";
import ReadRating from "../Ratings/ReadRating/ReadRating";

const ReviewCardAll = ({ review }) => {
  const { re_name, re_photo, re_rating, re_text } = review;
  return (
    <>
      <tr className='hidden md:table-row'>
        <td className='py-5'>
          <div className='flex items-center flex-col'>
            <div className='avatar -z-10'>
              <div className='w-12 h-12 rounded-full'>
                <img src={re_photo} alt='' />
              </div>
            </div>

            <div className='font-semibold'>{re_name}</div>
          </div>
        </td>
        <td className='py-5'>
          <ReadRating ratingNum={re_rating} />
        </td>
        <td className='py-5'>
          <div>{re_text}</div>
        </td>
      </tr>
      <tr className='md:hidden table-row'>
        <td className='pt-8'>
          <div className='flex items-center'>
            <div className='avatar -z-10'>
              <div className='w-12 h-12 rounded-full'>
                <img src={re_photo} alt='' />
              </div>
            </div>

            <div className='font-semibold ml-3'>{re_name}</div>
            <div className='ml-3'>
              <ReadRating ratingNum={re_rating} />
            </div>
          </div>
        </td>
      </tr>
      <tr className='md:hidden table-row'>
        <td className='pb-3 pt-1'>
          <div>{re_text}</div>
        </td>
      </tr>
    </>
  );
};

export default ReviewCardAll;
