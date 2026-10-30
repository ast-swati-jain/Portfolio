import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiAndroidstudio,
  SiPostman,
  SiVercel,
  SiRender,
  SiAmazonaws,
  SiGithub,
  SiGoogleplay,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { name: "VS Code", icon: <SiVisualstudiocode /> },
    { name: "Android Studio", icon: <SiAndroidstudio /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "AWS Console", icon: <SiAmazonaws /> },
    { name: "Google Play Console", icon: <SiGoogleplay /> },
    { name: "Render", icon: <SiRender /> },
    { name: "Vercel", icon: <SiVercel /> },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }} className="g-3">
      {tools.map((tool, idx) => (
        <Col xs={6} sm={4} md={3} lg={3} key={idx}>
          <div className="tech-skill-card glass-card">
            <div className="tech-skill-icon purple">{tool.icon}</div>
            <div className="tech-skill-name">{tool.name}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
