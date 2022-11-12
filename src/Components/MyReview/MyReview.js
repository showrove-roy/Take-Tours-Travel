import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useAuth } from "../../Contexts/Auth Context/AuthProvider";
import SingleReview from "../SingleReview/SingleReview";

const MyReview = () => {
  const [reLoad, setReLoad] = useState(false);
  const { user } = useAuth();

  const [myAllReview, setMyAllReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/review/${user?.uid}`)
      .then((res) => res.json())
      .then((data) => setMyAllReview(data))
      .catch((err) => console.error(err));
  }, [user?.uid, reLoad]);

  return (
    <HelmetProvider>
      <div className='min-h-screen p-2 md:p-10'>
        <Helmet>
          <title>TTT-My Reviews</title>
        </Helmet>
        {myAllReview.length ? (
          <h2 className='text-4xl font-semibold text-center mt-5'>
            My All Review
          </h2>
        ) : (
          <h2 className='text-4xl font-semibold text-center mt-5'>
            You didn't add any Review
          </h2>
        )}

        <div className='my-5'>
          <div className=''>
            {myAllReview.map((review) => (
              <SingleReview
                key={review._id}
                review={review}
                setReLoad={setReLoad}></SingleReview>
            ))}
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default MyReview;
