import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import myAvatar from "../../Assets/tuanan-avt-cv.jpg";

function About() {
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "80px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img
                src={myAvatar}
                alt="Phan Tuấn An"
                className="img-fluid"
                style={{
                  borderRadius: "50%",
                  width: "280px",
                  height: "280px",
                  objectFit: "cover",
                  objectPosition: "top",
                  border: "4px solid rgba(199, 112, 240, 0.5)",
                  boxShadow: "0 0 25px rgba(199, 112, 240, 0.3)",
                }}
              />
            </Col>
          </Row>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
