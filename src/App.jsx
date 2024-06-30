/* eslint-disable react/prop-types */
 
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useInView } from 'react-intersection-observer';
import cars from './Service/RentData.service';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import 'animate.css';

const Card = ({ car }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Triggers when 10% of the card is visible
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg shadow-lg p-6 mr-4 w-64 ${
        inView ? 'animate__animated animate__fadeInUp' : ''
      }`}
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
  const categories = [...new Set(cars.map(car => car.category))];

  return (
    <div className="min-h-screen bg-gray-300 p-6">
      <header className="mb-12 text-center bg-green-400 p-4 mx-0">
        <h1 className="text-4xl font-bold text-gray-800">Car Rental Service</h1>
        <p className="text-gray-600 mt-2">Find the best cars for rent at affordable prices.</p>
      </header>
      {categories.map(category => (
        <section key={category} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{category}</h2>
          <ScrollMenu>
            {cars.filter(car => car.category === category).map(car => (
              <Card car={car} key={car.id} />
            ))}
          </ScrollMenu>
        </section>
      ))}
    </div>
  );
}

export default App;
