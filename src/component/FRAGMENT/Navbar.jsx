// src/component/NAVBAR/Navbar.js
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, setSelectedCategory } from '../../redux/slicer/carSlicer';
import cars from '../../Service/RentData.service';

const Navbar = () => {
 
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [searchTimeout, setSearchTimeout] = useState(null);
  
  const dispatch = useDispatch();
  const { searchTerm, selectedCategory } = useSelector((state) => state.car);
  
  const handleSearch = (event) => {
    const value = event.target.value;

    if (searchTimeout) {
      clearTimeout(searchTimeout); // Clear the previous timeout
    }

    setSearchTimeout(
      setTimeout(() => {
        dispatch(setSearchTerm(value));
      }, 0) // 2-second delay
    );
  };

  const handleCategoryChange = (category) => {
    dispatch(setSelectedCategory(category));
  };

  const categories = ['All', ...new Set(cars.map(car => car.category))];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`bg-primary font-sans text-white px-4 py-3 left-0 right-0 shadow-md fixed w-full top-0 z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          car <span className="text-yellow-500 bg-black rounded px-1">rental</span>
        </Link>
        <div className="sticky top-0  rounded-lg font-semibold p-1 flex text-xs justify-end text-black shadow">
          
          <input
            type="text"
            placeholder="Search cars..."
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 border border-primary rounded 2xl:w-1/3 w-1/2"
          />
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="border border-primary rounded w-fit"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
