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
              title="ThingIQ – IoT Predictive Maintenance"
              description={[
                "Cloud-native IoT system for real-time vibration monitoring and AI-based machine failure detection across 100+ devices.",
                "Designed MQTT ingestion pipeline using AWS IoT Core supporting 5 device types.",
                "Built event-driven backend with SNS/SQS, hot/cold storage with DynamoDB and S3.",
                "End-to-end AI training pipeline with SageMaker and Step Functions.",
                "Implemented Prometheus metrics and Grafana dashboards for observability.",
              ]}
              techStack={["Node.js", "AWS IoT Core", "Lambda", "DynamoDB", "SageMaker", "Docker", "Prometheus", "Grafana"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={magichands}
              isBlog={false}
              title="Magichands – On-demand Service Platform"
              description={[
                "Scalable on-demand service platform serving thousands of users.",
                "Reduced API response time by 40% via indexing and Redis caching.",
                "Integrated secure payment gateways: Momo and VNPay.",
                "Implemented JWT authentication, OAuth 2.0, and rate limiting.",
                "Set up CI/CD pipeline using GitHub Actions, deployed on AWS with Docker and PM2.",
              ]}
              techStack={["Node.js", "AdonisJS", "MySQL", "Redis", "AWS", "Docker", "ReactJS", "React Native"]}
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
              techStack={["NestJS", "PostgreSQL", "AWS", "Firebase"]}
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
              techStack={["ReactJS", "React Native"]}
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
              techStack={["ExpressJS", "MongoDB"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
