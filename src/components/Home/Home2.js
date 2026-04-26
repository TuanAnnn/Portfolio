import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/tuanan-avt-cv.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Software Engineer with nearly 4 years of experience building
              scalable cloud-native systems on AWS. Strong background in
              distributed architecture, real-time IoT data streaming, and
              production-grade API development.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  TypeScript, JavaScript (Node.js), and Java{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  event-driven systems, IoT data streaming,{" "}
                </b>
              </i>
              and predictive maintenance using machine learning.
              <br />
              <br />
              Experienced with
              <b className="purple"> NestJS, AdonisJS, ExpressJS </b> on the
              backend and{" "}
              <i>
                <b className="purple">ReactJS</b> and{" "}
                <b className="purple">React Native</b>
              </i>{" "}
              on the frontend.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
