import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryItemProps {
  image: string;
  category: string;
  title: string;
  description?: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ 
  image, 
  category, 
  title,
  description
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div 
        className="overflow-hidden rounded-lg cursor-pointer group relative"
        onClick={openModal}
      >
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <span className="text-primary-300 text-sm font-medium mb-1">{category}</span>
          <h3 className="text-white font-serif font-medium">{title}</h3>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 p-1 rounded-full bg-white/80 backdrop-blur-sm text-gray-900 hover:bg-white z-10"
                onClick={closeModal}
              >
                <X size={20} />
              </button>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-7/12">
                  <img 
                    src={image} 
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-5/12 flex flex-col">
                  <span className="text-primary-600 text-sm font-medium mb-1">{category}</span>
                  <h3 className="text-xl font-serif font-semibold mb-4">{title}</h3>
                  {description && (
                    <p className="text-gray-700 mb-6">{description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryItem;