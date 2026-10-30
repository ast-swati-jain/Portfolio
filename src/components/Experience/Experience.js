import React, { useState } from "react";
import { Container, Badge } from "react-bootstrap";
import Particle from "../Particle";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRocket,
  FaCheckCircle,
  FaAws,
  FaReact,
  FaNodeJs,
  FaMobileAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
  SiMongodb,
  SiGithubactions,
  SiRazorpay,
} from "react-icons/si";

function Experience() {
  const [activeTab, setActiveTab] = useState("all");

  const experiences = [
    {
      id: "ast",
      role: "Full Stack Developer",
      company: "AST Consulting",
      period: "July 2026 – Present",
      type: "Full-Time",
      location: "India",
      tagline: "Architecture of Custom In-House SDKs, Production React Native Apps & Next.js Platforms",
      highlights: [
        "Architected and built a custom in-house News SDK — modeled after a third-party personalization SDK — covering personalised content feeds, engagement analytics (streaks, reading insights), AI-powered content summaries, and scheduled push notifications, successfully replacing a paid vendor dependency with a fully owned solution.",
        "Implemented Firebase Cloud Messaging (FCM) push notifications across both the mobile app (React Native) and website, supporting both broadcast and topic-based subscriptions for targeted user segmentation.",
        "Developed and maintained a production React Native application using TypeScript, implementing features and resolving critical UI, functionality, authentication, navigation, deep linking, ePaper, Shorts, and content-rendering issues across Android and iOS.",
        "Implemented Firebase Analytics and Google Analytics, adding custom events to track user interactions, feature usage, and key application flows for data-driven product improvements.",
        "Architected and developed multiple Next.js web applications (D2CBot, Vrinda Property, Persona, Promoto AI, Bharat Post) with robust API integrations, responsive components, and advanced technical SEO to boost discoverability.",
        "Worked extensively with Git/GitHub in an Agile environment and leveraged GitHub Copilot, Claude, and Antigravity for rapid debugging, code analysis, feature development, and productivity.",
      ],
      skills: [
        { name: "React.js / Next.js", icon: <SiNextdotjs /> },
        { name: "React Native", icon: <FaReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Firebase (FCM & Analytics)", icon: <SiFirebase /> },
        { name: "Node.js & Express", icon: <FaNodeJs /> },
        { name: "In-House SDK Design", icon: <FaRocket /> },
        { name: "Technical SEO", icon: <FaCheckCircle /> },
      ],
      metrics: [
        { label: "Vendor Cost Replaced", value: "100% Owned SDK" },
        { label: "Platforms Supported", value: "Android, iOS & Web" },
        { label: "Next.js Apps Built", value: "5+ Web Apps" },
      ],
    },
    {
      id: "agritek",
      role: "Full Stack Developer",
      company: "Agritek India",
      period: "September 2025 – July 2026",
      type: "Full-Time",
      location: "India",
      tagline: "E-Commerce Ecosystem: React Native Mobile, React Admin Portal, Node APIs & AWS CI/CD",
      highlights: [
        "Built and deployed production-ready web interfaces using React.js — including website components, admin panels, and reusable UI elements — and a React Native e-commerce mobile application from scratch covering product catalog, cart, checkout, and order management.",
        "Developed RESTful APIs using Node.js and Express for authentication, products, cart, and order workflows, and integrated Razorpay payment gateway with secure backend verification.",
        "Implemented multi-language (regional) support and a real-time notification system to significantly enhance user engagement and accessibility.",
        "Designed CI/CD pipelines using GitHub Actions and deployed applications on AWS and Google Play Console, achieving 99% uptime and 50% faster deployments.",
        "Guided junior developers through regular code reviews and best practices, resolving 15+ critical application bugs.",
      ],
      skills: [
        { name: "React Native", icon: <FaMobileAlt /> },
        { name: "React.js & Admin Panels", icon: <FaReact /> },
        { name: "Node.js & Express REST APIs", icon: <FaNodeJs /> },
        { name: "Razorpay Payment Gateway", icon: <SiRazorpay /> },
        { name: "AWS & Google Play Console", icon: <FaAws /> },
        { name: "GitHub Actions CI/CD", icon: <SiGithubactions /> },
        { name: "MongoDB & MySQL", icon: <SiMongodb /> },
      ],
      metrics: [
        { label: "Production Uptime", value: "99% High Availability" },
        { label: "Deployment Speed", value: "50% Faster via CI/CD" },
        { label: "Critical Bugs Fixed", value: "15+ Resolved" },
      ],
    },
  ];

  const filteredExperiences =
    activeTab === "all"
      ? experiences
      : experiences.filter((exp) => exp.id === activeTab);

  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <div className="section-header text-center">
          <span className="section-subtitle">
            <FaBriefcase className="me-2" /> CAREER TIMELINE
          </span>
          <h1 className="project-heading">
            Work <strong className="purple">Experience</strong>
          </h1>
          <p className="section-description">
            1+ years building production-grade web platforms, scalable mobile applications, in-house SDKs, and cloud microservices.
          </p>
        </div>

        {/* Quick Filter Buttons */}
        <div className="experience-filter-tabs">
          <button
            className={`exp-tab-btn ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All Experience ({experiences.length})
          </button>
          <button
            className={`exp-tab-btn ${activeTab === "ast" ? "active" : ""}`}
            onClick={() => setActiveTab("ast")}
          >
            AST Consulting
          </button>
          <button
            className={`exp-tab-btn ${activeTab === "agritek" ? "active" : ""}`}
            onClick={() => setActiveTab("agritek")}
          >
            Agritek India
          </button>
        </div>

        {/* Experience Timeline */}
        <div className="experience-timeline">
          {filteredExperiences.map((exp, index) => (
            <div key={exp.id} className="experience-card glass-card">
              <div className="exp-card-header">
                <div className="exp-header-left">
                  <div className="company-badge-icon">
                    <FaBriefcase />
                  </div>
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company purple">
                      {exp.company}{" "}
                      <Badge bg="secondary" className="exp-type-badge">
                        {exp.type}
                      </Badge>
                    </h4>
                  </div>
                </div>

                <div className="exp-header-right">
                  <div className="exp-meta-item">
                    <FaCalendarAlt className="purple me-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="exp-meta-item">
                    <FaMapMarkerAlt className="purple me-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="exp-tagline">{exp.tagline}</div>

              {/* Metrics Highlights Bar */}
              <div className="exp-metrics-bar">
                {exp.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="exp-metric-box">
                    <span className="exp-metric-value purple">
                      {metric.value}
                    </span>
                    <span className="exp-metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>

              {/* Responsibilities list */}
              <div className="exp-highlights-list">
                <h5 className="exp-subheading">Key Contributions & Impact:</h5>
                <ul>
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="exp-bullet-item">
                      <FaCheckCircle className="exp-check-icon purple" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div className="exp-skills-container">
                <h6 className="exp-skills-title">Core Technologies:</h6>
                <div className="exp-tech-tags">
                  {exp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="exp-tech-chip">
                      <span className="exp-chip-icon">{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Experience;
