import React from 'react';

const ProjectCard = ({ icon, category, title, description, tags }) => {
  return (
    <div className="card project-card">
      <div className="project-thumbnail">{icon}</div>
      <div className="project-category">{category}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-tags">
        {tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>
      <button className="btn btn-primary">View Project</button>
    </div>
  );
};

export default ProjectCard;