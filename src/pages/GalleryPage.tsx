import React, { useState } from 'react';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import GalleryItem from '../components/ui/GalleryItem';
import Button from '../components/ui/Button';

interface GalleryImage {
  id: string;
  image: string;
  category: string;
  title: string;
  description?: string;
}

const GalleryPage: React.FC = () => {
  // Gallery categories
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'haircuts', name: 'Haircuts' },
    { id: 'coloring', name: 'Coloring' },
    { id: 'styling', name: 'Styling' },
    { id: 'makeup', name: 'Makeup' },
    { id: 'salon', name: 'Salon' }
  ];

  // Gallery images data
  const galleryImages: GalleryImage[] = [
    {
      id: '1',
      image: '/galary_1.jpg?auto=compress&cs=tinysrgb&w=1600',
      category: 'haircuts',
      title: 'Modern Bob Cut',
      description: 'A sleek and modern bob haircut that frames the face beautifully and adds volume and movement.'
    },
    {
      id: '2',
      image: '/galary_2.jpg?auto=compress&cs=tinysrgb&w=1600',
      category: 'haircuts',
      title: 'Layered Long Cut',
      description: 'Long layered haircut that adds dimension and movement to thick hair.'
    },
    {
      id: '3',
      image: 'galary_3.jpg?auto=compress&cs=tinysrgb&w=1600',
      category: 'coloring',
      title: 'Caramel Highlights',
      description: 'Warm caramel highlights that add dimension and brightness to dark hair.'
    },
    {
      id: '4',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'coloring',
      title: 'Balayage Technique',
      description: 'Hand-painted balayage creating a natural, sun-kissed effect with seamless transition.'
    },
    {
      id: '5',
      image: '/galary_5.jpg?auto=compress&cs=tinysrgb&w=1600',
      category: 'styling',
      title: 'Elegant Updo',
      description: 'Sophisticated updo perfect for special occasions and formal events.'
    },
    {
      id: '6',
      image: '/services_hero.avif?auto=compress&cs=tinysrgb&w=1600',
      category: 'styling',
      title: 'Beach Waves',
      description: 'Effortless beach waves that add texture and movement to medium-length hair.'
    },
    {
      id: '7',
      image: 'https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'makeup',
      title: 'Natural Glam Makeup',
      description: 'Subtle yet glamorous makeup enhancing natural features with a luminous finish.'
    },
    {
      id: '8',
      image: 'https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'makeup',
      title: 'Evening Makeup Look',
      description: 'Dramatic evening makeup with smokey eyes and defined contours.'
    },
    {
      id: '9',
      image: '/galary_6.png?auto=compress&cs=tinysrgb&w=1600',
      category: 'salon',
      title: 'Salon Interior',
      description: 'Our modern and welcoming salon space designed for comfort and relaxation.'
    },
    {
      id: '10',
      image: '/galary_7.jpg?auto=compress&cs=tinysrgb&w=1600',
      category: 'salon',
      title: 'Styling Station',
      description: 'Professional styling stations equipped with top-quality tools and products.'
    },
    {
      id: '11',
      image: '/galary_8.jpg?auto=compress&cs=tinysrgb&w=1600',
      category: 'salon',
      title: 'Product Display',
      description: 'Premium hair and beauty products used in our services and available for purchase.'
    },
    {
      id: '12',
      image: '/galary_9.png?auto=compress&cs=tinysrgb&w=1600',
      category: 'salon',
      title: 'Relaxation Area',
      description: 'Comfortable waiting area where clients can relax before their appointments.'
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(image => image.category === activeCategory);

  return (
    <PageTransition>
      {/* Hero Section */}
     <section
  className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/galary_hero.jpg?auto=compress&cs=tinysrgb&w=1600')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  {/* Content */}
  <div className="relative container-custom">
    <div className="max-w-3xl mx-auto text-center text-white">
      <h1 className="font-serif font-bold text-4xl mb-6">Our Gallery</h1>
      <p className="text-xl mb-8">
        Browse through our portfolio of haircuts, styling, coloring, and more
      </p>
    </div>
  </div>
</section>


      {/* Gallery Categories */}
      <section className="py-8 border-b border-gray-200 sticky top-16 bg-white z-30 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((item) => (
              <GalleryItem
                key={item.id}
                image={item.image}
                category={categories.find(cat => cat.id === item.category)?.name || item.category}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No images found in this category. Please select another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Before & After */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Before & After Transformations"
            subtitle="See the stunning transformations created by our talented stylists"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-center mb-2 font-medium">Before</p>
                  <img
                    src="/hair_make_over_b.png?auto=compress&cs=tinysrgb&w=1600"
                    alt="Before transformation"
                    className="rounded-md w-full h-64 object-cover"
                  />
                </div>
                <div>
                  <p className="text-center mb-2 font-medium">After</p>
                  <img
                    src="/hair_make_over_a.png?auto=compress&cs=tinysrgb&w=1600"
                    alt="After transformation"
                    className="rounded-md w-full h-64 object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Color Makeover</h3>
              <p className="text-gray-700">
                Complete color transformation from dull brown to vibrant blonde highlights, creating dimension and brightness.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-soft">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-center mb-2 font-medium">Before</p>
                  <img
                    src="/bride_make_b.png?auto=compress&cs=tinysrgb&w=1600"
                    alt="Before transformation"
                    className="rounded-md w-full h-64 object-cover"
                  />
                </div>
                <div>
                  <p className="text-center mb-2 font-medium">After</p>
                  <img
                    src="/bride_make_a.png?auto=compress&cs=tinysrgb&w=1600"
                    alt="After transformation"
                    className="rounded-md w-full h-64 object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Style Transformation</h3>
              <p className="text-gray-700">
                From long, unstructured hair to a chic, textured bob that enhances facial features and adds volume.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Ready for Your Transformation?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Book an appointment with our expert stylists and experience the Vave difference.
            </p>
            <Button 
              to="/booking" 
              variant="primary" 
              size="lg"
              className="bg-primary-800 text-primary-700 "
            >
              Book Your Appointment
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default GalleryPage;