import React from 'react';
import { User } from 'lucide-react';

const ProfilePhoto = ({ photoUrl, size = 'large', borderColor = '#3b82f6' }) => {
  const sizeClasses = {
    small: 'w-24 h-24',
    medium: 'w-32 h-32',
    large: 'w-40 h-40',
    xlarge: 'w-48 h-48'
  };

  return (
    <div className="flex justify-center mb-6">
      <div
        className={`${sizeClasses[size]} rounded-full overflow-hidden border-4 shadow-xl`}
        style={{ borderColor }}
      >
        {photoUrl ? (
          <img
            src={photoUrl}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <User size={size === 'large' ? 60 : 40} className="text-gray-400" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePhoto;