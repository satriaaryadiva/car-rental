/* eslint-disable no-unused-vars */
// src/component/NAVBAR/Navbar.js
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Menggunakan react-icons untuk ikon menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`bg-primary text-white px-4 py-3 left-0 right-0 shadow-md fixed w-full top-0 z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          car <span className="text-yellow-500 bg-black rounded px-1">rental</span>
        </Link>
        <div className="hidden md:flex space-x-4">
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
      <div
        className={`md:hidden flex flex-col items-center overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
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
    </nav>
  );
};

export default Navbar;
