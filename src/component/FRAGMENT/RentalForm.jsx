import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import cars from '../../Service/RentData.service';

const RentalForm = () => {
  const { carId } = useParams();
  const car = cars.find(car => car.id === parseInt(carId));
  const [days, setDays] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/payment/${carId}`, { state: { days, car } });
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <h1 className="text-4xl font-bold text-text mb-6">Rent {car.name}</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <label className="block mb-4">
          <span className="text-text">Number of days:</span>
          <input
            type="number"
            min="1"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded"
          />
        </label>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RentalForm;
