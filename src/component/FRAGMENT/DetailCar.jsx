/* eslint-disable react/prop-types */
 
const DetailCard = ({ car, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-96 animate__animated animate__fadeIn">
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            &times;
          </button>
          <img src={car.image} alt={car.name} className="w-full h-60 object-cover mb-4 rounded" />
          <h3 className="text-2xl font-semibold text-gray-800">{car.name}</h3>
          <p className="text-gray-600 mt-2"><span className="font-semibold">Price:</span> {car.price}</p>
          <p className="text-gray-600"><span className="font-semibold">Seats:</span> {car.seats}</p>
          <p className="text-gray-600"><span className="font-semibold">Transmission:</span> {car.transmission}</p>
          <p className="text-gray-600"><span className="font-semibold">Category:</span> {car.category}</p>
          <p className="text-gray-600"><span className="font-semibold">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae.</p>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Rent Now</button>
        </div>
      </div>
    );
  };

  export default DetailCard;