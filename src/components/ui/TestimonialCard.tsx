import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role?: string;
  quote: string;
  rating: number;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  quote,
  rating,
  image,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100 h-full flex flex-col">
      <div className="flex items-center mb-4">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold">
            {name.charAt(0)}
          </div>
        )}
        <div className="ml-3">
          <h4 className="font-semibold text-gray-900">{name}</h4>
          {role && <p className="text-sm text-gray-500">{role}</p>}
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <blockquote className="text-gray-700 italic flex-grow">"{quote}"</blockquote>
    </div>
  );
};

export default TestimonialCard;