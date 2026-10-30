import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillMail, AiFillPhone } from "react-icons/ai";
import { FaLinkedinIn, FaHeart } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="modern-footer">
      <Container>
        <Row className="gy-4 align-items-center justify-content-between py-4">
          {/* Brand & Tagline */}
          <Col md={5} className="text-center text-md-start">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
              <span className="brand-badge me-2">&lt;SJ /&gt;</span>
              <span className="footer-brand-name">
                Swati<span className="brand-accent">.dev</span>
              </span>
            </div>
            <p className="footer-tagline">
              Full Stack / MERN Developer crafting robust web & mobile products with React.js, React Native, TypeScript, and Node.js.
            </p>
          </Col>

          {/* Quick Nav Links */}
          <Col md={4} className="text-center">
            <div className="footer-nav-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/experience" className="footer-link">Experience</Link>
              <Link to="/project" className="footer-link">Projects</Link>
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/resume" className="footer-link">Resume</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </Col>

          {/* Social Links */}
          <Col md={3} className="text-center text-md-end">
            <div className="footer-social-icons">
              <a
                href="https://github.com/ast-swati-jain"
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                title="GitHub"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/swati-jain-sj/"
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="mailto:swati2003jain@gmail.com"
                className="footer-social-btn"
                title="Email"
              >
                <AiFillMail />
              </a>
              <a
                href="tel:+917240953261"
                className="footer-social-btn"
                title="Phone"
              >
                <AiFillPhone />
              </a>
            </div>
          </Col>
        </Row>

        <div className="footer-bottom-divider"></div>

        <Row className="py-3 text-center">
          <Col>
            <p className="footer-copyright mb-0">
              Designed & Developed with <FaHeart className="heart-icon purple mx-1" /> by{" "}
              <strong className="text-white">Swati Jain</strong> • © {currentYear} All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
