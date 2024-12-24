import React from "react";

export const ProjectDetails = ({ project, onClose }) => {
  return (
    <div className="project-details-overlay">
      <div className="project-details-container">
        <button className="project-details-close-btn" onClick={onClose}>
          X
        </button>
        <img src={project.imgUrl} alt={project.title} className="project-details-img" />
        <h2 className="project-details-title">{project.title}</h2>
        <p>
          <strong>Date:</strong> {project.date}
        </p>
        <p>{project.details}</p>
        <p>{project.additionalInfo}</p>
      </div>
    </div>
  );
};
