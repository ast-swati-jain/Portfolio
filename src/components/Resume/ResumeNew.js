import React, { useState } from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import Particle from "../Particle";
import {
  AiOutlineDownload,
  AiOutlineEye,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import {
  FaBriefcase,
  FaGraduationCap,
  FaTrophy,
  FaTools,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const RESUME_DRIVE_URL =
  "https://drive.google.com/file/d/19epzjYQmoDvB_Gok4QCKvXfAEJWMP_rB/view?usp=drive_link";
const RESUME_PREVIEW_URL =
  "https://drive.google.com/file/d/19epzjYQmoDvB_Gok4QCKvXfAEJWMP_rB/preview";

function ResumeNew() {
  const [viewMode, setViewMode] = useState("interactive"); // 'interactive' or 'pdf'

  return (
    <div className="resume-page-wrapper">
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          {/* Header */}
          <div className="section-header text-center mb-4">
            <span className="section-subtitle">CURRICULUM VITAE</span>
            <h1 className="project-heading">
              Resume & <strong className="purple">Credentials</strong>
            </h1>
            <p className="section-description">
              Full Stack & MERN Developer with 1+ years production experience building web & mobile platforms.
            </p>
          </div>

          {/* Action Bar & Mode Switcher */}
          <div className="resume-action-bar glass-card text-center mb-5">
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
              <div className="resume-mode-switch">
                <button
                  className={`mode-toggle-btn ${viewMode === "interactive" ? "active" : ""}`}
                  onClick={() => setViewMode("interactive")}
                >
                  <AiOutlineEye className="me-2" /> Interactive Resume
                </button>
                <button
                  className={`mode-toggle-btn ${viewMode === "pdf" ? "active" : ""}`}
                  onClick={() => setViewMode("pdf")}
                >
                  <FaExternalLinkAlt className="me-2" /> PDF Document
                </button>
              </div>

              <div className="d-flex gap-2">
                <Button
                  className="resume-download-btn"
                  href={RESUME_DRIVE_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineDownload /> &nbsp;Download CV
                </Button>
                <Button
                  className="resume-view-btn"
                  href={RESUME_DRIVE_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt /> &nbsp;Open on Drive
                </Button>
              </div>
            </div>
          </div>

          {/* Interactive Resume View */}
          {viewMode === "interactive" ? (
            <div className="interactive-cv-container">
              {/* Profile Card */}
              <div className="cv-card glass-card mb-4">
                <Row className="align-items-center">
                  <Col md={8}>
                    <h2 className="cv-name">Swati Jain</h2>
                    <h4 className="cv-title purple">Full Stack / MERN Developer</h4>
                    <p className="cv-summary mt-3">
                      Full Stack Developer with <strong>1+ years of experience</strong> building scalable web and cross-platform mobile applications using <strong>React.js, React Native, TypeScript, Node.js, Express.js, and MongoDB</strong>. Experienced in REST APIs, payment gateway integration (Razorpay), Firebase Analytics, FCM push notifications, CI/CD, AWS deployments, and production application maintenance.
                    </p>
                  </Col>
                  <Col md={4} className="cv-contact-info">
                    <div className="cv-contact-item">
                      <AiFillMail className="purple me-2" />
                      <a href="mailto:swati2003jain@gmail.com">swati2003jain@gmail.com</a>
                    </div>
                    <div className="cv-contact-item">
                      <AiFillPhone className="purple me-2" />
                      <a href="tel:+917240953261">+91 7240953261</a>
                    </div>
                    <div className="cv-contact-item">
                      <FaMapMarkerAlt className="purple me-2" />
                      <span>Shivpuri, Madhya Pradesh, India</span>
                    </div>
                    <div className="cv-contact-item">
                      <Badge bg="success" className="cv-avail-badge">
                        🟢 Open to Opportunities
                      </Badge>
                    </div>
                  </Col>
                </Row>
              </div>

              {/* Technical Skills Matrix */}
              <div className="cv-card glass-card mb-4">
                <h4 className="cv-section-title">
                  <FaTools className="purple me-2" /> Technical Skills
                </h4>
                <Row className="g-3 mt-2">
                  <Col md={6}>
                    <div className="cv-skill-group">
                      <span className="cv-skill-label">Languages:</span>
                      <span className="cv-skill-value">Java, Python, JavaScript, TypeScript</span>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="cv-skill-group">
                      <span className="cv-skill-label">Frontend & Mobile:</span>
                      <span className="cv-skill-value">React.js, React Native, Next.js, HTML5, CSS3, Tailwind CSS, Bootstrap, Expo</span>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="cv-skill-group">
                      <span className="cv-skill-label">Backend & APIs:</span>
                      <span className="cv-skill-value">Node.js, Express.js, REST APIs, JWT Auth, Firebase Analytics & FCM, Socket.IO, Axios</span>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="cv-skill-group">
                      <span className="cv-skill-label">Databases:</span>
                      <span className="cv-skill-value">MongoDB, MySQL</span>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="cv-skill-group">
                      <span className="cv-skill-label">Cloud & DevOps:</span>
                      <span className="cv-skill-value">AWS, GitHub Actions, Google Play Console, Git, GitHub, Render, Vercel</span>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="cv-skill-group">
                      <span className="cv-skill-label">Core Concepts:</span>
                      <span className="cv-skill-value">Data Structures & Algorithms, OOP, Operating Systems, DBMS, Agile/Scrum, Technical SEO</span>
                    </div>
                  </Col>
                </Row>
              </div>

              {/* Work Experience */}
              <div className="cv-card glass-card mb-4">
                <h4 className="cv-section-title">
                  <FaBriefcase className="purple me-2" /> Professional Experience
                </h4>

                {/* Job 1 */}
                <div className="cv-job-entry mb-4">
                  <div className="d-flex flex-wrap justify-content-between align-items-baseline">
                    <h5 className="cv-job-role">
                      Full Stack Developer — <span className="purple">AST Consulting</span>
                    </h5>
                    <span className="cv-job-date">July 2026 – Present</span>
                  </div>
                  <ul className="cv-job-bullets mt-2">
                    <li>
                      Architected and built a custom in-house News SDK — modeled after a third-party personalization SDK — covering personalised content feeds, engagement analytics (streaks, reading insights), AI-powered content summaries, and scheduled push notifications, replacing a paid vendor dependency with a fully owned solution.
                    </li>
                    <li>
                      Implemented Firebase Cloud Messaging (FCM) push notifications across both the mobile app (React Native) and website, supporting both broadcast and topic-based subscriptions for targeted user segmentation.
                    </li>
                    <li>
                      Developed and maintained a production React Native application using TypeScript, implementing features and resolving critical UI, functionality, authentication, navigation, deep linking, ePaper, Shorts, and content-rendering issues across Android and iOS.
                    </li>
                    <li>
                      Implemented Firebase Analytics and Google Analytics, adding custom events to track user interactions, feature usage, and key application flows for data-driven product improvements.
                    </li>
                    <li>
                      Architected and developed multiple Next.js web applications (D2CBot, Vrinda Property, Persona, Promoto AI, Bharat Post) with robust API integrations, responsive components, and advanced technical SEO to boost discoverability.
                    </li>
                    <li>
                      Worked extensively with Git/GitHub in an Agile environment and leveraged GitHub Copilot, Claude, and Antigravity for debugging, code analysis, feature development, and productivity.
                    </li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div className="cv-job-entry">
                  <div className="d-flex flex-wrap justify-content-between align-items-baseline">
                    <h5 className="cv-job-role">
                      Full Stack Developer — <span className="purple">Agritek India</span>
                    </h5>
                    <span className="cv-job-date">September 2025 – July 2026</span>
                  </div>
                  <ul className="cv-job-bullets mt-2">
                    <li>
                      Built and deployed production-ready web interfaces using React.js — including website components, admin panels, and reusable UI elements — and a React Native e-commerce mobile application from scratch covering product catalog, cart, checkout, and order management.
                    </li>
                    <li>
                      Developed RESTful APIs using Node.js and Express for authentication, products, cart, and order workflows, and integrated Razorpay payment gateway with secure backend verification.
                    </li>
                    <li>
                      Implemented multi-language (regional) support and a real-time notification system to improve user engagement.
                    </li>
                    <li>
                      Designed CI/CD pipelines using GitHub Actions and deployed applications on AWS and Google Play Console, achieving 99% uptime and 50% faster deployments.
                    </li>
                    <li>
                      Guided junior developers through code reviews and best practices, resolving 15+ critical application bugs.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Achievements & Education Grid */}
              <Row className="g-4 mb-4">
                <Col md={6}>
                  <div className="cv-card glass-card h-100">
                    <h4 className="cv-section-title">
                      <FaTrophy className="amber me-2" /> Certificates & Achievements
                    </h4>
                    <ul className="cv-achieve-list mt-3">
                      <li>
                        <FaCheckCircle className="purple me-2" />
                        <strong>Solved 400+ coding challenges</strong> on LeetCode & GeeksforGeeks.
                      </li>
                      <li>
                        <FaCheckCircle className="purple me-2" />
                        <strong>AIR 3 in Codekaze</strong> — Showcased algorithmic proficiency and outperformed thousands of participants nationwide.
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="cv-card glass-card h-100">
                    <h4 className="cv-section-title">
                      <FaGraduationCap className="purple me-2" /> Education
                    </h4>
                    <div className="cv-edu-item mt-3">
                      <h6 className="cv-edu-degree">B.Tech in Computer Science and Engineering</h6>
                      <p className="cv-edu-school">UIT RGPV, Shivpuri — CGPA: 9.0 (June 2024)</p>
                    </div>
                    <div className="cv-edu-item mt-2">
                      <h6 className="cv-edu-degree">Higher Secondary (Class XII)</h6>
                      <p className="cv-edu-school">Govt. Excellence School Shivpuri, MP Board — 90.6% (June 2020)</p>
                    </div>
                    <div className="cv-edu-item mt-2">
                      <h6 className="cv-edu-degree">High School (Class X)</h6>
                      <p className="cv-edu-school">Vidhya Niketan High School, Shivpuri, MP Board — 91.2% (June 2018)</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          ) : (
            /* Google Drive PDF Document Viewer */
            <div className="pdf-viewer-container glass-card p-3 p-md-4 text-center">
              <div className="drive-iframe-wrapper mb-3">
                <iframe
                  src={RESUME_PREVIEW_URL}
                  width="100%"
                  height="820px"
                  style={{
                    border: "1px solid rgba(168, 85, 247, 0.25)",
                    borderRadius: "12px",
                    background: "#0d0a1c",
                  }}
                  title="Swati Jain Resume Document"
                  allow="autoplay"
                ></iframe>
              </div>
              <div>
                <Button
                  className="resume-download-btn"
                  href={RESUME_DRIVE_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineDownload /> &nbsp;Open / Download from Google Drive
                </Button>
              </div>
            </div>
          )}
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
