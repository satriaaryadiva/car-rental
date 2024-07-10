// src/component/NAVBAR/Navbar.js
import   { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Menggunakan react-icons untuk ikon menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary text-white px-4 py-3 left-0 right-0 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Car Rental Service
        </Link>
        <div className="hidden md:flex space-x-4   border-orange-600  border-b-4  ">
          <Link to="/" className="px-4 py-2 hover:bg-secondary hover:text-primary rounded transition">
            Home
          </Link>
          <Link to="/about" className="px-4 py-2 hover:bg-secondary hover:text-primary rounded transition">
            About
          </Link>
          <Link to="/contact" className="px-4 py-2 hover:bg-secondary hover:text-primary rounded transition">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <Link to="/" onClick={toggleMenu} className="px-4 py-2 hover:bg-secondary hover:text-primary rounded transition">
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu} className="px-4 py-2 hover:bg-secondary hover:text-primary rounded transition">
            About
          </Link>
          <Link to="/contact" onClick={toggleMenu} className="px-4 py-2 hover:bg-secondary hover:text-primary rounded transition">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
