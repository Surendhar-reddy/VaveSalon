import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  price?: string;
  duration?: string;
  to?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  price,
  duration,
  to = '/booking',
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100 h-full transition-transform hover:translate-y-[-5px] hover:shadow-medium">
      <div className="flex flex-col h-full">
        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-serif font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            {price && (
              <div className="text-gray-900 font-semibold">
                Starting at {price}
              </div>
            )}
            {duration && (
              <div className="text-gray-500 text-sm">{duration}</div>
            )}
          </div>
          
          <Link
            to={to}
            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
          >
            Book Now <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;