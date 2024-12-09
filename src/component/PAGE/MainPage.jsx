import { useEffect, useRef, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import 'animate.css';
import cars from '../../Service/RentData.service';
import { setSelectedCar, clearSelectedCar } from '../../redux/slicer/carSlicer.jsx';
import Banner from '../ATOM/Banner.jsx';
import Navbar from '../FRAGMENT/Navbar.jsx';
import Card from '../ATOM/CardCar.jsx';

const CarDetailModal = lazy(() => import('../FRAGMENT/DetailCar.jsx'));

const MainPage = () => {
  const dispatch = useDispatch();
  const { searchTerm, selectedCategory, selectedCar } = useSelector((state) => state.car);
  const resultsRef = useRef(null);

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
  }, [searchTerm]);

  return (
    <div className="min-h-screen scroll-smooth bg-background pt-20">
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <Navbar />
      </Suspense>
      <Banner>
         
        <button className="bg-primary font-semibold text-white px-4 py-2 rounded-full animate__animated animate__zoomIn" onClick={() => resultsRef.current.scrollIntoView({ behavior: 'smooth' })}>
          Start Exploring
        </button>
      </Banner>
      <div className="bg-secondary sm:sticky sm:top-0 sm:z-40 text-center py-4">
        <h1 className="text-2xl font-bold text-white mb-2">Discover Our Wide Selection of Rental Cars</h1>
        
        <p className="text-white">Book now and enjoy a hassle-free rental experience!</p>
      </div>

      {categories.filter(category => filteredCars.some(car => car.category === category)).map(category => (
        <section key={category} className="mb-12  bg-green-200 rounded p-3">
          <h2 className="text-2xl font-bold text-text mb-6 ml-8">{category} Cars</h2>
          <ScrollMenu>
            {filteredCars.filter(car => car.category === category).map(car => (
              <Card car={car} key={car.id} onClick={handleCardClick} />
            ))}
          </ScrollMenu>
        </section>
      ))}

      <div ref={resultsRef}>
        {filteredCars.length === 0 && (
          <div className="text-center flex flex-col  text-black text-bold bg-secondary pt-4 max-w-full items-center justify-center m-auto p">
            <h1 className="text-xl rounded -3">Oops, sorry we dont have that car!</h1>
            <img loading='lazy' src="/src/assets/Monsters - Error 404.png" alt="Error 404" />
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
