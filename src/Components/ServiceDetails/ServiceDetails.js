import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  console.log(service);
  return (
    <div>
      <div className=''>
        <div className=''>
          <img src='' alt='' />
        </div>
        <div className=''>
          <h2 className='text-3xl'>{service.title}</h2>
        </div>
      </div>

      {/* review section */}
    </div>
  );
};

export default ServiceDetails;
