/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { useInView } from 'react-intersection-observer';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import 'animate.css';
import cars from './Service/RentData.service';
import DetailCard from './component/FRAGMENT/DetailCar';

const Card = ({ car, onClick }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg shadow-lg p-6 mr-4 w-64 cursor-pointer ${
        inView ? 'animate__animated animate__fadeInUp' : ''
      }`}
      onClick={() => onClick(car)}
    >
      <img src={car.image} alt={car.name} className="w-full h-40 object-cover mb-4 rounded" />
      <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
      <p className="text-gray-600 mt-2"><span className="font-semibold">Price:</span> {car.price}</p>
      <p className="text-gray-600"><span className="font-semibold">Seats:</span> {car.seats}</p>
      <p className="text-gray-600"><span className="font-semibold">Transmission:</span> {car.transmission}</p>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Rent Now</button>
    </div>
  );
};



function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCar, setSelectedCar] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleCardClick = (car) => {
    setSelectedCar(car);
  };

  const handleCloseDetail = () => {
    setSelectedCar(null);
  };

  const filteredCars = cars.filter(car => 
    car.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || car.category === selectedCategory)
  );

  const categories = ['All', ...new Set(cars.map(car => car.category))];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Car Rental Service</h1>
        <p className="text-gray-600 mt-2">Find the best cars for rent at affordable prices.</p>
      </header>

      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search cars..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded"
        />
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="p-2 border border-gray-300 rounded ml-4"
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {categories.map(category => (
        <section key={category} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{category}</h2>
          <ScrollMenu>
            {filteredCars.filter(car => car.category === category).map(car => (
              <Card car={car} key={car.id} onClick={handleCardClick} />
            ))}
          </ScrollMenu>
        </section>
      ))}

      {selectedCar && <DetailCard car={selectedCar} onClose={handleCloseDetail} />}
    </div>
  );
}

export default App;
