import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Scissors } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Scissors
              className={`w-6 h-6 mr-2 ${
                isScrolled ? 'text-primary-600' : 'text-primary-500'
              }`}
            />
            <span
              className={`text-xl font-serif font-bold tracking-wide ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Vave Salon
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''} ${
                  !isScrolled && 'text-white hover:text-white hover:bg-white/20'
                }`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''} ${
                  !isScrolled && 'text-white hover:text-white hover:bg-white/20'
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''} ${
                  !isScrolled && 'text-white hover:text-white hover:bg-white/20'
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''} ${
                  !isScrolled && 'text-white hover:text-white hover:bg-white/20'
                }`
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''} ${
                  !isScrolled && 'text-white hover:text-white hover:bg-white/20'
                }`
              }
            >
              Contact
            </NavLink>
            <Link
              to="/booking"
              className={`btn ${
                isScrolled
                  ? 'btn-primary'
                  : 'bg-white text-primary-700 hover:bg-white/90'
              } ml-4`}
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X
                className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="px-4 py-2 space-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium rounded-md ${
                  isActive
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium rounded-md ${
                  isActive
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium rounded-md ${
                  isActive
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium rounded-md ${
                  isActive
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium rounded-md ${
                  isActive
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
            <Link
              to="/booking"
              className="block w-full btn btn-primary text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;