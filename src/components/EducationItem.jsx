import React from 'react';

const EducationItem = ({ school, degree, period, details }) => {
  return (
    <div className="mb-5">
      <h3 className="text-lg font-bold text-gray-900 mb-1">{school}</h3>
      <p className="text-sm font-semibold text-gray-700 mb-1">{degree}</p>
      <p className="text-sm text-gray-600 mb-2">{period}</p>
      {details && (
        <p className="text-sm text-gray-600 leading-relaxed">{details}</p>
      )}
    </div>
  );
};

export default EducationItem;