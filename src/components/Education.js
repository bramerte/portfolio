import React from "react";
import { Container } from "react-bootstrap";
import UGentLogo from "../assets/img/UGent.png";

export const Education = () => {
  return (
    <section className="education" id="education">
      <Container>
        <h2 className="education-title">Education</h2>
        <div className="education-details">
          <div className="education-item">
            <img src={UGentLogo} alt="UGent Logo" className="education-logo" />
            <div className="education-info">
              <h3>Master of Science in Computer Science Engineering</h3>
              <p><strong>Institution:</strong> Ghent University</p>
              <p><strong>Years:</strong> Sep. 2023 – Jul. 2025</p>
              <p>Focus on Machine Learning, Distributed Systems, and Strategic Problem Solving.</p>
            </div>
          </div>
          <div className="education-item">
            <img src={UGentLogo} alt="UGent Logo" className="education-logo" />
            <div className="education-info">
              <h3>Master of Science in Information Engineering Technology</h3>
              <p><strong>Institution:</strong> Ghent University</p>
              <p><strong>Years:</strong> Sep. 2022 – Jul. 2023</p>
              <p>Emphasis on Advanced Algorithms, IT Architectures, and System Optimization.</p>
            </div>
          </div>
          <div className="education-item">
            <img src={UGentLogo} alt="UGent Logo" className="education-logo" />
            <div className="education-info">
              <h3>Bachelor of Science in Information Engineering Technology</h3>
              <p><strong>Institution:</strong> Ghent University</p>
              <p><strong>Years:</strong> Sep. 2019 – Jul. 2022</p>
              <p>Developed foundational skills in programming, database management, and networking.</p>
            </div>
          </div>
        </div>
      </Container>
      <style jsx>{`
  .education {
    padding: 60px 20px;
  }
  .education-title {
    text-align: center;
    margin-bottom: 40px;
    font-size: 2.5rem;
    font-weight: bold;
  }
  .education-details {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .education-item {
    display: flex;
    align-items: center;
    background: #151515; /* Box color */
    padding: 20px;
    border-radius: 10px;
    gap: 15px;
  }
  .education-logo {
    width: 100px; /* Slightly larger logo */
    height: auto;
    flex-shrink: 0;
    border-radius: 8px; /* Rounded corners */
  }
  .education-info h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .education-info p {
    margin: 0;
    font-size: 1rem;
  }
`}</style>

    </section>
  );
};
