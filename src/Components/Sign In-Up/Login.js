import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const Login = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row'>
        <div className='text-center lg:text-left w-1/2'>
          <Player
            autoplay
            loop
            src='https://assets8.lottiefiles.com/packages/lf20_gjmecwii.json'></Player>
        </div>
        <div className='md:w-1/2'>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <div className='card-body'>
              <h1 className='md:text-5xl text-2xl font-bold text-center'>
                Login
              </h1>

              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='text'
                  placeholder='email'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='text'
                  placeholder='password'
                  className='input input-bordered'
                />
                <label className='label'>
                  <Link className='label-text-alt link link-hover'>
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className='form-control mt-6'>
                <button className='btn bg-[#EB6440] text-white hover:bg-[#F98E54]'>
                  Login
                </button>
              </div>

              <p className='text-center text-lg font-medium my-1'>
                Or Sign In with
              </p>
              <div className='flex justify-evenly'>
                <span className='h-10 w-10 text-[#FF3811] bg-[#eaeaed] rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:border-2 border-[#FF3811] ease-linear duration-200 '>
                  <FaFacebook></FaFacebook>
                </span>
                <span className='h-10 w-10 text-[#FF3811] bg-[#eaeaed] rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:border-2 border-[#FF3811] ease-linear duration-200 '>
                  <FaGoogle></FaGoogle>
                </span>
                <span className='h-10 w-10 text-[#FF3811] bg-[#eaeaed] rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:border-2 border-[#FF3811] ease-linear duration-200 '>
                  <FaLinkedinIn></FaLinkedinIn>
                </span>
              </div>
              <p className='text-center text-lg mt-2 mb-0'>
                Haven't an account?{" "}
                <Link to='/signup' className='font-semibold text-[#FF3811]'>
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
