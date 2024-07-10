import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setRentalDetails } from '../../redux/slicer/RentalSlicer';
import cars from '../../Service/RentData.service';

const RentalForm = () => {
  const { carId } = useParams();
  const car = cars.find(car => car.id === parseInt(carId));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [days, setDays] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (car && car.price) {
      const price = car.price * days;
      setTotalPrice(price);
    } else {
      setTotalPrice(0);
    }
  }, [car, days]);

  const handleDaysIncrement = () => {
    setDays(prevDays => prevDays + 1);
  };

  const handleDaysDecrement = () => {
    if (days > 1) {
      setDays(prevDays => prevDays - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setRentalDetails({ car, days }));
    navigate(`/payment/${carId}`);
  };

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="min-h-screen bg-green-200 p-6 flex justify-center items-center">
      <div className="bg-white border-2 border-secondary rounded-lg p-6 shadow-lg w-full max-w-lg">
        <div className="flex flex-col  ">
          <img src={car.image} alt={car.name} className="w-full h-64 object-cover rounded-lg mb-6" />
          <h1 className="text-4xl font-bold text-text mb-6  ">{car.name}</h1>
          <p className="text-gray-600 mb-2"><span className="font-semibold">descripsi : </span> {car.description}</p>
          <p className="text-gray-600 mb-2"><span className="font-semibold">Transmission:</span> {car.transmission}</p>
          <p><span className="font-semibold text-left">Harga per hari</span> Rp {car.price.toLocaleString('id-ID')}</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <span className="text-text mr-4">Total hari :</span>
            <button type="button" onClick={handleDaysDecrement} className="bg-gray-200 text-gray-700 px-3 py-1 rounded">-</button>
            <span className="mx-2">{days}</span>
            <button type="button" onClick={handleDaysIncrement} className="bg-gray-200 text-gray-700 px-3 py-1 rounded">+</button>
          </div>
          <p className="mb-2"><span className="font-semibold">Total Price:</span> Rp {totalPrice.toLocaleString('id-ID')}</p>
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RentalForm;
