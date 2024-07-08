/* eslint-disable react/prop-types */
// src/component/PAGE/MainPage.js
 
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { useInView } from 'react-intersection-observer';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import 'animate.css';
import cars from '../../Service/RentData.service';
import CarDetailModal from '../FRAGMENT/DetailCar.jsx';
import Navbar from '../FRAGMENT/Navbar.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, setSelectedCategory, setSelectedCar, clearSelectedCar } from '../../redux/slicer/carSlicer.jsx';

const Card = ({ car, onClick }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`bg-white border-2 m-4 border-secondary rounded-lg shadow-lg p-6 mr-4 w-64 cursor-pointer ${
        inView ? 'animate__animated animate__fadeInUp' : ''
      }`}
      onClick={() => onClick(car)}
    >
      <img src={car.image} alt={car.name} className="w-full h-40 object-cover mb-4 rounded" />
      <h3 className="text-xl font-semibold text-text">{car.name}</h3>
      <p className="text-gray-600 mt-2"><span className="font-semibold">Price:</span> {car.price}</p>
      <p className="text-gray-600"><span className="font-semibold">Seats:</span> {car.seats}</p>
      <p className="text-gray-600"><span className="font-semibold">Transmission:</span> {car.transmission}</p>
    </div>
  );
};

const MainPage = () => {
  const dispatch = useDispatch();
  const { searchTerm, selectedCategory, selectedCar } = useSelector((state) => state.car);

  const handleSearch = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleCategoryChange = (category) => {
    dispatch(setSelectedCategory(category));
  };

  const handleCardClick = (car) => {
    dispatch(setSelectedCar(car));
  };

  const handleCloseModal = () => {
    dispatch(clearSelectedCar());
  };

  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || car.category === selectedCategory)
  );

  const categories = ['All', ...new Set(filteredCars.map(car => car.category))];

  return (
    <div className="min-h-screen bg-background pt-20 p-6"> {/* Tambahkan padding top untuk navbar fixed */}
      <Navbar />
      <header className="mb-12 text-center bg-primary text-white py-4">
        <h1 className="text-4xl font-bold">Car Rental Service</h1>
        <p className="mt-2">Find the best cars for rent at affordable prices.</p>
      </header>

      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search cars..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border border-primary rounded"
        />
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="p-2 border border-primary rounded ml-4"
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {categories.filter(category => category === 'All' || filteredCars.some(car => car.category === category)).map(category => (
        <section key={category} className="mb-12">
          <h2 className="text-2xl font-bold text-text mb-6">{category}</h2>
          <ScrollMenu>
            {filteredCars.filter(car => car.category === category).map(car => (
              <Card car={car} key={car.id} onClick={handleCardClick} />
            ))}
          </ScrollMenu>
        </section>
      ))}

      {selectedCar && <CarDetailModal car={selectedCar} onClose={handleCloseModal} />}
    </div>
  );
};

export default MainPage;
