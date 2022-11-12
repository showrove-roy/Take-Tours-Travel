import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import ServicesCard from "../ServicesCard/ServicesCard";

const Services = () => {
  const services = useLoaderData();

  return (
    <HelmetProvider>
      <div className='mx-5 py-10'>
        <Helmet>
          <title>TTT-Services</title>
        </Helmet>
        <h1 className=' text-lg md:text-2xl lg:text-4xl text-center font-bold mb-5'>
          Choose Your Suitable Package
        </h1>
        <div className='grid gap-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-0 sm:mx-20'>
          {services.map((service) => (
            <ServicesCard key={service._id} service={service}></ServicesCard>
          ))}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Services;
