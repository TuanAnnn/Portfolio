import React from "react";
import { SiNestjs, SiAdonisjs, SiExpress, SiMysql, SiSocketdotio, SiGithubactions, SiPrometheus, SiGrafana, SiTerraform } from "react-icons/si";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";

const categories = [
  {
    label: "Languages",
    skills: [
      { icon: <img src={Typescript} alt="typescript" />, name: "TypeScript" },
      { icon: <img src={Javascript} alt="javascript" />, name: "JavaScript" },
      { icon: <img src={Java} alt="java" />, name: "Java" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { icon: <img src={Node} alt="node" />, name: "Node.js" },
      { icon: <SiNestjs fontSize={"22px"} />, name: "NestJS" },
      { icon: <SiExpress fontSize={"22px"} />, name: "ExpressJS" },
      { icon: <SiAdonisjs fontSize={"22px"} />, name: "AdonisJS" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { icon: <img src={ReactIcon} alt="react" />, name: "ReactJS" },
      { icon: <img src={ReactIcon} alt="react native" />, name: "React Native" },
    ],
  },
  {
    label: "Databases & Caching",
    skills: [
      { icon: <img src={SQL} alt="postgresql" />, name: "PostgreSQL" },
      { icon: <SiMysql fontSize={"22px"} />, name: "MySQL" },
      { icon: <img src={Mongo} alt="mongodb" />, name: "MongoDB" },
      { icon: <img src={Redis} alt="redis" />, name: "Redis" },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { icon: <img src={AWS} alt="aws" className="tech-icon-images" />, name: "AWS" },
      { icon: <img src={Docker} alt="docker" />, name: "Docker" },
      { icon: <SiTerraform fontSize={"22px"} />, name: "Terraform" },
      { icon: <SiGithubactions fontSize={"22px"} />, name: "GitHub Actions" },
      { icon: <img src={Git} alt="git" />, name: "Git" },
    ],
  },
  {
    label: "Monitoring",
    skills: [
      { icon: <SiSocketdotio fontSize={"22px"} />, name: "Socket.IO" },
      { icon: <SiPrometheus fontSize={"22px"} />, name: "Prometheus" },
      { icon: <SiGrafana fontSize={"22px"} />, name: "Grafana" },
      { icon: <img src={Firebase} alt="firebase" />, name: "Firebase" },
    ],
  },
];

function Techstack() {
  return (
    <div style={{ paddingBottom: "50px" }}>
      {categories.map((cat) => (
        <div key={cat.label} className="skill-category">
          <div className="skill-category-label">{cat.label}</div>
          <div className="skill-category-items">
            {cat.skills.map((skill) => (
              <div key={skill.name} className="tech-icons">
                {skill.icon}
                <div className="tech-icons-text">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
