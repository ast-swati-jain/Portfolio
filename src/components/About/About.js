import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import {
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaTrophy,
  FaCode,
  FaFileAlt,
  FaEnvelope,
} from "react-icons/fa";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Header Section */}
        <div className="section-header text-center mb-5">
          <span className="section-subtitle">ENGINEERING PROFILE & BACKGROUND</span>
          <h1 className="project-heading">
            Driven by Curiosity, <strong className="purple">Crafted with Precision</strong>
          </h1>
          <p className="section-description">
            Full Stack & Mobile Engineer with a passion for clean architecture, scalable systems, and algorithmic problem-solving.
          </p>
        </div>

        {/* Top Showcase: Bio + Snapshot Bento Grid */}
        <Row className="align-items-stretch mb-5">
          <Col lg={7} className="mb-4 mb-lg-0">
            <Aboutcard />
          </Col>

          <Col lg={5}>
            <div className="about-snapshot-card glass-card">
              <div className="snapshot-header">
                <div className="snapshot-avatar-ring">
                  <div className="snapshot-avatar-inner">
                    <span className="avatar-monogram">SJ</span>
                  </div>
                </div>
                <div className="snapshot-profile-text">
                  <h4 className="snapshot-name">Swati Jain</h4>
                  <p className="snapshot-title">Full Stack & Mobile Engineer</p>
                  <span className="snapshot-status-pill">
                    <span className="snapshot-dot"></span> Available for Roles
                  </span>
                </div>
              </div>

              <div className="snapshot-divider"></div>

              <div className="snapshot-facts-grid">
                <div className="snapshot-fact-item">
                  <div className="fact-icon purple"><FaBriefcase /></div>
                  <div className="fact-content">
                    <span className="fact-label">Current Role</span>
                    <span className="fact-value">Developer @ AST Consulting</span>
                  </div>
                </div>

                <div className="snapshot-fact-item">
                  <div className="fact-icon emerald"><FaGraduationCap /></div>
                  <div className="fact-content">
                    <span className="fact-label">Academic Standing</span>
                    <span className="fact-value">B.Tech CSE • CGPA 9.0 / 10</span>
                  </div>
                </div>

                <div className="snapshot-fact-item">
                  <div className="fact-icon amber"><FaTrophy /></div>
                  <div className="fact-content">
                    <span className="fact-label">Competitive Rank</span>
                    <span className="fact-value">AIR 3 — Codekaze Nationwide</span>
                  </div>
                </div>

                <div className="snapshot-fact-item">
                  <div className="fact-icon cyan"><FaCode /></div>
                  <div className="fact-content">
                    <span className="fact-label">Algorithmic Practice</span>
                    <span className="fact-value">400+ LeetCode & GFG Problems</span>
                  </div>
                </div>

                <div className="snapshot-fact-item">
                  <div className="fact-icon pink"><FaMapMarkerAlt /></div>
                  <div className="fact-content">
                    <span className="fact-label">Location</span>
                    <span className="fact-value">India (Open to Remote / Relocate)</span>
                  </div>
                </div>
              </div>

              <div className="snapshot-actions mt-4">
                <Button
                  href="https://drive.google.com/file/d/19epzjYQmoDvB_Gok4QCKvXfAEJWMP_rB/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="snapshot-btn-resume"
                >
                  <FaFileAlt className="me-2" /> View Resume
                </Button>
                <Button
                  as={Link}
                  to="/contact"
                  className="snapshot-btn-contact"
                >
                  <FaEnvelope className="me-2" /> Let's Connect
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        {/* Education & Academic Excellence */}
        <div className="education-showcase-section my-5">
          <div className="text-center mb-4">
            <span className="section-subtitle">SCHOLASTIC EXCELLENCE</span>
            <h2 className="project-heading">
              Education & <strong className="purple">Credentials</strong>
            </h2>
            <p className="text-muted-light">Demonstrated academic rigor and consistent top-tier achievements</p>
          </div>
          <Row className="g-4 justify-content-center">
            <Col md={4}>
              <div className="edu-card glass-card">
                <div className="edu-card-top">
                  <div className="edu-year purple">2020 – 2024</div>
                  <div className="edu-score-pill">CGPA: 9.0 / 10.0</div>
                </div>
                <h4 className="edu-title">B.Tech in Computer Science & Engineering</h4>
                <p className="edu-institution">UIT RGPV, Shivpuri</p>
                <div className="edu-divider"></div>
                <p className="edu-desc">
                  Core coursework: Data Structures & Algorithms, Object-Oriented Software Engineering, DBMS, Computer Networks, Operating Systems.
                </p>
                <div className="edu-footer-tag">First Class with Distinction</div>
              </div>
            </Col>
            <Col md={4}>
              <div className="edu-card glass-card">
                <div className="edu-card-top">
                  <div className="edu-year purple">2019 – 2020</div>
                  <div className="edu-score-pill">Score: 90.6%</div>
                </div>
                <h4 className="edu-title">Higher Secondary (Class XII)</h4>
                <p className="edu-institution">Govt. Excellence School, Shivpuri</p>
                <div className="edu-divider"></div>
                <p className="edu-desc">
                  Science, Mathematics, and Computer Science foundation with distinction across subjects.
                </p>
                <div className="edu-footer-tag">Science & Mathematics Distinction</div>
              </div>
            </Col>
            <Col md={4}>
              <div className="edu-card glass-card">
                <div className="edu-card-top">
                  <div className="edu-year purple">2017 – 2018</div>
                  <div className="edu-score-pill">Score: 91.2%</div>
                </div>
                <h4 className="edu-title">High School (Class X)</h4>
                <p className="edu-institution">Vidhya Niketan High School, Shivpuri</p>
                <div className="edu-divider"></div>
                <p className="edu-desc">
                  Strong foundational mastery in Mathematics, Science, and logical problem-solving aptitude.
                </p>
                <div className="edu-footer-tag">Academic Merit Award</div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Technical Skillset */}
        <div className="text-center my-4">
          <span className="section-subtitle">ARSENAL</span>
          <h2 className="project-heading">
            Professional <strong className="purple">Skillset</strong>
          </h2>
          <p className="text-muted-light">Technologies, frameworks, and languages I utilize in production</p>
        </div>
        <Techstack />

        {/* Tools & Workflows */}
        <div className="text-center my-4">
          <span className="section-subtitle">WORKFLOW</span>
          <h2 className="project-heading">
            <strong className="purple">Tools & Platforms</strong> I Use
          </h2>
          <p className="text-muted-light">Modern development, DevOps, and deployment ecosystems</p>
        </div>
        <Toolstack />

        {/* GitHub Showcase */}
        <Github />
      </Container>
    </Container>
  );
}

export default About;
