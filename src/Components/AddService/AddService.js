import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const AddService = () => {
  const handelAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const price = form.price.value;
    const thumbnail_URL = form.thumbnail_URL.value;
    const description = form.description.value;

    if (description.length <= 300) {
      alert("Please at list 300 characters");
      return;
    }

    const newService = {
      title,
      price,
      thumbnail_URL,
      description,
      rating: 0,
      timestamp: new Date(),
    };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Service Added successfully");
          event.target.reset();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <HelmetProvider>
      <div className='md:m-10 mx-2 my-5'>
        <Helmet>
          <title>TTT-Add Service</title>
        </Helmet>
        <h2
          className='text-xl md:text-4xl font-semibold text-center bg-neutral py-5 mx-5
      '>
          Add Your Service
        </h2>
        <div className='mt-5'>
          <form
            onSubmit={handelAddService}
            className='grid gap-5 grid-cols-2 md:w-2/3 mx-auto'>
            <div className='flex flex-col col-span-2'>
              <label htmlFor='title'>Title :</label>
              <input
                type='text'
                name='title'
                id='title'
                className='p-1 pl-2 input input-bordered mt-1'
                required
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='price'>Price:</label>
              <input
                type='number'
                name='price'
                id='price'
                className='p-1 pl-2 input input-bordered mt-1'
                required
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='thumbnail_URL'>Thumbnail URL:</label>
              <input
                type='url'
                name='thumbnail_URL'
                id='thumbnail_URL'
                className='p-1 pl-2 input input-bordered mt-1'
                required
              />
            </div>
            <div className='flex flex-col col-span-2'>
              <label htmlFor='description'>Description:</label>
              <textarea
                rows='6'
                type='text'
                name='description'
                id='description'
                className='textarea textarea-bordered mt-1 p-1 pl-2 '
                required
              />
            </div>
            <input
              type='submit'
              value='Add'
              className='btn btn-primary text-lg font-semibold text-white'
            />
          </form>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default AddService;
