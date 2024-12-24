import React from "react";
import { Container } from "react-bootstrap";
import UGentLogo from "../assets/img/UGent.png";

export const Education = () => {
  return (
    <section className="education-section" id="education">
      <Container>
        <h2 className="education-title">Education</h2>
        <div className="education-details">
          <div className="education-item">
            <img src={UGentLogo} alt="UGent Logo" className="education-logo" />
            <div className="education-info">
              <h3 className="education-degree">
                Master of Science in Computer Science Engineering
              </h3>
              <p><strong>Institution:</strong> Ghent University</p>
              <p><strong>Years:</strong> Sep. 2023 – Jul. 2025</p>
              <p><strong>Thesis:</strong> Padel Coaching Toolbox</p>
              <p>
                Focus on Machine Learning, Distributed Systems, and Strategic
                Problem Solving.
              </p>
            </div>
          </div>
          <div className="education-item">
            <img src={UGentLogo} alt="UGent Logo" className="education-logo" />
            <div className="education-info">
              <h3 className="education-degree">
                Master of Science in Information Engineering Technology
              </h3>
              <p><strong>Institution:</strong> Ghent University</p>
              <p><strong>Years:</strong> Sep. 2022 – Jul. 2023</p>
              <p><strong>Thesis:</strong> The influence of streaming distortions and haptic feedback on reaction speed and subjective perception in Virtual Reality</p>
              <p>
                Emphasis on Advanced Algorithms, IT Architectures, and System
                Optimization.
              </p>
            </div>
          </div>
          <div className="education-item">
            <img src={UGentLogo} alt="UGent Logo" className="education-logo" />
            <div className="education-info">
              <h3 className="education-degree">
                Bachelor of Science in Information Engineering Technology
              </h3>
              <p><strong>Institution:</strong> Ghent University</p>
              <p><strong>Years:</strong> Sep. 2019 – Jul. 2022</p>
              <p>
                Developed foundational skills in programming, database
                management, and networking.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
