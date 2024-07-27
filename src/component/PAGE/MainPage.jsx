/* eslint-disable react/prop-types */
import { useEffect, useRef, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { useInView } from 'react-intersection-observer';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import 'animate.css';
import cars from '../../Service/RentData.service';
import { setSearchTerm, setSelectedCategory, setSelectedCar, clearSelectedCar } from '../../redux/slicer/carSlicer.jsx';
import Banner from '../ATOM/Banner.jsx';
import Navbar from '../FRAGMENT/Navbar.jsx';

const CarDetailModal = lazy(() => import('../FRAGMENT/DetailCar.jsx'));

const Card = ({ car, onClick }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`bg-white border-2 m-4 shadow-gray-800  hover:bg-gray-200  border-secondary rounded-lg p-6 mr-4 w-64 cursor-pointer ${
        inView ? 'animate__animated animate__fadeInUp' : ''
      }`}
      onClick={() => onClick(car)}
    >
      <img src={car.image} alt={`${car.name} image`} className="w-full h-40 object-cover mb-4 rounded" />
      <h3 className="text-xl font-semibold text-text">{car.name.substring(0, 20)}</h3>
      <p className="text-gray-600 mt-2"><span className="font-semibold">Price:</span> Rp {car.price.toLocaleString('id-ID')}</p>
      <p className="text-gray-600"><span className="font-semibold">Seats:</span> {car.seats}</p>
      <p className="text-gray-600"><span className="font-semibold">Transmission:</span> {car.transmission}</p>
    </div>
  );
};

const MainPage = () => {
  const dispatch = useDispatch();
  const { searchTerm, selectedCategory, selectedCar } = useSelector((state) => state.car);
  const resultsRef = useRef(null); // Add a ref for the search results

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

  useEffect(() => {
    if (searchTerm && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchTerm]); // Scroll to search results when search term changes

  return (
    <div className="min-h-screen bg-background pt-20">
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <Navbar />
      </Suspense>
      <Banner>
        <div className="sticky z-50 top-0 rounded-lg font-semibold mb-8 flex text-xs justify-center bg-white p-4 shadow">
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
      </Banner>

      <h1 className="text-center text-2xl font-bold text-primary my-4">Discover Our Wide Selection of Rental Cars</h1>
      <p className="text-center text-gray-600 mb-6">We offer a variety of cars to suit your needs, from economy to luxury. Find the perfect car for your journey today.</p>

      {categories.filter(category => filteredCars.some(car => car.category === category)).map(category => (
        <section key={category} className="mb-12 bg-green-200 rounded p-3">
          <h2 className="text-2xl font-bold text-text mb-6">{category} Cars</h2>
          <ScrollMenu>
            {filteredCars.filter(car => car.category === category).map(car => (
              <Card car={car} key={car.id} onClick={handleCardClick} />
            ))}
          </ScrollMenu>
        </section>
      ))}

      <div ref={resultsRef}>
        {filteredCars.length === 0 && (
          <div className="text-center text-black text-bold w-fit m-auto p">
            <h1 className="text-xl bg-primary rounded -3">Oops, sorry we dont have that car!</h1>
            <img src="/src/assets/Monsters - Error 404.png" alt="Error 404" />
          </div>
        )}
      </div>

      {selectedCar && (
        <Suspense fallback={<div>Loading Car Details...</div>}>
          <CarDetailModal car={selectedCar} onClose={handleCloseModal} />
        </Suspense>
      )}
    </div>
  );
};

export default MainPage;
