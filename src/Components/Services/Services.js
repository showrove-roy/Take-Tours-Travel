import React, { useEffect, useState } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className='mx-5 py-10'>
      <h1 className='text-4xl text-center font-bold mb-5'>
        Choose Your Suitable Package
      </h1>
      <div className='grid gap-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-0 sm:mx-20'>
        {services.map((service) => (
          <ServicesCard
            key={service.service_id}
            service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
