import React from "react";

export const ProjectDetails = ({ project, onClose }) => {
  return (
    <div className="project-details-overlay">
      <div className="project-details-container">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>{project.title}</h2>
        <p><strong>Date:</strong> {project.date}</p>
        <p>{project.details}</p>
      </div>
      <style jsx>{`
        .project-details-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .project-details-container {
          background: #151515;
          color: white;
          padding: 30px;
          border-radius: 10px;
          max-width: 600px;
          width: 90%;
          text-align: center;
          position: relative;
        }
        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: transparent;
          border: none;
          font-size: 24px;
          color: white;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};
