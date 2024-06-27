import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';

const Navbar = () => {
  // State for toggling the mobile menu
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div data-aos="fade-down" className="fixed top-0 right-0 w-full bg-black/10 backdrop-blur-sm z-[99]">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
          {/* Logo */}
          <div className="flex text-white items-center gap-4 font-bold text-2xl">
            <img src={Logo} alt="logo" className="w-10"/>
            <span>Space X</span>
          </div>
          {/* Navbar links for larger screens */}
          <div className="hidden md:flex md:text-white md:items-center md:gap-6 md:text-xl md:h-16">
            <Link to='/about'>
              <a href="#">About</a>
            </Link>
            <Link to='/technology'>
              <a href="#">Technology</a>
            </Link>
            <Link to='/galaxy'>
              <a href="#">Galaxy</a>
            </Link>
            <Link to='/sateliite'>
              <a href="#">Satellite</a>
            </Link>
            <Link to='/login'>
              <div>
                  <button className="text-white border-2 border-white px-3 py-1 rounded-md">Login</button>
              </div>
            </Link>
          </div>
        </div>
        {/* Sidebar for smaller screens */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden text-white absolute top-full left-0 right-0 bg-black/20 z-[9999] px-4 pt-4 pb-2`}>
          <ul className="flex flex-col gap-4">
            <Link to='/about'>
              <li>
                <a href="#" onClick={toggleMenu}>About</a>
              </li>
            </Link>
            <Link to='/technology'>
              <li>
                <a href="#" onClick={toggleMenu}>Technology</a>
              </li>
            </Link>
            <Link to='/galaxy'>
              <li>
                <a href="#" onClick={toggleMenu}>Galaxy</a>
              </li>
            </Link>
            <Link to='/sateliite'>
              <li>
                <a href="#" onClick={toggleMenu}>Satellite</a>
              </li>
            </Link>
            <Link to='/login'>
              <div>
                <button className="text-white border-2 border-white px-3 py-1 rounded-md">Login</button>
              </div>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
