import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfilePicture from "../assets/img/ProfilePicture.jpeg"; 
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100); 
  const toRotate = [
    "Computer Science Engineer Student",
    "Information Technology Engineer",
    "Future Consultant",
  ];
  const period = 3000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(50);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="align-items-center w-100">
        <Col xs={12} md={6} xl={7} className="text-center text-md-start">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <h1>{`Bram Mertens`}</h1>
                <span
                  className="txt-rotate"
                  dataPeriod="3000"
                  data-rotate='["Computer Science Engineer Student", "Information Technology Engineer", "Future Consultant" ]'
                >
                  <span className="wrap">{text}</span>
                </span>
                <p>
                  I am a driven, social, and initiative-taking individual
                  passionate about solving complex problems through strategic
                  thinking and teamwork. With a strong academic background and
                  practical experience, I enjoy tackling challenges that combine
                  technical and analytical skills. Outside of work, I am active
                  in sports like football, padel, running, and gym workouts,
                  which have instilled in me discipline, perseverance, and
                  resilience.
                </p>
              </div>
            )}
          </TrackVisibility>
        </Col>
        <Col xs={12} md={6} xl={5} className="text-center">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__zoomIn" : ""}
              >
                <div className="profile-picture-container">
                  <img
                    src={ProfilePicture}
                    alt="Profile Picture"
                    className="profile-picture"
                  />
                </div>
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
  );
};
