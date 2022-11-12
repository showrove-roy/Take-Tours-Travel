import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/Auth Context/AuthProvider";
import CreateRating from "../Ratings/CreateRating/CreateRating";
import ReviewCardAll from "../ReviewCardAll/ReviewCardAll";

const ReviewSection = ({ service, setReviewOnTime }) => {
  const { _id, title, rating, rating_Count } = service;
  const [userRating, setUserRating] = useState(0);

  // review store
  const [storedReviews, setStoredReviews] = useState([]);

  const filterServices = storedReviews.filter((serv) => serv.se_id === _id);

  // reload state
  const [reloadRE, setReloadRE] = useState(false);
  const { user } = useAuth();

  // Handel Add review
  const addReviewHandel = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;
    if (message === "") {
      alert("Please add Comment");
      return;
    } else if (userRating === 0) {
      alert("Please add rating");
      return;
    } else {
      setReloadRE(false);
      const review = {
        se_id: _id,
        se_title: title,
        re_name: user?.displayName,
        re_email: user?.email,
        re_photo: user?.photoURL,
        re_uid: user?.uid,
        re_rating: userRating,
        re_text: message,
        timestamp: new Date(),
      };

      fetch("https://take-tour-travel-server-showrove-roy.vercel.app/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            alert("Review Added successfully");
            upDateRatingNum();
            setReloadRE(true);
            event.target.reset();
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const upDateRatingNum = () => {
    const ratingCount = rating_Count + 1;
    const setRating = parseFloat(rating) + parseInt(userRating);
    const new_rating = (setRating / ratingCount).toFixed(1);

    const ratingNum = {
      ratingCount,
      new_rating,
    };

    fetch(
      `https://take-tour-travel-server-showrove-roy.vercel.app/services/${_id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ratingNum),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setReviewOnTime(new_rating);
        }
      })
      .catch((err) => console.error(err));
  };

  // fetch for all reviews
  useEffect(() => {
    fetch("https://take-tour-travel-server-showrove-roy.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setStoredReviews(data))
      .catch((err) => console.error(err));
  }, [reloadRE]);
  return (
    <div className='my-10 flex justify-between flex-col-reverse md:flex-row'>
      <div className='md:w-3/5  md:h-[35rem] md:overflow-y-scroll nd:relative'>
        <h4 className='text-2xl text-center font-semibold md:sticky md:top-0 bg-neutral py-3'>
          Top Review
        </h4>

        <div className='my-3 ml-3'>
          <table>
            <thead className='hidden md:table-row-group'>
              {filterServices.length ? (
                <tr>
                  <th className='py-5 pl-5 text-start'>User Info</th>
                  <th className='py-5 text-start'>Rating</th>
                  <th className='w-3/5 py-5 text-start'>Comment</th>
                </tr>
              ) : null}
            </thead>

            <tbody>
              {filterServices.map((review) => (
                <ReviewCardAll key={review._id} review={review} />
              ))}
            </tbody>
          </table>
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
          <form onSubmit={addReviewHandel}>
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text'>Your Comment</span>
              </label>
              <textarea
                className='textarea textarea-bordered h-24'
                placeholder='Type Here'
                name='message'></textarea>
            </div>

            <input
              type='submit'
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
  );
};

export default ReviewSection;
