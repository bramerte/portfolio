import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import weAre from "../assets/img/WeAre.jpg";

export const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <Container>
        <h2 className="experience-title">Experience</h2>
        <div className="experience-box">
          <Row>
            <Col xs={12} md={3} className="experience-logo-container">
              <img src={weAre} alt="We Are Logo" className="experience-logo" />
            </Col>
            <Col xs={12} md={9} className="experience-details">
              <h3 className="experience-company">We Are</h3>
              <h5 className="experience-role">Intern - Software Engineer</h5>
              <p><strong>Date:</strong> Sep. 2024 – Oct. 2024</p>
              <p><strong>Location:</strong> Ghent</p>
              <ul className="experience-tasks">
                <li>
                  Collaborated with a cross-functional team on multiple software
                  projects, utilizing agile methodologies to ensure efficient
                  delivery of client solutions.
                </li>
                <li>
                  Applied analytical and problem-solving skills to identify,
                  debug, and resolve software issues, enhancing user experience
                  and system reliability.
                </li>
                <li>
                  Developed scalable web applications using React, React Aria
                  components, and TypeScript, integrating GraphQL or Prisma
                  backends.
                </li>
                <li>
                  Conducted comprehensive testing of endpoints and routing
                  systems to ensure high-quality, reliable software delivery.
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
