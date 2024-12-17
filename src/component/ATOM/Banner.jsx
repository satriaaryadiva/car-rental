/* eslint-disable react/prop-types */
import { Fragment } from 'react';

const Banner = ({children} ) => {
  return (
    <Fragment>
      <div
        className="relative my-10 w-full h-96 bg-no-repeat bg-cover bg-center object-center"
        style={{ backgroundImage: "url('/assets/Banner.jpeg')" }}
      >
        <div className="relative inset-0 bg-black w-full h-full bg-opacity-60 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeInDown">Find Your Perfect Ride</h1>
        <p className="text-lg text-white mb-6 animate__animated animate__fadeInUp">Discover our wide selection of cars and book your journey today!</p>
       {children}
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
