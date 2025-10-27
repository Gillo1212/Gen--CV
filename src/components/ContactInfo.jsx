import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Github, Globe } from 'lucide-react';

const ContactInfo = ({ phone, email, location, linkedin, github, website, iconColor = '#3b82f6' }) => {
  const contacts = [
    { value: phone, icon: Phone, label: 'Phone' },
    { value: email, icon: Mail, label: 'Email' },
    { value: location, icon: MapPin, label: 'Location' },
    { value: linkedin, icon: Linkedin, label: 'LinkedIn' },
    { value: github, icon: Github, label: 'GitHub' },
    { value: website, icon: Globe, label: 'Website' }
  ];

  return (
    <div className="space-y-4">
      {contacts.map(({ value, icon: Icon, label }) => 
        value && (
          <div key={label} className="flex items-center gap-3">
            <div 
              className="p-2 rounded-full"
              style={{ backgroundColor: iconColor + '20' }}
            >
              <Icon size={18} style={{ color: iconColor }} />
            </div>
            <span className="text-sm break-all">{value}</span>
          </div>
        )
      )}
    </div>
  );
};

export default ContactInfo;