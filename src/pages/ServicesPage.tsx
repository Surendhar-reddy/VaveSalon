import React, { useState } from 'react';
import { 
  Scissors, 
  Paintbrush, 
  Sparkles, 
  Bath, 
  Flower2, 
  UserCheck, 
  PiggyBank, 
  Users 
} from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import Button from '../components/ui/Button';

interface ServiceCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface Service {
  id: string;
  category: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: React.ReactNode;
}

const ServicesPage: React.FC = () => {
  const categories: ServiceCategory[] = [
    { id: 'all', name: 'All Services', icon: <Scissors className="w-5 h-5" /> },
    { id: 'hair', name: 'Hair', icon: <Scissors className="w-5 h-5" /> },
    { id: 'color', name: 'Color & Highlights', icon: <Paintbrush className="w-5 h-5" /> },
    { id: 'facial', name: 'Facial & Skincare', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'nails', name: 'Nails', icon: <Bath className="w-5 h-5" /> },
    { id: 'spa', name: 'Spa & Massage', icon: <Flower2 className="w-5 h-5" /> },
    { id: 'men', name: 'Men\'s Grooming', icon: <UserCheck className="w-5 h-5" /> },
    { id: 'bridal', name: 'Bridal Services', icon: <Users className="w-5 h-5" /> },
    { id: 'packages', name: 'Packages', icon: <PiggyBank className="w-5 h-5" /> },
  ];

  const services: Service[] = [
    // Hair Services
    {
      id: 'haircut-women',
      category: 'hair',
      title: 'Women\'s Haircut & Style',
      description: 'Precision cut and styling tailored to your face shape, hair texture, and personal style.',
      price: '₹499 - ₹899',
      duration: '45-60 min',
      icon: <Scissors className="w-6 h-6" />,
    },
    {
      id: 'haircut-men',
      category: 'hair',
      title: 'Men\'s Haircut & Style',
      description: 'Clean, precise cut and styling to enhance your features and personal style.',
      price: '₹299 - ₹499',
      duration: '30-45 min',
      icon: <Scissors className="w-6 h-6" />,
    },
    {
      id: 'blowout',
      category: 'hair',
      title: 'Blowout & Styling',
      description: 'Professional blow dry and styling to give your hair volume, shine, and perfect finish.',
      price: '₹399 - ₹699',
      duration: '30-45 min',
      icon: <Scissors className="w-6 h-6" />,
    },
    
    // Color Services
    {
      id: 'all-over-color',
      category: 'color',
      title: 'All-Over Color',
      description: 'Full head color application to cover grays or change your hair color completely.',
      price: '₹999 - ₹1,999',
      duration: '60-90 min',
      icon: <Paintbrush className="w-6 h-6" />,
    },
    {
      id: 'highlights',
      category: 'color',
      title: 'Highlights/Lowlights',
      description: 'Dimensional color to add depth and brightness to your hair with strategic placement.',
      price: '₹1,299 - ₹2,499',
      duration: '90-120 min',
      icon: <Paintbrush className="w-6 h-6" />,
    },
    {
      id: 'balayage',
      category: 'color',
      title: 'Balayage/Ombré',
      description: 'Hand-painted highlights creating a natural, sun-kissed graduated effect.',
      price: '₹1,799 - ₹3,999',
      duration: '120-180 min',
      icon: <Paintbrush className="w-6 h-6" />,
    },
    
    // Facial Services
    {
      id: 'basic-facial',
      category: 'facial',
      title: 'Classic Facial',
      description: 'Deep cleansing, exfoliation, and hydration to refresh and revitalize your skin.',
      price: '₹599 - ₹999',
      duration: '45-60 min',
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      id: 'advanced-facial',
      category: 'facial',
      title: 'Advanced Facial Treatment',
      description: 'Targeted treatment with premium products addressing specific skin concerns.',
      price: '₹1,299 - ₹1,999',
      duration: '60-75 min',
      icon: <Sparkles className="w-6 h-6" />,
    },
    
    // Nail Services
    {
      id: 'manicure',
      category: 'nails',
      title: 'Classic Manicure',
      description: 'Nail shaping, cuticle care, hand massage, and polish application.',
      price: '₹299 - ₹499',
      duration: '30-45 min',
      icon: <Bath className="w-6 h-6" />,
    },
    {
      id: 'pedicure',
      category: 'nails',
      title: 'Deluxe Pedicure',
      description: 'Foot soak, exfoliation, nail care, relaxing foot massage, and polish application.',
      price: '₹499 - ₹799',
      duration: '45-60 min',
      icon: <Bath className="w-6 h-6" />,
    },
    
    // Spa Services
    {
      id: 'massage',
      category: 'spa',
      title: 'Relaxing Massage',
      description: 'Therapeutic massage to relieve tension and promote relaxation.',
      price: '₹899 - ₹1,499',
      duration: '60-90 min',
      icon: <Flower2 className="w-6 h-6" />,
    },
    
    // Men's Services
    {
      id: 'beard-trim',
      category: 'men',
      title: 'Beard Grooming',
      description: 'Precision trimming and shaping to maintain or create your perfect beard style.',
      price: '₹199 - ₹399',
      duration: '15-30 min',
      icon: <UserCheck className="w-6 h-6" />,
    },
    
    // Bridal Services
    {
      id: 'bridal-makeup',
      category: 'bridal',
      title: 'Bridal Makeup & Hairstyling',
      description: 'Complete bridal beauty service creating your perfect wedding day look.',
      price: '₹4,999 - ₹9,999',
      duration: '120-180 min',
      icon: <Users className="w-6 h-6" />,
    },
    
    // Packages
    {
      id: 'complete-makeover',
      category: 'packages',
      title: 'Complete Makeover Package',
      description: 'Comprehensive beauty treatment including haircut, color, facial, and nail care.',
      price: '₹3,999 - ₹6,999',
      duration: '180-240 min',
      icon: <PiggyBank className="w-6 h-6" />,
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <PageTransition>
      <section
  className="pt-24 pb-16 md:pt-32 md:pb-24 bg-primary-50 bg-cover bg-center bg-no-repeat"

  style={{ backgroundImage: "url('/services_hero1.jpg')" }}
>
  
  <div className="container-custom">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="font-serif font-bold text-gray-900 mb-6">Our Services</h1>
      <p className="text-xl text-gray-700 mb-8">
        Discover our comprehensive range of premium beauty and grooming services
      </p>
    </div>
  </div>
</section>


      {/* Services Categories */}
      <section className="py-8 border-b border-gray-200 sticky top-16 bg-white z-30 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                price={service.price}
                duration={service.duration}
              />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No services found in this category. Please select another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Custom Services */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-4">
                Customized Services for Special Occasions
              </h2>
              <div className="h-1 w-24 bg-primary-500 mb-6"></div>
              <p className="text-gray-700 mb-4">
                At Vave Salon, we understand that special occasions require special attention. Our team is experienced in creating stunning looks for weddings, festivals, parties, and other important events.
              </p>
              <p className="text-gray-700 mb-6">
                Contact us to discuss your specific requirements, and we'll create a customized package to help you look and feel your best on your special day.
              </p>
              <Button to="/contact" variant="primary">
                Inquire About Custom Services
              </Button>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4969888/pexels-photo-4969888.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Bridal makeup and styling"
                className="rounded-lg shadow-medium w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services"
          />

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100">
                <h3 className="text-xl font-serif font-semibold mb-3">Do I need to make an appointment?</h3>
                <p className="text-gray-700">
                  While we accept walk-ins when possible, we strongly recommend making an appointment to ensure we can accommodate you at your preferred time and with your preferred stylist.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100">
                <h3 className="text-xl font-serif font-semibold mb-3">How early should I arrive for my appointment?</h3>
                <p className="text-gray-700">
                  We recommend arriving 10-15 minutes before your scheduled appointment to allow time for consultation and preparation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100">
                <h3 className="text-xl font-serif font-semibold mb-3">What is your cancellation policy?</h3>
                <p className="text-gray-700">
                  We request at least 24 hours' notice for cancellations. Late cancellations or no-shows may be subject to a fee.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100">
                <h3 className="text-xl font-serif font-semibold mb-3">Do you offer gift cards?</h3>
                <p className="text-gray-700">
                  Yes, we offer gift cards in various denominations, making them perfect presents for loved ones. They can be purchased in-salon or by contacting us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Ready to Book Your Service?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Experience the premium care and results that have made Vevesh Saloon the preferred choice in Chengacharla.
            </p>
            <Button 
              to="/booking" 
              variant="primary" 
              size="lg"
              className="bg-primary-800 text-primary-700"
            >
              Book Now
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ServicesPage;