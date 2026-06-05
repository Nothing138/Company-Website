import React from 'react';

const ServiceCard = ({ icon, title, description, includes }) => {
  return (
    <div className="card service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="service-includes">
        <strong>Includes:</strong> {includes}
      </div>
      <button className="btn btn-primary">Learn More</button>
    </div>
  );
};

export default ServiceCard;