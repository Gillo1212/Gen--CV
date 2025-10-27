import React from 'react';

const SectionTitle = ({ title, color = '#1e40af', icon }) => {
  return (
    <div className="mb-6">
      <div
        className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-bold text-lg shadow-md"
        style={{ backgroundColor: color }}
      >
        {icon && <span>{icon}</span>}
        {title}
      </div>
    </div>
  );
};

export default SectionTitle;