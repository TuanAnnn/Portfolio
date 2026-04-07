import React from "react"; // eslint-disable-line no-unused-vars
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import iesLogo from "../../Assets/Projects/ies-logo.png";
import datVietLogo from "../../Assets/Projects/default-company-logo.jpg";
import banVienLogo from "../../Assets/Projects/banvien-logo.png";
import thingiq from "../../Assets/Projects/thingiq.png";
import magichands from "../../Assets/Projects/magichands.jpeg";
import driverManager from "../../Assets/Projects/driver-manager.png";
import checkee from "../../Assets/Projects/checkee.png";
import mybv from "../../Assets/Projects/mybv.webp";
import "./Experience.css";

const experiences = [
  {
    logo: iesLogo,
    company: "IES Limited",
    period: "07/2023 – Present",
    roles: "Fullstack Engineer → Technical Leader",
    projects: [
      {
        icon: thingiq,
        name: "ThingIQ BFF – IoT Backend-for-Frontend Platform",
        period: "Jun 2025 – Present",
        points: [
          "Promoted to Technical Leader, overseeing a team of 8 engineers.",
          "Designed MQTT ingestion pipeline using AWS IoT Core for 100+ devices across 5 device types.",
          "Built event-driven backend with SNS/SQS, hot/cold storage with DynamoDB and S3.",
          "End-to-end AI training pipeline with SageMaker and Step Functions.",
          "Implemented Prometheus metrics and Grafana dashboards for observability.",
          "Built TCP socket server to parse real-time device data using Wialon IPS protocol.",
        ],
        tech: ["AdonisJS 5", "TypeScript", "MySQL", "DynamoDB", "Redis", "Bull Queue", "AWS IoT Core", "SQS", "SNS", "S3", "SageMaker", "CloudWatch", "MQTT", "Socket.io", "Firebase", "Prometheus", "Grafana"],
      },
      {
        icon: magichands,
        name: "Magichands – On-demand Service Platform",
        period: "Sep 2023 – Present",
        points: [
          "Architected backend with Layered Architecture: Middleware → Controllers → Services → Models via Lucid ORM (MySQL, Soft Deletes, ULID).",
          "Designed and developed scalable RESTful APIs serving thousands of users.",
          "Reduced API response time by 40% via MySQL indexing (Lucid ORM) and Redis + Bull Queue caching.",
          "Integrated payment gateways Momo and VNPay, and social login via Ally (OAuth).",
          "Implemented JWT authentication, rate limiting, and multi-language support (i18n).",
          "Integrated Firebase FCM notifications and third-party services: Google Maps, Slack, Zalo, SMS.",
          "Managed file storage on AWS S3 and session/queue management with Redis.",
          "Owned release management and server operations: wrote deployment scripts, managed AWS EC2 instances, and maintained CI/CD pipeline via GitHub Actions with PM2.",
        ],
        tech: ["AdonisJS 5", "TypeScript", "MySQL", "DynamoDB", "Redis", "Bull Queue", "AWS S3", "JWT", "Firebase FCM", "Momo", "VNPay", "Google Maps", "Docker", "ReactJS", "React Native"],
      },
      {
        icon: driverManager,
        name: "Driver Manager – Fleet Management System",
        period: "Jul 2023 – Jan 2024",
        points: [
          "Developed backend services using NestJS.",
          "Optimized PostgreSQL indexing and query performance.",
          "Implemented secure API authentication and rate limiting.",
          "Integrated Firebase push notifications.",
        ],
        tech: ["NestJS", "PostgreSQL", "AWS", "Firebase", "Next.js", "ReactJS", "React Native"],
      },
    ],
  },
  {
    logo: datVietLogo,
    company: "DatViet Software",
    period: "02/2023 – 07/2023",
    roles: "FullStack Developer",
    projects: [
      {
        icon: checkee,
        name: "Checkee – Product Traceability Platform",
        period: "02/2023 – 07/2023",
        points: [
          "Built RESTful APIs using ExpressJS.",
          "Designed MongoDB schema and optimized query performance.",
          "Refactored backend code to improve maintainability.",
        ],
        tech: ["ExpressJS", "MongoDB", "React Native", "Redux Thunk", "Axios", "TailwindCSS", "NativeBase"],
      },
    ],
  },
  {
    logo: banVienLogo,
    company: "Ban Vien Co., LTD",
    period: "07/2022 – 01/2023",
    roles: "Frontend Developer",
    projects: [
      {
        icon: mybv,
        name: "HRMS Super – HR Management App",
        period: "07/2022 – 01/2023",
        points: [
          "Developed ReactJS and React Native UI screens including profile update forms.",
          "Integrated backend APIs and managed asynchronous state.",
          "Implemented Axios interceptor to automatically refresh access tokens on expiry.",
        ],
        tech: ["ReactJS", "React Native", "Redux Observable", "Axios"],
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
                  <div className="timeline-company-info">
                    {exp.logo && (
                      <img src={exp.logo} alt={exp.company} className="timeline-company-logo" />
                    )}
                    <h3 className="timeline-company">{exp.company}</h3>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-role">{exp.roles}</p>

                {exp.projects.map((proj, j) => (
                  <div key={j} className="timeline-project">
                    <div className="timeline-project-header">
                      <span className="timeline-project-name">
                        {proj.icon && (
                          <img
                            src={proj.icon}
                            alt={proj.name}
                            className="timeline-project-icon"
                          />
                        )}
                        {proj.name}
                      </span>
                      <span className="timeline-project-period">{proj.period}</span>
                    </div>
                    {proj.image && (
                      <img
                        src={proj.image}
                        alt={proj.name}
                        style={{ width: "100%", maxHeight: "160px", objectFit: "cover", borderRadius: "8px", marginBottom: "12px" }}
                      />
                    )}
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
