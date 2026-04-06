import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Phan Tuấn An</span>{" "}
            from <span className="purple">Ho Chi Minh City, Vietnam</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Technical Leader</span> at{" "}
            <span className="purple">IES Limited</span>.
            <br />I hold a Bachelor’s degree from{" "}
            <span className="purple">University of Science (HCMUS)</span>.
            <br />
            <br />
            Outside of coding, I enjoy activities that keep me inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Building side projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and exploring new places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build systems that scale, write code that lasts!"{" "}
          </p>
          <footer className="blockquote-footer">Tuan An</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
