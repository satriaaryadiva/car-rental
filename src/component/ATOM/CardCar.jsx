/* eslint-disable react/prop-types */
// src/components/FRAGMENT/Card.jsx
import { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';

const Card = ({ car, onClick }) => {
  const { ref } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (<Suspense fallback={<div>Loading...</div>}>
    <div
      ref={ref}
      className={`bg-white border-2 m-4 shadow-gray-800 hover:bg-gray-200 border-secondary rounded-lg p-6 mr-4 w-64  cursor-pointer`}
      onClick={() => onClick(car)}
    >
      <img src={car.image} alt={`${car.name} image`} className="w-full h-40 object-cover mb-4 rounded" />
      <h3 className="text-xl font-semibold text-text">{car.name.substring(0, 20)}</h3>
      <p className="text-gray-600 mt-2"><span className="font-semibold">Price:</span> Rp {car.price.toLocaleString('id-ID')}</p>
      <p className="text-gray-600"><span className="font-semibold">Seats:</span> {car.seats}</p>
      <p className="text-gray-600"><span className="font-semibold">Transmission:</span> {car.transmission}</p>
    </div>
    </Suspense> 
  );
};

export default Card;
