import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetails } from "./ProjectDetails";
import projImg1 from "../assets/img/project-img1.png";
import { useState } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Padel Coaching Toolbox",
      description: "Developed a computer vision model to track player positions, classify hits using pose estimation, and generate actionable insights for Tennis Vlaanderen.",
      details: "Detailed information about the Padel Coaching Toolbox...",
      imgUrl: projImg1,
      date: "2024",
    },
    {
      title: "SportKompasVision",
      description: "Led a team to create a computer vision model for automating sports scoring using TensorFlow and MediaPipe.",
      details: "Detailed information about SportKompasVision...",
      imgUrl: projImg1,
      date: "2023",
    },
    {
      title: "Portfolio Website",
      description: "Designed and developed a personal portfolio using React and JavaScript to showcase technical and self-presentation skills.",
      details: "Detailed information about Portfolio Website...",
      imgUrl: projImg1,
      date: "2023",
    },
    {
      title: "Tokens and Smart Contracts for Car Sharing",
      description: "Implemented blockchain-based smart contracts and a token system using Solidity and the Polygon ecosystem.",
      details: "Detailed information about Tokens and Smart Contracts...",
      imgUrl: projImg1,
      date: "2022",
    },
    {
      title: "The Influence of Streaming Distortions and Haptic Feedback in VR",
      description: "Built a Unity-based VR application to investigate user experiences and authored a scientific research document.",
      details: "Detailed information about the VR project...",
      imgUrl: projImg1,
      date: "2022",
    },
    {
      title: "UGent Business Game",
      description: "Analyzed cases from Deloitte and AB InBev to develop actionable strategies and deliver impactful recommendations under pressure.",
      details: "Detailed information about UGent Business Game...",
      imgUrl: projImg1,
      date: "2021",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <Row className="justify-content-center gy-4">
                    {projects.map((project, index) => (
                      <Col
                        key={index}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={4}
                        onClick={() => setSelectedProject(project)}
                      >
                        <ProjectCard {...project} />
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
