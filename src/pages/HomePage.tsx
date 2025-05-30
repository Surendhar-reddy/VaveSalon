import React from 'react';

import { ChevronDown, Scissors, SprayCan as Spray, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import Button from '../components/ui/Button';

const HomePage: React.FC = () => {
  const featuredServices = [
    {
      title: 'Haircut & Styling',
      description: 'Precision cuts and styling tailored to enhance your unique features and personal style.',
      icon: <Scissors className="w-6 h-6" />,
      price: '₹299',
      duration: '30-45 min',
    },
    {
      title: 'Hair Coloring',
      description: 'From subtle highlights to bold transformations, our expert colorists bring your vision to life.',
      icon: <Spray className="w-6 h-6" />,
      price: '₹999',
      duration: '60-120 min',
    },
    {
      title: 'Facial Treatments',
      description: 'Rejuvenate your skin with our premium facial treatments customized for your skin type.',
      icon: <Star className="w-6 h-6" />,
      price: '₹599',
      duration: '45-60 min',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Regular Customer',
      quote: 'I\'ve been visiting Vevesh Saloon for over a year now and the experience keeps getting better. Their attention to detail and personalized service is unmatched!',
      rating: 5,
    },
    {
      name: 'Rahul Patel',
      role: 'First-time Client',
      quote: 'As someone who\'s very particular about haircuts, I was amazed by the skill and patience of the stylists. They took the time to understand exactly what I wanted.',
      rating: 5,
    },
    {
      name: 'Ananya Reddy',
      role: 'Wedding Customer',
      quote: 'Vevesh Saloon did an incredible job for my wedding day look. Everyone was complimenting my hair and makeup throughout the event!',
      rating: 5,
    },
    {
      name: 'Karthik Singh',
      role: 'Monthly Subscriber',
      quote: 'Their beard grooming service is the best I\'ve found in the area. Professional, consistent and always leave looking sharp!',
      rating: 4,
    },
  ];

  const heroImages = [
    'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <img
                  src={image}
                  alt={`Salon atmosphere ${index + 1}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4 md:px-12">
                  <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="font-serif font-bold mb-6"
                  >
                    Experience Elegance and Style
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-xl md:text-2xl max-w-3xl mb-8"
                  >
                    Where Beauty Meets Precision
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <Button 
                      to="/booking"
                      variant="primary"
                      size="lg"
                      className="bg-primary-600 hover:bg-primary-700 text-white"
                    >
                      Book Now
                    </Button>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center items-center">
          <a
            href="#about"
            className="flex flex-col items-center text-white animate-bounce"
            aria-label="Scroll down"
          >
            <span className="text-sm mb-1 font-light">Discover More</span>
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* About Section Preview */}
      <section id="about" className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                Welcome to Vevesh Saloon
              </h2>
              <div className="h-1 w-24 bg-primary-500 mb-6"></div>
              <p className="text-lg text-gray-700 mb-6">
                Established in 2025, Vave Salon has become Chengacharla's premier destination 
                for premium hair and beauty services. We believe that everyone deserves to look 
                and feel their best.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our team of skilled professionals is dedicated to providing exceptional service 
                using only the finest products and techniques. We create a welcoming atmosphere 
                where clients can relax and rejuvenate.
              </p>
              <Button to="/about" variant="primary">
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3997385/pexels-photo-3997385.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Salon interior"
                className="rounded-lg shadow-medium w-full h-auto"
              />
              <div className="absolute -bottom-8 -left-8 p-6 bg-white rounded-lg shadow-soft md:max-w-xs hidden md:block">
                <p className="font-serif text-xl text-primary-700 mb-2">10+ Years</p>
                <p className="text-gray-700">Of excellence in providing premium salon services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Our Premium Services"
            subtitle="Discover our range of high-quality salon services designed to enhance your natural beauty"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                price={service.price}
                duration={service.duration}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/services" variant="secondary">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-primary-600 text-white">
        <div className="container-custom">
          <SectionHeading
            title="Why Choose Us"
            subtitle="We're committed to excellence in every aspect of our service"
            light
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-4">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Expert Stylists</h3>
              <p className="text-gray-200">
                Our team consists of experienced professionals who stay updated with the latest trends and techniques.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-4">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Premium Products</h3>
              <p className="text-gray-200">
                We use only high-quality, salon-grade products to ensure the best results for our clients.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-4">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Hygienic Environment</h3>
              <p className="text-gray-200">
                We maintain the highest standards of cleanliness and sanitization for your safety and comfort.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-4">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Personalized Service</h3>
              <p className="text-gray-200">
                We take the time to understand your unique needs and preferences for truly customized results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Hear from our satisfied customers about their experiences at Vevesh Saloon"
          />

          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  quote={testimonial.quote}
                  rating={testimonial.rating}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-accent-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Ready to Experience Vave Salon?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Book your appointment today and let our experts enhance your natural beauty.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/booking" variant="primary" size="lg">
                Book an Appointment
              </Button>
              <Button to="/contact" variant="secondary" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HomePage;