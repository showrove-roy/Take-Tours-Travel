import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Blogs = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>TTT-Blogs</title>
      </Helmet>
      <div className='md:mx-32 md:my-10 m-3'>
        <h2 className='text-lg font-semibold capitalize mt-3'>
          1. difference between sql and nosql?
        </h2>
        <p>
          A SQL Database follows a table like structure which can have an
          unlimited number of rows and every data present inside the database is
          properly structured with Predefined Schemas, it is basically used to
          manipulate Relational Databases Management Systems. A NoSQL Database
          is a Distributed Database where the data is very unstructured with
          Dynamic Schema. Unlike SQL it cannot have unlimited rows but it
          follows a Standard Schema Definition and can store all sorts of data
          models with large distributed data in the form of key-value pairs,
          graph databases, documents or wide-column stores.
        </p>
        <h2 className='text-lg font-semibold capitalize mt-3'>
          2. What is the difference between javascript and NodeJS?
        </h2>
        <p>
          JavaScript is a simple programming language that can be used with any
          browser that has the JavaScript Engine installed. Node.js, on the
          other hand, is an interpreter or execution environment for the
          JavaScript programming language. It requires libraries that can be
          conveniently accessed from JavaScript programming to be more helpful.
        </p>
        <h2 className='text-lg font-semibold capitalize mt-3'>
          3. What is JWT, and how does it work?
        </h2>
        <p>
          JSON Web Token (JWT) is an open standard (RFC 7519) for securely
          transmitting information between parties as JSON object. It is
          compact, readable and digitally signed using a private key/ or a
          public key pair by the Identity Provider(IdP). So the integrity and
          authenticity of the token can be verified by other parties involved.
          The purpose of using JWT is not to hide data but to ensure the
          authenticity of the data. JWT is signed and encoded, not encrypted.
        </p>
        <h2 className='text-lg font-semibold capitalize mt-3'>
          4. How does NodeJS handle multiple requests at the same time?
        </h2>
        <p>
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue. If NodeJS can process the request without I/O
          blocking then the event loop would itself process the request and
          sends the response back to the client by itself. But, it is possible
          to process multiple requests parallelly using the NodeJS cluster
          module or worker_threads module.
        </p>
      </div>
    </HelmetProvider>
  );
};

export default Blogs;
