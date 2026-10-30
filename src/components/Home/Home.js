import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import {
  FaBriefcase,
  FaRocket,
  FaEnvelope,
  FaTrophy,
  FaCode,
} from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              {/* Status Pill */}
              <div className="hero-status-pill">
                <span className="hero-status-dot"></span>
                <span>Available for Full-Time Roles & Impactful Projects</span>
              </div>

              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                <span className="hero-im-prefix">I'M </span>
                <strong className="main-name">SWATI JAIN</strong>
              </h1>

              <div className="typewriter-container">
                <Type />
              </div>

              <p className="hero-bio-text">
                Full Stack Developer with <strong>1+ years</strong> of production experience building scalable web and cross-platform mobile applications using <strong>React.js</strong>, <strong>React Native</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>. Proven expertise in REST APIs, Razorpay integration, Firebase FCM, in-house SDK architecture, CI/CD, and AWS deployments.
              </p>

              {/* Action Buttons */}
              <div className="hero-action-buttons">
                <Button
                  as={Link}
                  to="/experience"
                  className="hero-btn-primary"
                >
                  <FaBriefcase className="me-2" /> Experience
                </Button>
                <Button
                  as={Link}
                  to="/project"
                  className="hero-btn-secondary"
                >
                  <FaRocket className="me-2" /> View Projects
                </Button>
                <Button
                  as={Link}
                  to="/contact"
                  className="hero-btn-outline"
                >
                  <FaEnvelope className="me-2" /> Let's Talk
                </Button>
              </div>
            </Col>

            <Col md={5} className="text-center home-hero-img-col">
              <div className="hero-avatar-wrapper">
                <img
                  src={homeLogo}
                  alt="Swati Jain Developer"
                  className="img-fluid hero-illustration"
                />
              </div>
            </Col>
          </Row>

          {/* Impact Stats Grid */}
          <div className="hero-stats-banner glass-card mt-5">
            <Row className="g-4 text-center">
              <Col xs={6} md={3}>
                <div className="stat-card">
                  <div className="stat-icon-wrapper purple">
                    <FaBriefcase />
                  </div>
                  <h3 className="stat-number">1+ Years</h3>
                  <p className="stat-label">Full Stack Experience</p>
                </div>
              </Col>
              <Col xs={6} md={3}>
                <div className="stat-card">
                  <div className="stat-icon-wrapper cyan">
                    <FaRocket />
                  </div>
                  <h3 className="stat-number">5+ Apps</h3>
                  <p className="stat-label">Web & Mobile Built</p>
                </div>
              </Col>
              <Col xs={6} md={3}>
                <div className="stat-card">
                  <div className="stat-icon-wrapper amber">
                    <FaCode />
                  </div>
                  <h3 className="stat-number">400+</h3>
                  <p className="stat-label">LeetCode & GFG Solved</p>
                </div>
              </Col>
              <Col xs={6} md={3}>
                <div className="stat-card">
                  <div className="stat-icon-wrapper pink">
                    <FaTrophy />
                  </div>
                  <h3 className="stat-number">AIR 3</h3>
                  <p className="stat-label">Codekaze Nationwide</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
