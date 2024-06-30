/* eslint-disable react/prop-types */
import React from 'react';

const CarDetailModal = ({ car, onClose }) => {
  if (!car) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/2">
        <button onClick={onClose} className="float-right text-gray-500 hover:text-gray-800">&times;</button>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{car.name}</h2>
        <img src={car.image} alt={car.name} className="w-full h-64 object-cover mb-4 rounded" />
        <p className="text-gray-600">{car.description}</p>
        <p className="text-gray-600">Price: {car.price}</p>
        <p className="text-gray-600">Seats: {car.seats}</p>
        <p className="text-gray-600">Transmission: {car.transmission}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default CarDetailModal;
