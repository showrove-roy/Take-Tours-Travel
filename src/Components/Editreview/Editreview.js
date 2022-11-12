import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import CreateRating from "../Ratings/CreateRating/CreateRating";
import ReadRating from "../Ratings/ReadRating/ReadRating";

const Editreview = () => {
  const { re_rating, re_text, _id, se_title } = useLoaderData();

  const [userRating, setUserRating] = useState(0);

  const updateReviewHandel = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;

    if (message === re_text && userRating === 0) {
      alert("Nothing Change");
      return;
    } else if (message === re_text && userRating === re_rating) {
      alert("Please Rewrite Comment");
      return;
    } else if (message === "") {
      alert("Please Add Comment");
      return;
    } else if (userRating === 0) {
      alert("Please Add Rating");
      return;
    }

    const newReview = {
      nRe_rating: userRating,
      nRe_text: message,
    };
    fetch(`http://localhost:5000/single-review/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("update Successfully");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <HelmetProvider>
      <div className='md:w-2/5 mx-auto my-10'>
        <Helmet>
          <title>TTT-Edit Review</title>
        </Helmet>
        <h4 className='text-2xl text-center font-semibold bg-neutral py-3'>
          Update Review
        </h4>
        <div className='mx-2 pt-3'>
          <h4 className='text-lg font-semibold py-3'>{se_title}</h4>
          <span className='mt-10'>
            <span className='label-text'>Previous Rating</span>
            <ReadRating ratingNum={re_rating} />
            <span className='label-text'>New Rating</span>
            <CreateRating setUserRating={setUserRating} />
          </span>
          <form onSubmit={updateReviewHandel}>
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text'>Your Comment</span>
              </label>
              <textarea
                className='textarea textarea-bordered h-24'
                placeholder='Type Here'
                name='message'
                defaultValue={re_text}></textarea>
            </div>

            <input
              type='submit'
              className='btn btn-primary text-white my-5'
              value='Update'
            />
          </form>
        </div>
      </div>
    </HelmetProvider>
  );
};
export default Editreview;
