import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { HiExternalLink } from "react-icons/hi";
import "./Certifications.css";

const certifications = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg",
    title: "Claude Code in Action",
    issuer: "Anthropic",
    issued: "Apr 2026",
    credentialId: "eahjfu3x7g4h",
    skills: ["Claude Code", "AI-assisted Development", "MCP", "GitHub Actions", "Prompt Engineering"],
    verifyUrl: "https://verify.skilljar.com/c/eahjfu3x7g4h",
  },
];

function Certifications() {
  return (
    <Container fluid className="cert-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ paddingTop: "20px", textAlign: "left" }}>
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white", textAlign: "left" }}>
          Verified certifications from recognized organizations.
        </p>
        <Row className="g-4">
          {certifications.map((cert, i) => (
            <Col key={i} xs={12} md={6} lg={5}>
              <div className="cert-card">
                <div className="cert-card-body">
                  <div className="cert-logo-wrap">
                    <img src={cert.logo} alt={cert.issuer} className="cert-logo" />
                  </div>
                  <div className="cert-info">
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <p className="cert-meta">Issued {cert.issued}</p>
                    <p className="cert-meta">Credential ID {cert.credentialId}</p>
                  </div>
                </div>
                {cert.skills.length > 0 && (
                  <div className="cert-skills">
                    {cert.skills.map((s) => (
                      <span key={s} className="tech-tag">{s}</span>
                    ))}
                  </div>
                )}
                <div className="cert-actions">
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-verify-btn"
                  >
                    Show credential <HiExternalLink style={{ marginLeft: 5 }} />
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
