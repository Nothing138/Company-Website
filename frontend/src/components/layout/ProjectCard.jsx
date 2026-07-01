import React from 'react';

const ProjectCard = ({ icon, category, title, description, tags, index = 0 }) => {
  return (
    <div className="frame asset-card">
      <div className="asset-thumb">{icon}</div>
      <span className="tech-label">{category}</span>
      <h3 style={{ marginTop: 12 }}>{title}</h3>
      <p>{description}</p>
      <div className="asset-tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <button className="btn btn-secondary">View Project</button>
    </div>
  );
};

export default ProjectCard;