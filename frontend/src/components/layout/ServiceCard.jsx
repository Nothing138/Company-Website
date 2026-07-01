import React from 'react';

const ServiceCard = ({ icon, title, description, includes, index = 0 }) => {
  return (
    <div className="frame asset-card">
      <div className="asset-card-top">
        <span className="asset-index">{String(index + 1).padStart(2, '0')}</span>
        <div className="asset-icon">{icon}</div>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="asset-meta">
        <strong>Includes:</strong> {includes}
      </div>
      <button className="btn btn-secondary">Learn More</button>
    </div>
  );
};

export default ServiceCard;