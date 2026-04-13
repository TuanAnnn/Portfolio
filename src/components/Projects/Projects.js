import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import thingiq from "../../Assets/Projects/thingiq.png";
import magichands from "../../Assets/Projects/magichands.jpeg";
import hrms from "../../Assets/Projects/mybv.webp";

const thingiq1 = "https://res.cloudinary.com/dneyrahbx/image/upload/v1775703634/portfolio/thingiq/thingiq-1_iathiu.png";
const thingiq2 = "https://res.cloudinary.com/dneyrahbx/image/upload/v1775703632/portfolio/thingiq/thingiq-2_i2u1lv.png";
const thingiq3 = "https://res.cloudinary.com/dneyrahbx/image/upload/v1775703631/portfolio/thingiq/thingiq-3_yntl7l.png";
const thingiq4 = "https://res.cloudinary.com/dneyrahbx/image/upload/v1775703634/portfolio/thingiq/thingiq-4_sbhh6i.png";
const thingiq5 = "https://res.cloudinary.com/dneyrahbx/image/upload/v1775703633/portfolio/thingiq/thingiq-5_czgxye.png";
const thingiq6 = "https://res.cloudinary.com/dneyrahbx/image/upload/v1775703820/portfolio/thingiq/thingiq-6_g7yypa.png";
const thingiqArch = "https://res.cloudinary.com/dneyrahbx/image/upload/v1775703789/portfolio/thingiq/thingiq-architecture_b2pkvt.png";

const magichandsArch = "https://res.cloudinary.com/dneyrahbx/image/upload/v1775703705/portfolio/magichands/System_Archietect.drawio_chlve2.png";
const magichands1 = "https://res.cloudinary.com/dneyrahbx/image/upload/v1775703706/portfolio/magichands/magichands-screenshot_byrzsq.webp";
const magichands2 = "https://res.cloudinary.com/dneyrahbx/image/upload/v1775703710/portfolio/magichands/magichands-screenshot-2_mw8igw.webp";
const magichands3 = "https://res.cloudinary.com/dneyrahbx/image/upload/v1775703708/portfolio/magichands/magichands-screenshot-3_eu3h31.webp";
const magichands4 = "https://res.cloudinary.com/dneyrahbx/image/upload/v1775703712/portfolio/magichands/magichands-screenshot-4_gwlviq.webp";
const magichands5 = "https://res.cloudinary.com/dneyrahbx/image/upload/v1775703711/portfolio/magichands/magichands-screenshot-5_emrfgi.webp";

const mybv1 = "https://res.cloudinary.com/dneyrahbx/image/upload/v1775703714/portfolio/myBv/mybv-1_aab4jo.webp";
const mybv2 = "https://res.cloudinary.com/dneyrahbx/image/upload/v1775703717/portfolio/myBv/mybv-2_j0eqb5.webp";
const mybv3 = "https://res.cloudinary.com/dneyrahbx/image/upload/v1775703716/portfolio/myBv/mybv-3_rqy76l.webp";

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px", columnGap: "30px" }} className="g-4">
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={thingiq}
              architecture={thingiqArch}
              screenshots={[
                { src: thingiq1, label: "Screenshot 1" },
                { src: thingiq2, label: "Screenshot 2" },
                { src: thingiq3, label: "Screenshot 3" },
                { src: thingiq4, label: "Screenshot 4" },
                { src: thingiq5, label: "Screenshot 5" },
                { src: thingiq6, label: "Screenshot 6" },
              ]}
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

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={magichands}
              architecture={magichandsArch}
              screenshots={[
                { src: magichands1, label: "Screenshot 1" },
                { src: magichands2, label: "Screenshot 2" },
                { src: magichands3, label: "Screenshot 3" },
                { src: magichands4, label: "Screenshot 4" },
                { src: magichands5, label: "Screenshot 5" },
              ]}
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

          {/* Placeholder — thêm sau */}
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={null}
              isBlog={false}
              title="Coming Soon"
              description={["New project coming soon..."]}
              techStack={[]}
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={hrms}
              screenshots={[
                { src: mybv1, label: "Screenshot 1" },
                { src: mybv2, label: "Screenshot 2" },
                { src: mybv3, label: "Screenshot 3" },
              ]}
              isBlog={false}
              title="myBv – HR Management App"
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
