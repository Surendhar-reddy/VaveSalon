import React from 'react';
import { Scissors, Award, Heart, Clock } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import TeamMemberCard from '../components/ui/TeamMemberCard';
import Button from '../components/ui/Button';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Rahul Sharma',
      role: 'Founder & Master Stylist',
      bio: 'With over 15 years of experience, Rahul brings creativity and precision to every haircut and style.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600',
      socialLinks: {
        instagram: 'https://instagram.com',
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      name: 'Priya Singh',
      role: 'Senior Hair Colorist',
      bio: 'Priya specializes in transformative color techniques that enhance your natural beauty and personality.',
      image: 'https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=1600',
      socialLinks: {
        instagram: 'https://instagram.com',
        facebook: 'https://facebook.com',
      },
    },
    {
      name: 'Arjun Patel',
      role: 'Skin Care Specialist',
      bio: 'Arjun\'s expertise in advanced skin treatments helps clients achieve their best skin health and glow.',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600',
      socialLinks: {
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      name: 'Meera Reddy',
      role: 'Nail Artist',
      bio: 'Meera creates stunning nail art and provides immaculate manicure and pedicure services.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600',
      socialLinks: {
        instagram: 'https://instagram.com',
        facebook: 'https://facebook.com',
      },
    },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section
  className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/about_hero.jpg?auto=compress&cs=tinysrgb&w=1600')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  {/* Content */}
  <div className="relative container-custom">
    <div className="max-w-3xl mx-auto text-center text-white">
      <h1 className="font-serif font-bold text-4xl mb-6">About Vave Salon</h1>
      <p className="text-xl mb-8">
        Where passion for beauty meets professional excellence
      </p>
    </div>
  </div>
</section>


      {/* Our Story */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-4">Our Story</h2>
              <div className="h-1 w-16 bg-primary-500 mb-6"></div>
              <p className="text-gray-700 mb-4">
                Vave Salon was founded in 2015 by Rahul Sharma, a passionate hair stylist with a vision to create a premium beauty destination in Chengacharla. What started as a small, three-chair salon has grown into a full-service beauty destination that serves hundreds of satisfied clients each month.
              </p>
              <p className="text-gray-700 mb-4">
                The name "Vave" comes from the Sanskrit word for "distinction" – reflecting our commitment to standing out through exceptional service, attention to detail, and creating unique looks tailored to each client's personality and lifestyle.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, we have carefully built a team of talented professionals who share our passion for beauty and dedication to continuous learning and improvement. Each team member brings their unique expertise and creativity, contributing to the warm, inclusive atmosphere that Vave Salon is known for.
              </p>
              <p className="text-gray-700">
                Today, we continue to evolve and grow, embracing new techniques and trends while staying true to our founding principles of quality, creativity, and personalized care.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Salon interior"
                className="rounded-lg shadow-soft w-full h-64 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/3993305/pexels-photo-3993305.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Styling station"
                className="rounded-lg shadow-soft w-full h-64 object-cover mt-8"
              />
              <img
                src="https://images.pexels.com/photos/3993010/pexels-photo-3993010.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Hair washing station"
                className="rounded-lg shadow-soft w-full h-64 object-cover mt-8"
              />
              <img
                src="https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Product display"
                className="rounded-lg shadow-soft w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide us in providing exceptional service"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-4">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Excellence</h3>
              <p className="text-gray-700">
                We strive for excellence in every service, consistently delivering results that exceed expectations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Expertise</h3>
              <p className="text-gray-700">
                Our team continuously updates their skills and knowledge to provide the latest techniques and trends.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Care</h3>
              <p className="text-gray-700">
                We approach each client with genuine care, taking time to understand their needs and preferences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Respect</h3>
              <p className="text-gray-700">
                We value your time and individuality, creating a welcoming environment for clients of all backgrounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The talented professionals behind our exceptional services"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                socialLinks={member.socialLinks}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Experience the Vevesh Difference
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Book an appointment today and let our expert team transform your look.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                to="/booking" 
                variant="primary" 
                size="lg"
                className="bg-primary-800 text-primary-700"
              >
                Book an Appointment
              </Button>
              <Button 
                to="/contact" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutPage;