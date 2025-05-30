import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Scissors
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand and About */}
          <div>
            <div className="flex items-center mb-4">
              <Scissors className="w-6 h-6 mr-2 text-primary-400" />
              <h3 className="text-xl font-serif font-bold">Vave Salon</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Experience elegance and style at our premium unisex salon, where beauty meets precision.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/booking"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-4 border-b border-gray-700 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Hair Styling
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Hair Coloring
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Facials & Skin Care
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Manicure & Pedicure
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Bridal Packages
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Beard Grooming
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-4 border-b border-gray-700 pb-2">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 mr-3 text-primary-400 flex-shrink-0" />
                <span className="text-gray-400">
                  Radhika Nagar, Chengacharla,Telangana, India
                </span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 mr-3 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  +91 9652898935
                </a>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 mr-3 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:info@veveshsaloon.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  info@veveshsaloon.com
                </a>
              </li>
              <li className="flex">
                <Clock className="w-5 h-5 mr-3 text-primary-400 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Mon-Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>
            &copy; {currentYear} Vave Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;