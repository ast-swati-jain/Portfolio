import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import Particle from "./Particle";
import {
  AiFillGithub,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import {
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaCheck,
  FaCopy,
  FaPaperPlane,
  FaClock,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false, message: "" });

    emailjs
      .send("service_mbf2e64", "template_1ddr4u9", formData, "yLEr6E0sijQUKb1Bc")
      .then((response) => {
        setStatus({
          submitting: false,
          success: true,
          error: false,
          message: "Thank you! Your message has been sent successfully. I'll get back to you shortly.",
        });
        setFormData({ user_name: "", user_email: "", user_subject: "", message: "" });
      })
      .catch((err) => {
        // Fallback: even if emailjs quota limit is hit, offer direct mailto link
        setStatus({
          submitting: false,
          success: false,
          error: true,
          message: "Note: Message service busy. Please email me directly at swati2003jain@gmail.com!",
        });
      });
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <div className="section-header text-center mb-5">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h1 className="project-heading">
            Let's <strong className="purple">Connect</strong>
          </h1>
          <p className="section-description">
            Open for full-stack engineering roles, technical inquiries, and collaborative projects.
          </p>
        </div>

        <Row className="g-5 justify-content-center">
          {/* Left Column: Direct Info Cards */}
          <Col lg={5}>
            <div className="contact-info-panel glass-card p-4">
              <h3 className="contact-panel-title mb-4">Contact Information</h3>

              {/* Email Card */}
              <div className="contact-card mb-3">
                <div className="contact-card-icon purple">
                  <AiFillMail />
                </div>
                <div className="contact-card-content flex-grow-1">
                  <span className="contact-card-label">Email</span>
                  <a href="mailto:swati2003jain@gmail.com" className="contact-card-link">
                    swati2003jain@gmail.com
                  </a>
                </div>
                <button
                  className="contact-copy-btn"
                  onClick={() => copyToClipboard("swati2003jain@gmail.com", "email")}
                  title="Copy email address"
                >
                  {copiedEmail ? <FaCheck className="text-success" /> : <FaCopy />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="contact-card mb-3">
                <div className="contact-card-icon cyan">
                  <AiFillPhone />
                </div>
                <div className="contact-card-content flex-grow-1">
                  <span className="contact-card-label">Phone</span>
                  <a href="tel:+917240953261" className="contact-card-link">
                    +91 7240953261
                  </a>
                </div>
                <button
                  className="contact-copy-btn"
                  onClick={() => copyToClipboard("+917240953261", "phone")}
                  title="Copy phone number"
                >
                  {copiedPhone ? <FaCheck className="text-success" /> : <FaCopy />}
                </button>
              </div>

              {/* Location Card */}
              <div className="contact-card mb-3">
                <div className="contact-card-icon pink">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-card-content">
                  <span className="contact-card-label">Location</span>
                  <span className="contact-card-value">Shivpuri, Madhya Pradesh, India</span>
                </div>
              </div>

              {/* Availability Badge */}
              <div className="availability-card mt-4 p-3 glass-card">
                <div className="d-flex align-items-center mb-2">
                  <span className="status-dot me-2"></span>
                  <strong className="text-white">Current Status</strong>
                </div>
                <p className="avail-text">
                  Actively available for Full Stack / MERN Developer opportunities, React Native mobile roles, and high-impact engineering teams.
                </p>
                <div className="d-flex align-items-center text-muted-light mt-2" style={{ fontSize: "0.85em" }}>
                  <FaClock className="me-2 purple" />
                  <span>Typically responds within 24 hours</span>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="contact-social-row mt-4 pt-2">
                <span className="text-muted-light d-block mb-3">Professional Profiles:</span>
                <div className="d-flex gap-3">
                  <a
                    href="https://github.com/ast-swati-jain"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-social-link"
                    title="GitHub: ast-swati-jain"
                  >
                    <AiFillGithub /> <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/swati-jain-sj/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-social-link"
                    title="LinkedIn: Swati Jain"
                  >
                    <FaLinkedinIn /> <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Column: Glassmorphism Contact Form */}
          <Col lg={7}>
            <div className="contact-form-panel glass-card p-4 p-md-5">
              <h3 className="contact-panel-title mb-2">Send a Direct Message</h3>
              <p className="text-muted-light mb-4">
                Have an inquiry or project proposal? Fill out the form below or send an email directly.
              </p>

              {status.success && (
                <Alert variant="success" className="custom-alert mb-4">
                  <FaCheck className="me-2" /> {status.message}
                </Alert>
              )}

              {status.error && (
                <Alert variant="warning" className="custom-alert mb-4">
                  {status.message}
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="custom-contact-form">
                <Row className="g-3">
                  <Col md={6}>
                    <div className="form-group mb-3">
                      <label className="form-label-custom">Your Name *</label>
                      <input
                        type="text"
                        name="user_name"
                        className="form-input-custom"
                        placeholder="e.g. John Doe"
                        value={formData.user_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="form-group mb-3">
                      <label className="form-label-custom">Your Email *</label>
                      <input
                        type="email"
                        name="user_email"
                        className="form-input-custom"
                        placeholder="e.g. john@company.com"
                        value={formData.user_email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Col>
                </Row>

                <div className="form-group mb-3">
                  <label className="form-label-custom">Subject *</label>
                  <input
                    type="text"
                    name="user_subject"
                    className="form-input-custom"
                    placeholder="e.g. Full Stack Developer Opportunity / Project Discussion"
                    value={formData.user_subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="form-label-custom">Message *</label>
                  <textarea
                    name="message"
                    className="form-input-custom form-textarea-custom"
                    placeholder="Hello Swati, I'd like to discuss a role/project with you regarding..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                  <Button
                    type="submit"
                    className="contact-submit-btn"
                    disabled={status.submitting}
                  >
                    {status.submitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <FaPaperPlane className="me-2" /> Send Message
                      </>
                    )}
                  </Button>

                  <a
                    href={`mailto:swati2003jain@gmail.com?subject=${encodeURIComponent(
                      formData.user_subject || "Portfolio Inquiry"
                    )}&body=${encodeURIComponent(formData.message || "")}`}
                    className="mailto-fallback-link"
                  >
                    Open in default mail client &rarr;
                  </a>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
