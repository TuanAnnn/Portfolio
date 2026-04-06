import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body style={{ textAlign: "left" }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text as="div">
          {Array.isArray(props.description) ? (
            <ul style={{ paddingLeft: "18px", marginBottom: "16px" }}>
              {props.description.map((point, i) => (
                <li key={i} style={{ marginBottom: "4px" }}>{point}</li>
              ))}
            </ul>
          ) : (
            <p>{props.description}</p>
          )}
        </Card.Text>
        {props.techStack && (
          <div className="project-tech-stack">
            {props.techStack.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
