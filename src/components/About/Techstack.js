import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiSocketdotio,
  SiExpress,
  SiAmazonaws,
  SiGithubactions,
  SiGoogleplay,
} from "react-icons/si";

function Techstack() {
  const [activeCategory, setActiveCategory] = useState("all");

  const skills = [
    // Frontend & Mobile
    { name: "React.js", category: "frontend", icon: <DiReact />, level: "Expert" },
    { name: "React Native", category: "mobile", icon: <DiReact />, level: "Advanced" },
    { name: "TypeScript", category: "languages", icon: <SiTypescript />, level: "Advanced" },
    { name: "Next.js", category: "frontend", icon: <SiNextdotjs />, level: "Advanced" },
    { name: "JavaScript", category: "languages", icon: <DiJavascript1 />, level: "Expert" },
    { name: "Tailwind CSS", category: "frontend", icon: <SiTailwindcss />, level: "Advanced" },
    { name: "Bootstrap", category: "frontend", icon: <SiBootstrap />, level: "Proficient" },

    // Backend & APIs
    { name: "Node.js", category: "backend", icon: <DiNodejs />, level: "Expert" },
    { name: "Express.js", category: "backend", icon: <SiExpress />, level: "Expert" },
    { name: "Socket.IO", category: "backend", icon: <SiSocketdotio />, level: "Advanced" },
    { name: "REST APIs & JWT", category: "backend", icon: <DiNodejs />, level: "Advanced" },

    // Databases & Cloud
    { name: "MongoDB", category: "database", icon: <DiMongodb />, level: "Advanced" },
    { name: "MySQL", category: "database", icon: <SiMysql />, level: "Proficient" },
    { name: "Firebase & FCM", category: "cloud", icon: <SiFirebase />, level: "Advanced" },
    { name: "AWS Cloud", category: "cloud", icon: <SiAmazonaws />, level: "Proficient" },
    { name: "GitHub Actions", category: "cloud", icon: <SiGithubactions />, level: "Advanced" },
    { name: "Google Play", category: "mobile", icon: <SiGoogleplay />, level: "Proficient" },

    // Core Languages
    { name: "Java", category: "languages", icon: <DiJava />, level: "Advanced" },
    { name: "Python", category: "languages", icon: <DiPython />, level: "Proficient" },
    { name: "Git & GitHub", category: "cloud", icon: <DiGit />, level: "Expert" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="skills-filter-wrapper mb-4 text-center">
        {[
          { id: "all", label: "All Skills" },
          { id: "frontend", label: "Frontend" },
          { id: "mobile", label: "Mobile (React Native)" },
          { id: "backend", label: "Backend & APIs" },
          { id: "database", label: "Databases" },
          { id: "cloud", label: "Cloud & DevOps" },
          { id: "languages", label: "Languages" },
        ].map((cat) => (
          <button
            key={cat.id}
            className={`skill-filter-btn ${activeCategory === cat.id ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }} className="g-3">
        {filteredSkills.map((skill, index) => (
          <Col xs={6} sm={4} md={3} lg={2} key={index}>
            <div className="tech-skill-card glass-card">
              <div className="tech-skill-icon purple">{skill.icon}</div>
              <div className="tech-skill-name">{skill.name}</div>
              <span className="tech-skill-badge">{skill.level}</span>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Techstack;
