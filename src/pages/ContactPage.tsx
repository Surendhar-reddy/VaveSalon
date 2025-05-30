import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

const ContactPage: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section
  className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/contact_hero.jpg?auto=compress&cs=tinysrgb&w=1600')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  {/* Content */}
  <div className="relative container-custom">
    <div className="max-w-3xl mx-auto text-center text-white">
      <h1 className="font-serif font-bold text-4xl mb-6">Contact Us</h1>
      <p className="text-xl mb-8">
        We'd love to hear from you. Reach out for appointments, inquiries, or feedback
      </p>
    </div>
  </div>
</section>


      {/* Contact Information */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif font-semibold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Appointment Inquiry"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="I would like to inquire about..."
                    required
                  ></textarea>
                </div>
                <div>
                  <Button type="submit" variant="primary" className="w-full sm:w-auto flex items-center justify-center">
                    <Send className="w-4 h-4 mr-2" /> Send Message
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-serif font-semibold mb-6">Contact Information</h2>
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Our Location</h3>
                      <p className="text-gray-700">Radhika Nagar, Chengacharla, Telangana, India</p>
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 mt-1 inline-block"
                      >
                        View on Map
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Phone Number</h3>
                      <a
                        href="tel:+919876543210"
                        className="text-gray-700 hover:text-primary-600"
                      >
                        +91 9652898935
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email Address</h3>
                      <a
                        href="mailto:info@veveshsaloon.com"
                        className="text-gray-700 hover:text-primary-600"
                      >
                        info@veveshsaloon.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <Clock className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Working Hours</h3>
                      <p className="text-gray-700">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                      <p className="text-gray-700">Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="tel:+919876543210"
                  className="bg-primary-600 text-white p-4 rounded-lg flex flex-col items-center text-center hover:bg-primary-700 transition-colors"
                >
                  <Phone className="w-6 h-6 mb-2" />
                  <span className="font-medium">Call Us</span>
                </a>
                <a
                  href="https://wa.me/9652898935"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-success-600 text-white p-4 rounded-lg flex flex-col items-center text-center hover:bg-success-700 transition-colors"
                >
                  <MessageSquare className="w-6 h-6 mb-2" />
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-50 pt-16 pb-0">
        <div className="container-custom mb-8">
          <SectionHeading
            title="Find Us"
            subtitle="Visit our salon at the heart of Chengacharla"
          />
        </div>
        
        <div className="w-full h-96 bg-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.571326157325!2d78.596856!3d17.4323481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9fb944f0cb3d%3A0xd99cf5c323ebb0f9!2sRadhika%20nagar%20colony!5e0!3m2!1sen!2sin!4v1748578229285!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Vevesh Saloon Location"
          ></iframe>
        </div>
      </section>
    </PageTransition>
  );
};

export default ContactPage;