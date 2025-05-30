import React, { useState } from 'react';
import { Calendar, Clock, ChevronRight, Check } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

interface Service {
  id: string;
  name: string;
  category: string;
  price: string;
  duration: string;
}

interface Stylist {
  id: string;
  name: string;
  specialty: string;
  image: string;
}

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

const BookingPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedStylist, setSelectedStylist] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  // Services data
  const services: Service[] = [
    { id: 'haircut-women', name: 'Women\'s Haircut & Style', category: 'Hair', price: '₹499 - ₹899', duration: '45-60 min' },
    { id: 'haircut-men', name: 'Men\'s Haircut & Style', category: 'Hair', price: '₹299 - ₹499', duration: '30-45 min' },
    { id: 'color', name: 'Hair Coloring', category: 'Color', price: '₹999 - ₹1,999', duration: '60-90 min' },
    { id: 'highlights', name: 'Highlights/Lowlights', category: 'Color', price: '₹1,299 - ₹2,499', duration: '90-120 min' },
    { id: 'facial', name: 'Classic Facial', category: 'Skin', price: '₹599 - ₹999', duration: '45-60 min' },
    { id: 'manicure', name: 'Manicure & Pedicure', category: 'Nails', price: '₹799 - ₹1,299', duration: '60-90 min' },
  ];

  // Stylists data
  const stylists: Stylist[] = [
    { id: 'rahul', name: 'Rahul Sharma', specialty: 'Hair Stylist', image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    { id: 'priya', name: 'Priya Singh', specialty: 'Color Specialist', image: 'https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    { id: 'arjun', name: 'Arjun Patel', specialty: 'Skin Care Expert', image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    { id: 'meera', name: 'Meera Reddy', specialty: 'Nail Artist', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600' },
  ];

  // Generate available dates (next 14 days)
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      
      // Format date as YYYY-MM-DD
      const formattedDate = date.toISOString().split('T')[0];
      
      // Format display date
      const displayDate = date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      });
      
      dates.push({
        value: formattedDate,
        display: displayDate,
      });
    }
    
    return dates;
  };

  const availableDates = generateDates();

  // Time slots
  const timeSlots: TimeSlot[] = [
    { id: '1', time: '9:00 AM', available: true },
    { id: '2', time: '10:00 AM', available: true },
    { id: '3', time: '11:00 AM', available: true },
    { id: '4', time: '12:00 PM', available: false },
    { id: '5', time: '1:00 PM', available: true },
    { id: '6', time: '2:00 PM', available: true },
    { id: '7', time: '3:00 PM', available: true },
    { id: '8', time: '4:00 PM', available: false },
    { id: '9', time: '5:00 PM', available: true },
    { id: '10', time: '6:00 PM', available: true },
    { id: '11', time: '7:00 PM', available: true },
  ];

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would submit the form data to your backend
    console.log({
      service: selectedService,
      stylist: selectedStylist,
      date: selectedDate,
      time: selectedTime,
      contactInfo
    });
    
    // Move to confirmation step
    handleNextStep();
  };

  // Get selected service and stylist details
  const serviceDetails = services.find(s => s.id === selectedService);
  const stylistDetails = stylists.find(s => s.id === selectedStylist);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section
  className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/book_hero.png')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  {/* Content */}
  <div className="relative container-custom">
    <div className="max-w-3xl mx-auto text-center text-white">
      <h1 className="font-serif font-bold text-4xl mb-6">Book Your Appointment</h1>
      <p className="text-xl mb-8">
        Schedule your visit to Vave Salon in a few simple steps
      </p>
    </div>
  </div>
</section>

      {/* Booking Process */}
      <section className="section">
        <div className="container-custom">
          {/* Booking steps */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-wrap justify-between items-center relative">
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -z-10"></div>
              
              {[1, 2, 3, 4, 5].map((step) => (
                <div 
                  key={step} 
                  className={`flex flex-col items-center ${
                    currentStep === step ? 'text-primary-600' : 
                    currentStep > step ? 'text-success-600' : 'text-gray-400'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 border-2 ${
                    currentStep === step ? 'border-primary-600 bg-primary-50' : 
                    currentStep > step ? 'border-success-600 bg-success-50' : 'border-gray-300 bg-white'
                  }`}>
                    {currentStep > step ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <span className="font-medium">{step}</span>
                    )}
                  </div>
                  <span className="text-xs font-medium text-center">
                    {step === 1 && 'Service'}
                    {step === 2 && 'Stylist'}
                    {step === 3 && 'Date & Time'}
                    {step === 4 && 'Your Details'}
                    {step === 5 && 'Confirmation'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Step 1: Choose Service */}
            {currentStep === 1 && (
              <div>
                <SectionHeading
                  title="Select a Service"
                  subtitle="Choose the service you'd like to book"
                  centered={false}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className={`border p-6 rounded-lg cursor-pointer transition-all ${
                        selectedService === service.id
                          ? 'border-primary-600 bg-primary-50 shadow-soft'
                          : 'border-gray-200 hover:border-primary-300 hover:shadow-soft'
                      }`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <span className="text-sm text-primary-600 font-medium block mb-1">
                            {service.category}
                          </span>
                          <h3 className="text-lg font-serif font-semibold">
                            {service.name}
                          </h3>
                        </div>
                        <div className={`w-5 h-5 rounded-full border border-gray-300 ${
                          selectedService === service.id 
                            ? 'bg-primary-600 border-primary-600' 
                            : 'bg-white'
                        }`}>
                          {selectedService === service.id && (
                            <Check className="w-4 h-4 text-white" />
                          )}
                        </div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-700">
                        <span>{service.price}</span>
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end">
                  <Button
                    variant="primary"
                    onClick={handleNextStep}
                    disabled={!selectedService}
                    className="flex items-center"
                  >
                    Continue <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Choose Stylist */}
            {currentStep === 2 && (
              <div>
                <SectionHeading
                  title="Select a Stylist"
                  subtitle="Choose your preferred stylist for your appointment"
                  centered={false}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {stylists.map((stylist) => (
                    <div
                      key={stylist.id}
                      className={`border p-4 rounded-lg cursor-pointer transition-all flex items-center ${
                        selectedStylist === stylist.id
                          ? 'border-primary-600 bg-primary-50 shadow-soft'
                          : 'border-gray-200 hover:border-primary-300 hover:shadow-soft'
                      }`}
                      onClick={() => setSelectedStylist(stylist.id)}
                    >
                      <img
                        src={stylist.image}
                        alt={stylist.name}
                        className="w-20 h-20 rounded-full object-cover mr-4"
                      />
                      <div className="flex-grow">
                        <h3 className="text-lg font-serif font-semibold">
                          {stylist.name}
                        </h3>
                        <p className="text-primary-600 text-sm">
                          {stylist.specialty}
                        </p>
                      </div>
                      <div className={`w-5 h-5 rounded-full border border-gray-300 ${
                        selectedStylist === stylist.id 
                          ? 'bg-primary-600 border-primary-600' 
                          : 'bg-white'
                      }`}>
                        {selectedStylist === stylist.id && (
                          <Check className="w-4 h-4 text-white" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="secondary"
                    onClick={handlePrevStep}
                  >
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleNextStep}
                    disabled={!selectedStylist}
                    className="flex items-center"
                  >
                    Continue <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Choose Date & Time */}
            {currentStep === 3 && (
              <div>
                <SectionHeading
                  title="Select Date & Time"
                  subtitle="Choose your preferred date and time for the appointment"
                  centered={false}
                />

                {/* Date Selection */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-primary-600" /> Select Date
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                    {availableDates.map((date) => (
                      <div
                        key={date.value}
                        className={`p-3 border rounded-lg text-center cursor-pointer transition-all ${
                          selectedDate === date.value
                            ? 'border-primary-600 bg-primary-50 text-primary-700'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                        onClick={() => setSelectedDate(date.value)}
                      >
                        <span className="block text-sm">
                          {date.display}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary-600" /> Select Time
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                    {timeSlots.map((slot) => (
                      <div
                        key={slot.id}
                        className={`p-3 border rounded-lg text-center transition-all ${
                          !slot.available 
                            ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed' 
                            : selectedTime === slot.id
                            ? 'border-primary-600 bg-primary-50 text-primary-700 cursor-pointer'
                            : 'border-gray-200 hover:border-primary-300 cursor-pointer'
                        }`}
                        onClick={() => slot.available && setSelectedTime(slot.id)}
                      >
                        <span className="block text-sm">
                          {slot.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="secondary"
                    onClick={handlePrevStep}
                  >
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleNextStep}
                    disabled={!selectedDate || !selectedTime}
                    className="flex items-center"
                  >
                    Continue <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Contact Details */}
            {currentStep === 4 && (
              <div>
                <SectionHeading
                  title="Your Details"
                  subtitle="Please provide your contact information"
                  centered={false}
                />

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={contactInfo.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={contactInfo.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactInfo.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={contactInfo.notes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Any specific requirements or information you'd like us to know..."
                    ></textarea>
                  </div>

                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                    <h3 className="text-lg font-medium mb-3">Booking Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service:</span>
                        <span className="font-medium">{serviceDetails?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Stylist:</span>
                        <span className="font-medium">{stylistDetails?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span className="font-medium">
                          {selectedDate && new Date(selectedDate).toLocaleDateString('en-US', {
                            weekday: 'long',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time:</span>
                        <span className="font-medium">
                          {timeSlots.find(slot => slot.id === selectedTime)?.time}
                        </span>
                      </div>
                      <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                        <span className="text-gray-600">Estimated Price:</span>
                        <span className="font-medium">{serviceDetails?.price}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={handlePrevStep}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={!contactInfo.name || !contactInfo.email || !contactInfo.phone}
                      className="flex items-center"
                    >
                      Confirm Booking <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 5: Confirmation */}
            {currentStep === 5 && (
              <div className="text-center">
                <div className="mb-8">
                  <div className="w-20 h-20 mx-auto bg-success-100 rounded-full flex items-center justify-center">
                    <Check className="w-10 h-10 text-success-600" />
                  </div>
                </div>

                <h2 className="text-2xl font-serif font-semibold mb-4">
                  Booking Confirmed!
                </h2>

                <p className="text-lg text-gray-700 mb-6">
                  Thank you for booking with Vave Salon. Your appointment has been scheduled successfully.
                </p>

                <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100 mb-8 max-w-md mx-auto text-left">
                  <h3 className="text-lg font-medium mb-3 text-center">Your Appointment Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service:</span>
                      <span className="font-medium">{serviceDetails?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Stylist:</span>
                      <span className="font-medium">{stylistDetails?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium">
                        {selectedDate && new Date(selectedDate).toLocaleDateString('en-US', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium">
                        {timeSlots.find(slot => slot.id === selectedTime)?.time}
                      </span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                      <span className="text-gray-600">Estimated Price:</span>
                      <span className="font-medium">{serviceDetails?.price}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-8">
                  A confirmation email has been sent to {contactInfo.email}.<br />
                  You will also receive a reminder 24 hours before your appointment.
                </p>

                <div className="flex justify-center">
                  <Button to="/" variant="primary">
                    Return to Home
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Policy Information */}
      {currentStep < 5 && (
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-serif font-semibold mb-6">Booking Policies</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-soft border border-gray-100">
                  <h4 className="font-medium text-lg mb-2">Cancellation Policy</h4>
                  <p className="text-gray-700">
                    We require at least 24 hours' notice for cancellations. Late cancellations or no-shows may be subject to a fee of up to 50% of the service value.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-soft border border-gray-100">
                  <h4 className="font-medium text-lg mb-2">Arrival Time</h4>
                  <p className="text-gray-700">
                    Please arrive 10-15 minutes before your scheduled appointment time to ensure we can start your service promptly.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-soft border border-gray-100">
                  <h4 className="font-medium text-lg mb-2">Payment Methods</h4>
                  <p className="text-gray-700">
                    We accept cash, credit/debit cards, and UPI payments. A 50% deposit may be required for certain services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </PageTransition>
  );
};

export default BookingPage;