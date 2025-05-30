import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  bio,
  image,
  socialLinks,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-soft group">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-72 object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex justify-center space-x-3">
              {socialLinks?.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-colors"
                >
                  <Instagram size={16} />
                </a>
              )}
              {socialLinks?.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-colors"
                >
                  <Facebook size={16} />
                </a>
              )}
              {socialLinks?.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-colors"
                >
                  <Linkedin size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold">{name}</h3>
        <p className="text-primary-600 mb-3">{role}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;