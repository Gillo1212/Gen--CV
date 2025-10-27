import React from 'react';

const ExperienceItem = ({ company, position, location, period, description }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold text-gray-900 mb-1">{company}</h3>
      <p className="text-sm text-gray-600 mb-1">
        {location && <span>{location}</span>}
      </p>
      <p className="text-sm font-semibold text-gray-700 mb-2">{period}</p>
      {description && (
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      )}
    </div>
  );
};

export default ExperienceItem;