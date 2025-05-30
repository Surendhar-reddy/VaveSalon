import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';

const NotFoundPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-24">
        <div className="text-center max-w-xl">
          <h1 className="text-9xl font-serif font-bold text-primary-200 mb-4">404</h1>
          <h2 className="text-3xl font-serif font-semibold mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Return to Home
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFoundPage;