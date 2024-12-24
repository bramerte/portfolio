import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetails } from "./ProjectDetails";
import Image1 from "../assets/img/PadelCoachingToolbox.png";
import Image2 from "../assets/img/SportKompasVision.png";
import Image3 from "../assets/img/PortfolioWebsite.png";
import Image4 from "../assets/img/DegageToken.png";
import Image5 from "../assets/img/VR.png";
import Image6 from "../assets/img/UGentBusinessGame.jpg";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Designed and developed a personal portfolio using React and JavaScript to showcase technical and self-presentation skills.",
      details:
        "This project involved creating a dynamic and interactive portfolio to highlight my skills, projects, and experiences. Implemented modern UI/UX design principles and deployed the project using GitHub Pages.",
      imgUrl: Image3,
      date: "Nov. 2024 – Present",
      additionalInfo: "Tech Stack: React, JavaScript, HTML, CSS, GitHub Pages",
    },
    {
      title: "UGent Business Game",
      description:
        "Analyzed cases from Deloitte and AB InBev to develop actionable strategies and deliver impactful recommendations under pressure.",
      details:
        "Participated in a high-pressure business game that involved solving real-world challenges provided by Deloitte and AB InBev. Collaborated in a team to develop innovative solutions and presented them to a panel of judges.",
      imgUrl: Image6,
      date: "Nov. 2024",
      additionalInfo: "Focus Areas: Strategy, Problem Solving, Teamwork",
    },
    {
      title: "Padel Coaching Toolbox",
      description:
        "Developed a computer vision model to track player positions, classify hits using pose estimation, and generate actionable insights for Tennis Vlaanderen.",
      details:
        "Built a cutting-edge computer vision tool using Python and TensorFlow for real-time player tracking and hit classification. Worked closely with coaches to provide actionable insights based on performance data.",
      imgUrl: Image1,
      date: "Sep. 2023 – Jul. 2025",
      additionalInfo: "Tech Stack: Python, OpenCV, TensorFlow, MediaPipe",
    },
    {
      title: "SportKompasVision",
      description:
        "Led a team to create a computer vision model for automating sports scoring using TensorFlow and MediaPipe.",
      details:
        "This project focused on developing an automated scoring system for sports, leveraging advanced machine learning algorithms and pose estimation techniques.",
      imgUrl: Image2,
      date: "Sep. 2023 – Jul. 2024",
      additionalInfo: "Tech Stack: TensorFlow, MediaPipe, Python",
    },
    {
      title:
        "The Influence of Streaming Distortions and Haptic Feedback in VR",
      description:
        "Built a Unity-based VR application to investigate user experiences and authored a scientific research document.",
      details:
        "Developed a VR simulation to study the impact of haptic feedback and streaming distortions on reaction time and user perception. Conducted user studies and published findings.",
      imgUrl: Image5,
      date: "Sep. 2022 – Jul. 2023",
      additionalInfo: "Tech Stack: Unity, C#, Python",
    },
    {
      title: "Tokens and Smart Contracts for Car Sharing",
      description:
        "Implemented blockchain-based smart contracts and a token system using Solidity and the Polygon ecosystem.",
      details:
        "Developed a decentralized car-sharing platform using blockchain technology. Created secure smart contracts for transactions and a token system for payments.",
      imgUrl: Image4,
      date: "Jan. 2022 – Jul. 2022",
      additionalInfo: "Tech Stack: Solidity, Polygon, Ethereum",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <Row className="justify-content-center gy-4">
                {projects.map((project, index) => (
                  <Col
                    key={index}
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    onClick={() => setSelectedProject(project)}
                  >
                    <ProjectCard {...project} />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      <br />
      <br />
      <br />
    </section>
  );
};
