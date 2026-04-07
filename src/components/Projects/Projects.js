import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import thingiq from "../../Assets/Projects/thingiq.png";
import magichands from "../../Assets/Projects/magichands.jpeg";
import checkee from "../../Assets/Projects/checkee.png";
import driverManager from "../../Assets/Projects/driver-manager.png";
import hrms from "../../Assets/Projects/mybv.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={thingiq}
              isBlog={false}
              title="ThingIQ BFF – IoT Backend-for-Frontend Platform"
              description={[
                "Promoted to Technical Leader, overseeing a team of 8 engineers.",
                "Designed MQTT ingestion pipeline using AWS IoT Core for 100+ devices across 5 device types.",
                "Built event-driven backend with SNS/SQS, hot/cold storage with DynamoDB and S3.",
                "End-to-end AI training pipeline with SageMaker and Step Functions.",
                "Implemented Prometheus metrics and Grafana dashboards for observability.",
                "Built TCP socket server to parse real-time device data using Wialon IPS protocol.",
              ]}
              techStack={["AdonisJS 5", "TypeScript", "MySQL", "DynamoDB", "Redis", "Bull Queue", "AWS IoT Core", "SQS", "SNS", "S3", "SageMaker", "CloudWatch", "MQTT", "Socket.io", "Firebase", "Prometheus", "Grafana"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={magichands}
              isBlog={false}
              title="Magichands – On-demand Service Platform"
              description={[
                "Architected backend with Layered Architecture: Middleware → Controllers → Services → Models via Lucid ORM (MySQL, Soft Deletes, ULID).",
                "Designed and developed scalable RESTful APIs serving thousands of users.",
                "Reduced API response time by 40% via MySQL indexing (Lucid ORM) and Redis + Bull Queue caching.",
                "Integrated payment gateways Momo and VNPay, and social login via Ally (OAuth).",
                "Implemented JWT authentication, rate limiting, and multi-language support (i18n).",
                "Integrated Firebase FCM notifications and third-party services: Google Maps, Slack, Zalo, SMS.",
                "Managed file storage on AWS S3 and session/queue management with Redis.",
                "Owned release management and server operations: wrote deployment scripts, managed AWS EC2 instances, and maintained CI/CD pipeline via GitHub Actions with PM2.",
              ]}
              techStack={["AdonisJS 5", "TypeScript", "MySQL", "DynamoDB", "Redis", "Bull Queue", "AWS S3", "JWT", "Firebase FCM", "Momo", "VNPay", "Google Maps", "Docker", "ReactJS", "React Native"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={driverManager}
              isBlog={false}
              title="Driver Manager – Fleet Management System"
              description={[
                "Fleet management system built with NestJS and PostgreSQL on AWS.",
                "Optimized PostgreSQL indexing and query performance.",
                "Implemented secure API authentication with rate limiting.",
                "Integrated Firebase push notifications for real-time driver updates.",
              ]}
              techStack={["NestJS", "PostgreSQL", "AWS", "Firebase", "Next.js", "ReactJS", "React Native"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={checkee}
              isBlog={false}
              title="Checkee – Product Traceability Platform"
              description={[
                "Product traceability platform built with ExpressJS and MongoDB.",
                "Designed MongoDB schema and optimized query performance.",
                "Built RESTful APIs and refactored backend for maintainability.",
              ]}
              techStack={["ExpressJS", "MongoDB", "React Native", "Redux Thunk", "Axios", "TailwindCSS", "NativeBase"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hrms}
              isBlog={false}
              title="HRMS Super – HR Management App"
              description={[
                "Mobile HR management application for employee management and internal operations.",
                "Developed ReactJS and React Native UI screens including profile update forms.",
                "Integrated backend APIs and managed asynchronous state.",
                "Implemented Axios interceptor to automatically refresh access tokens on expiry.",
              ]}
              techStack={["ReactJS", "React Native", "Redux Observable", "Axios"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
