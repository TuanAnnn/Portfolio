import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import "./Experience.css";

const experiences = [
  {
    company: "IES Limited",
    period: "07/2023 – Present",
    roles: "Fullstack Engineer → Technical Leader",
    projects: [
      {
        name: "ThingIQ – IoT Predictive Maintenance Platform",
        period: "Jun 2025 – Present",
        points: [
          "Promoted to Technical Leader, overseeing a team of 8 engineers.",
          "Designed MQTT ingestion pipeline using AWS IoT Core for 100+ devices across 5 device types.",
          "Built event-driven backend with SNS/SQS, hot/cold storage with DynamoDB and S3.",
          "End-to-end AI training pipeline with SageMaker and Step Functions.",
          "Implemented Prometheus metrics and Grafana dashboards for observability.",
          "Built TCP socket server to parse real-time device data using Wialon IPS protocol.",
        ],
        tech: ["Node.js", "AWS IoT Core", "Lambda", "DynamoDB", "SageMaker", "Step Functions", "Prometheus", "Grafana", "Docker"],
      },
      {
        name: "Magichands – On-demand Service Platform",
        period: "Sep 2023 – Present",
        points: [
          "Designed and developed scalable RESTful APIs serving thousands of users.",
          "Reduced API response time by 40% via indexing and Redis caching.",
          "Integrated secure payment gateways: Momo and VNPay.",
          "Implemented JWT authentication, OAuth 2.0, and rate limiting.",
          "Set up CI/CD pipeline using GitHub Actions, deployed on AWS with Docker and PM2.",
        ],
        tech: ["Node.js", "AdonisJS", "MySQL", "Redis", "AWS", "Docker", "ReactJS", "React Native", "Firebase"],
      },
      {
        name: "Driver Manager – Fleet Management System",
        period: "Jul 2023 – Jan 2024",
        points: [
          "Developed backend services using NestJS.",
          "Optimized PostgreSQL indexing and query performance.",
          "Implemented secure API authentication and rate limiting.",
          "Integrated Firebase push notifications.",
        ],
        tech: ["NestJS", "PostgreSQL", "AWS", "Firebase"],
      },
    ],
  },
  {
    company: "DatViet Software",
    period: "02/2023 – 07/2023",
    roles: "FullStack Developer",
    projects: [
      {
        name: "Checkee – Product Traceability Platform",
        period: "02/2023 – 07/2023",
        points: [
          "Built RESTful APIs using ExpressJS.",
          "Designed MongoDB schema and optimized query performance.",
          "Refactored backend code to improve maintainability.",
        ],
        tech: ["ExpressJS", "MongoDB"],
      },
    ],
  },
  {
    company: "Ban Vien Co., LTD",
    period: "07/2022 – 01/2023",
    roles: "Frontend Developer",
    projects: [
      {
        name: "Frontend Development",
        period: "07/2022 – 01/2023",
        points: [
          "Developed ReactJS and React Native applications.",
          "Integrated backend APIs and managed asynchronous state.",
          "Implemented Axios interceptor to automatically refresh access tokens on expiry.",
        ],
        tech: ["ReactJS", "React Native"],
      },
    ],
  },
];

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ paddingTop: "20px", textAlign: "left" }}>
          Work <strong className="purple">Experience</strong>
        </h1>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-company">{exp.company}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-role">{exp.roles}</p>

                {exp.projects.map((proj, j) => (
                  <div key={j} className="timeline-project">
                    <div className="timeline-project-header">
                      <span className="timeline-project-name">{proj.name}</span>
                      <span className="timeline-project-period">{proj.period}</span>
                    </div>
                    <ul className="timeline-points">
                      {proj.points.map((point, k) => (
                        <li key={k}>{point}</li>
                      ))}
                    </ul>
                    <div className="timeline-tech">
                      {proj.tech.map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Experience;
