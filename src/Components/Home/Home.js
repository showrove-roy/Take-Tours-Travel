import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ServicesCard from "../ServicesCard/ServicesCard";
import {
  BsFacebook,
  BsFillEnvelopeFill,
  BsFillTelephoneOutboundFill,
  BsGeoAltFill,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";

const Home = () => {
  const services = useLoaderData();
  return (
    <div className='pb-20'>
      <div className='md:-mt-5 lg:-mt-14 relative'>
        <div className='absolute top-1/4 left-1/2 -translate-x-1/2 z-10 text-center'>
          <h1
            className='text-xl md:text-2xl lg:text-5xl uppercase font-bold text-[#EB6440]'
            style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Welcome
          </h1>
          <h3
            className='lg:text-4xl text-base md:text-2xl font-bold capitalize'
            style={{ fontFamily: "'Exo 2', sans-serif" }}>
            take tours <span className='text-[#EB6440]'> & </span> travel
          </h3>
        </div>
        <Player
          autoplay
          loop
          src='https://assets1.lottiefiles.com/packages/lf20_bhebjzpu.json'></Player>
      </div>
      <h3 className='text-3xl font-bold capitalize text-center mb-5'>
        Our popular services
      </h3>
      <div className=' md:mx-0 mx-3'>
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-10 sm:mx-20 '>
          {services.map((service) => (
            <ServicesCard key={service._id} service={service}></ServicesCard>
          ))}
        </div>
      </div>

      <div className='w-fit mx-auto my-10'>
        <Link
          to='/services'
          className='btn btn-primary rounded border-none bg-[#EB6440] hover:bg-[#F98E54]'>
          Show All
        </Link>
      </div>

      <h3 className='text-3xl font-bold capitalize text-center mt-16 mb-5'>
        Contact Us
      </h3>
      <div className='mb-10 mx-2 md:mx-20 bg-neutral p-4 md:p-10'>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-5 w-full'>
          <div>
            <BsFillTelephoneOutboundFill className='text-2xl mx-auto cursor-pointer text-[#EB6440] hover:text-[#F98E54] hover:scale-125 ease-in-out duration-300' />
            <p className='mt-2 text-center'>+88 01719292929</p>
          </div>
          <div>
            <BsFillEnvelopeFill className='text-2xl mx-auto cursor-pointer text-[#EB6440] hover:text-[#F98E54] hover:scale-125 ease-in-out duration-300' />
            <p className='mt-2 text-center'>web@ph.com</p>
          </div>
          <div>
            <BsGeoAltFill className='text-2xl mx-auto cursor-pointer text-[#EB6440] hover:text-[#F98E54] hover:scale-125 ease-in-out duration-300' />
            <p className='mt-2 text-center'>Street, New York, USA</p>
          </div>

          <div>
            <BsFacebook className='text-2xl mx-auto cursor-pointer text-[#EB6440] hover:text-[#F98E54] hover:scale-125 ease-in-out duration-300' />
            <p className='mt-2 text-center'>Facebook</p>
          </div>
          <div>
            <BsInstagram className='text-2xl mx-auto cursor-pointer text-[#EB6440] hover:text-[#F98E54] hover:scale-125 ease-in-out duration-300' />
            <p className='mt-2 text-center'>Instagram</p>
          </div>
          <div>
            <BsYoutube className='text-2xl mx-auto cursor-pointer text-[#EB6440] hover:text-[#F98E54] hover:scale-125 ease-in-out duration-300' />
            <p className='mt-2 text-center'>Youtube</p>
          </div>
        </div>
      </div>

      <div className='my-10 mx-2 md:mx-20 bg-neutral flex p-4 md:p-10 flex-col md:flex-row'>
        <h4 className='text-lg md:text-2xl text-center md:text-start pb-3 md:pb-0 font-semibold capitalize w-full md:w-1/2 '>
          Put Email & Get discounts
        </h4>
        <div className='flex w-full md:w-1/2'>
          <input
            type='email'
            placeholder='Type Your Email'
            className='input input-bordered input-primary w-full rounded-sm rounded-r-none'
          />
          <button className='btn btn-primary rounded-sm rounded-l-none uppercase'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
