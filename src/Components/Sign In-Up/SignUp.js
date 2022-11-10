import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { useAuth } from "../../Contexts/Auth Context/AuthProvider";

const SignUp = () => {
  // get auth info
  const { createUser, updateUserProfile, googleLogin } = useAuth();
  // Google Login Handel
  const googleLoginHandel = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  // Create user with email & password
  const createUserHandel = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    console.log(name, email, password, photoURL);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserProfileHandel(name, photoURL);
        form.reset();
      })
      .catch((err) => console.error(err));
  };

  //Update a user's profile

  const updateUserProfileHandel = (displayName, photoURL) => {
    updateUserProfile(displayName, photoURL)
      .then(() => {})
      .catch((err) => console.error(err));
  };
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row'>
        <div className='text-center lg:text-left md:w-1/3'>
          <Player
            autoplay
            loop
            src='https://assets8.lottiefiles.com/packages/lf20_gjmecwii.json'></Player>
        </div>
        <div className='md:w-2/3'>
          <div className='card flex-shrink-0 w-full shadow-2xl bg-base-100'>
            <form onSubmit={createUserHandel} className='card-body'>
              <h1 className='md:text-5xl text-2xl font-bold text-center'>
                Sign Up
              </h1>

              <div className='flex flex-col md:flex-row'>
                <div className='form-control md:w-1/2 md:ml-2'>
                  <label className='label'>
                    <span className='label-text'>Name</span>
                  </label>
                  <input
                    type='text'
                    placeholder='name'
                    className='input input-bordered'
                    name='name'
                    required
                  />
                </div>
                <div className='form-control md:w-1/2 md:ml-2'>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input
                    type='email'
                    placeholder='email'
                    className='input input-bordered'
                    name='email'
                    required
                  />
                </div>
              </div>
              <div className='flex flex-col md:flex-row'>
                <div className='form-control  md:w-1/2 md:ml-2'>
                  <label className='label'>
                    <span className='label-text'>Password</span>
                  </label>
                  <input
                    type='password'
                    placeholder='password'
                    className='input input-bordered'
                    name='password'
                    required
                  />
                </div>

                <div className='form-control  md:w-1/2 md:ml-2'>
                  <label className='label'>
                    <span className='label-text'>Photo Url</span>
                  </label>
                  <input
                    type='url'
                    placeholder='EX: ( https://thumb/Cat03.jpg )'
                    className='input input-bordered'
                    name='photoURL'
                  />
                </div>
              </div>

              <div className='form-control mt-6 '>
                <button
                  type='submit'
                  className='btn md:btn-wide btn-block bg-[#EB6440] text-white hover:bg-[#F98E54] mx-auto'>
                  Sign Up
                </button>
              </div>

              <p className='text-center text-lg font-medium my-1'>
                Or Sign Up with
              </p>
              <div className='flex justify-evenly'>
                <span className='h-10 w-10 text-[#FF3811] bg-[#eaeaed] rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:border-2 border-[#FF3811] ease-linear duration-200 '>
                  <FaFacebook></FaFacebook>
                </span>
                <span
                  onClick={googleLoginHandel}
                  className='h-10 w-10 text-[#FF3811] bg-[#eaeaed] rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:border-2 border-[#FF3811] ease-linear duration-200 '>
                  <FaGoogle></FaGoogle>
                </span>
                <span className='h-10 w-10 text-[#FF3811] bg-[#eaeaed] rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:border-2 border-[#FF3811] ease-linear duration-200 '>
                  <FaLinkedinIn></FaLinkedinIn>
                </span>
              </div>
              <p className='text-center text-lg mt-5 mb-0'>
                Already have an account?{" "}
                <Link to='/login' className='font-semibold text-[#FF3811]'>
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
