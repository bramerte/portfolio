import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

export const Skills = () => {
  const skills = [
    { title: "Problem Solving", level: 95, category: "Proficiencies" },
    { title: "Critical Thinking", level: 95, category: "Proficiencies" },
    { title: "Python", level: 90, category: "Languages" },
    { title: "HTML", level: 90, category: "Languages" },
    { title: "Git Bash", level: 90, category: "Tools" },
    { title: "Software Development", level: 90, category: "Proficiencies" },
    { title: "Object-Oriented Programming", level: 90, category: "Proficiencies" },
    { title: "Java", level: 90, category: "Languages" },
    { title: "Software Design", level: 90, category: "Proficiencies" },
    { title: "Algorithms", level: 90, category: "Proficiencies" },
    { title: "Machine Learning", level: 90, category: "Proficiencies" },
    { title: "SQL", level: 85, category: "Languages" },
    { title: "CSS", level: 85, category: "Languages" },
    { title: "pandas", level: 85, category: "Libraries" },
    { title: "NumPy", level: 85, category: "Libraries" },
    { title: "Visual Studio", level: 85, category: "Tools" },
    { title: "React", level: 85, category: "Frameworks" },
    { title: "JavaScript", level: 85, category: "Languages" },
    { title: "C++", level: 85, category: "Languages" },
    { title: "C#", level: 85, category: "Languages" },
    { title: "Computer Vision", level: 85, category: "Proficiencies" },
    { title: "TypeScript", level: 80, category: "Languages" },
    { title: "Matplotlib", level: 80, category: "Libraries" },
    { title: "Node.js", level: 80, category: "Frameworks" },
    { title: ".NET", level: 80, category: "Frameworks" },
    { title: "IntelliJ", level: 80, category: "Tools" },
    { title: "PostgreSQL", level: 80, category: "Tools" },
    { title: "Docker", level: 80, category: "Tools" },
    { title: "Unity", level: 80, category: "Languages" },
    { title: "XML", level: 75, category: "Languages" },
    { title: "GraphQL", level: 75, category: "Languages" },
    { title: "Prisma", level: 75, category: "Frameworks" },
    { title: "Google Cloud Platform", level: 75, category: "Tools" },
    { title: "JDBC", level: 75, category: "Libraries" },
    { title: "TensorFlow", level: 75, category: "Libraries" },
    { title: "C", level: 75, category: "Languages" },
    { title: "Apache Spark", level: 70, category: "Frameworks" },
    { title: "Apache Kafka", level: 70, category: "Frameworks" },
    { title: "Solidity", level: 70, category: "Languages" },
    { title: "Bash", level: 70, category: "Languages" },
    { title: "Blockchain Technology", level: 70, category: "Proficiencies" },
    { title: "Angular", level: 60, category: "Frameworks" },
    { title: "Assembly Language", level: 55, category: "Languages" },
  ];
  
  
  

  const filterSkills = (category) =>
    category === "All" ? skills : skills.filter((skill) => skill.category === category);

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Technical Skills</h2>
            <Tab.Container id="skills-tabs" defaultActiveKey="All">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                {["All", "Languages", "Frameworks", "Tools", "Libraries", "Proficiencies"].map(
                  (category, index) => (
                    <Nav.Item key={index}>
                      <Nav.Link eventKey={category}>{category}</Nav.Link>
                    </Nav.Item>
                  )
                )}
              </Nav>
              <br></br>
              <br></br>
              <Tab.Content>
                {["All", "Languages", "Frameworks", "Tools", "Libraries", "Proficiencies"].map(
                  (category) => (
                    <Tab.Pane eventKey={category} key={category}>
                      <div className="skill-bx">
                        <Row className="justify-content-center">
                          {filterSkills(category).map((skill, index) => (
                            <Col xs={12} md={6} lg={4} key={index}>
                              <div className="skill-item">
                                <h5>{skill.title}</h5>
                                <div className="skill-bar-container">
                                  <div
                                    className="skill-bar"
                                    style={{ width: `${skill.level}%` }}
                                  ></div>
                                </div>
                                <span>{skill.level}%</span>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </div>
                    </Tab.Pane>
                  )
                )}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .skills {
          padding: 80px 0;
        }
        .skills h2 {
          font-size: 45px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 30px;
        }
        .nav-pills {
          width: 72%;
          margin: 0 auto;
          border-radius: 50px;
          background-color: #151515; /* Solid background */
          overflow: hidden;
        }
        .nav-pills .nav-item {
          width: 16.666%;
        }
        .nav-pills .nav-link {
          background-color: transparent;
          border-radius: 0;
          padding: 17px 0;
          color: #fff;
          font-size: 17px;
          font-weight: 500;
          position: relative;
          transition: 0.3s ease-in-out;
          text-align: center;
          z-index: 0;
        }
        .nav-pills .nav-link::before {
          content: "";
          position: absolute;
          width: 0;
          height: 100%;
          background: linear-gradient(100deg, #25af81 0%, #147b58 100%);
          top: 0;
          left: 0;
          z-index: -1;
          transition: 0.3s ease-in-out;
        }
        .nav-pills .nav-link.active::before {
          width: 100% !important;
        }
        .nav-pills .nav-link.active {
          border: 1px solid rgba(255, 255, 255, 1);
        }
        .skill-bx {
          background: #151515;
          border-radius: 20px;
          padding: 40px;
        }
        .skill-item {
          width: 100%;
          max-width: 300px;
          margin: 10px;
          text-align: center;
        }
        .skill-item h5 {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .skill-bar-container {
          background: #e0e0e0;
          border-radius: 5px;
          overflow: hidden;
          height: 10px;
          margin-bottom: 10px;
        }
        .skill-bar {
          background: linear-gradient(100deg, #25af81 0%, #147b58 100%);
          height: 100%;
        }
        .skill-item span {
          font-size: 14px;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
};
