/* eslint-disable react/prop-types */
 
import { useNavigate } from 'react-router-dom';

const CarDetailModal = ({ car, onClose }) => {
  const navigate = useNavigate();

  if (!car) return null;

  const handleRent = () => {
    navigate(`/rent/${car.id}`);
  };

  return (
    <div className="fixed inset-0 overflow-auto bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-screen-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-600  rounded     font-bold hover:text-gray-800 text-2xl focus:outline-none"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{car.name}</h2>
        <img src={car.image} alt={car.name} className=" w-full md:w-4/5 m-auto h-64 object-cover mb-4 rounded " />
        <p className="text-gray-600 mb-2"><span className="font-semibold">Keterangan :</span> {car.description || "No description available."}</p>
        <p className="text-gray-600 mb-2"><span className="font-semibold">Harga harian :</span> Rp{car.price.toLocaleString('id-ID')}</p>
        <p className="text-gray-600 mb-2"><span className="font-semibold">Seats :</span> {car.seats}</p>
        <p className="text-gray-600 mb-2"><span className="font-semibold">Transmission:</span> {car.transmission}</p>
        <p className="text-gray-600"><span className="font-semibold">Category:</span> {car.category}</p>
        <button onClick={handleRent} className="bg-primary font-bold text-white px-4 py-2 w-full  hover:bg-green-600 ease-in-out  transform duration-300 rounded mt-4">
          Rent
        </button>
      </div>
    </div>
  );
};

export default CarDetailModal;
