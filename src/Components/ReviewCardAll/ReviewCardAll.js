import React from "react";
import ReadRating from "../Ratings/ReadRating/ReadRating";

const ReviewCardAll = ({ review }) => {
  const { re_name, re_photo, re_rating, re_text } = review;
  return (
    <tr>
      <td className='py-5'>
        <div className='flex items-center space-x-3'>
          <div className='avatar'>
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
  );
};

export default ReviewCardAll;
