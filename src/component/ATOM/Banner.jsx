/* eslint-disable react/prop-types */
import { Fragment } from 'react';

const Banner = ({ children }) => {
  return (
    <Fragment>
      <div
        className="relative my-10 w-full h-96 bg-no-repeat bg-cover bg-center object-center"
        style={{ backgroundImage: "url('/src/assets/Banner.jpeg')" }}
      >
        <div className="relative inset-0 bg-black w-full h-full bg-opacity-60 flex flex-col items-center justify-center text-center">
          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
