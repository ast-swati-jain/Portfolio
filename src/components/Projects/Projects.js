import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import {
  FaCheckCircle,
  FaBolt,
  FaRobot,
  FaLaptopCode,
  FaExternalLinkAlt,
  FaStar,
} from "react-icons/fa";

// Project assets
import livePollingImg from "../../Assets/Projects/live_polling.jpg";
import discordBotImg from "../../Assets/Projects/discord_bot.jpg";
import videoconImg from "../../Assets/Projects/video.png";
import contentImg from "../../Assets/Projects/content.png";
import healthifyImg from "../../Assets/Projects/healtify.jpg";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const allProjects = [
    {
      id: "live-polling",
      title: "Live Polling System",
      category: "realtime",
      categoryLabel: "Real-Time Full Stack",
      categoryIcon: <FaBolt />,
      isFeatured: true,
      badgeText: "Featured Highlight",
      imgPath: livePollingImg,
      tags: ["React", "Node.js", "Socket.IO", "MongoDB", "Tailwind CSS", "TypeScript"],
      summary:
        "A high-concurrency real-time interactive polling platform built for live audience engagement, instant vote tallying, and collaborative classroom interactions.",
      highlights: [
        "Instant real-time vote registration with zero latency powered by Socket.IO.",
        "Dynamic live visual charts auto-updating simultaneously across all connected clients.",
        "Role-based Teacher & Student dashboard with dedicated poll control & voting views.",
        "Integrated live chat stream with persistent message storage via MongoDB.",
      ],
      ghLink: "https://github.com/ast-swati-jain/live-polling-system",
      demoLink: "https://github.com/ast-swati-jain/live-polling-system",
    },
    {
      id: "discord-bot",
      title: "OpenAI GPT Discord Server Bot",
      category: "ai",
      categoryLabel: "AI & Automation",
      categoryIcon: <FaRobot />,
      isFeatured: true,
      badgeText: "AI Integration",
      imgPath: discordBotImg,
      tags: ["Node.js", "Discord.js", "OpenAI GPT API", "Express", "Render"],
      summary:
        "Intelligent multi-channel Discord chatbot utilizing OpenAI GPT API to provide instant, context-aware answers, code snippets, and automated server assistance.",
      highlights: [
        "Generates intelligent contextual answers using OpenAI GPT API models.",
        "Realistic auto-typing indicator simulation for natural conversational flow.",
        "Automated chunking and formatting to handle Discord message character limits.",
        "Continuous 24/7 uptime hosted on Render with a lightweight Express server.",
      ],
      ghLink: "https://github.com/ast-swati-jain/discord_bot",
      demoLink: "https://github.com/ast-swati-jain/discord_bot",
    },
    {
      id: "video-conf",
      title: "Video Conference & Collaboration Platform",
      category: "realtime",
      categoryLabel: "Real-Time Full Stack",
      categoryIcon: <FaBolt />,
      isFeatured: false,
      badgeText: "WebRTC / Video",
      imgPath: videoconImg,
      tags: ["React.js", "TypeScript", "WebRTC", "Firebase", "ZegoCloud"],
      summary:
        "Interactive virtual meeting room offering crystal-clear live video streaming, screen sharing, and multi-user collaboration.",
      highlights: [
        "Seamless peer-to-peer and group video conferencing with instant room codes.",
        "High-definition screen sharing with audio and latency optimization.",
        "Built-in live chat with reactions, media sharing, and participant controls.",
      ],
      ghLink: "https://github.com/ast-swati-jain/Video_conference",
      demoLink: "https://github.com/ast-swati-jain/Video_conference",
    },
    {
      id: "connect-world",
      title: "Connect World: Content Management System",
      category: "web",
      categoryLabel: "Web Applications",
      categoryIcon: <FaLaptopCode />,
      isFeatured: false,
      badgeText: "MERN Stack",
      imgPath: contentImg,
      tags: ["React.js", "Node.js", "Express", "MongoDB", "Cloudinary"],
      summary:
        "Full-stack blogging and publishing platform empowering creators to draft, categorize, and publish technical articles to an interactive community.",
      highlights: [
        "Rich text editor with image uploads, tags, and summary generation.",
        "Secure JWT-based user authentication, author profiles, and dashboard.",
        "Optimized MongoDB data schemas for rapid article retrieval and search.",
      ],
      ghLink: "https://github.com/ast-swati-jain/Content-management-System-",
      demoLink: "https://github.com/ast-swati-jain/Content-management-System-",
    },
    {
      id: "healthify",
      title: "Healthify: Disease Prediction AI System",
      category: "ai",
      categoryLabel: "AI & Machine Learning",
      categoryIcon: <FaRobot />,
      isFeatured: false,
      badgeText: "Machine Learning",
      imgPath: healthifyImg,
      tags: ["Python", "Flask", "Machine Learning", "MongoDB"],
      summary:
        "Machine learning diagnostic tool analyzing patient biomedical metrics to forecast potential disease risks with personalized health insights.",
      highlights: [
        "Trained classification algorithms on multi-dimensional patient datasets.",
        "Clean web interface built with Flask for entering biomedical parameters.",
        "Generates preventive health risk assessments and lifestyle guidance.",
      ],
      ghLink: "https://github.com/ast-swati-jain/Healthify--Disease--Prediction-System",
      demoLink: "https://github.com/ast-swati-jain/Healthify--Disease--Prediction-System",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  const featuredList = filteredProjects.filter((p) => p.isFeatured);
  const gridList = filteredProjects.filter((p) => !p.isFeatured);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Header */}
        <div className="section-header text-center mb-4">
          <span className="section-subtitle">PROJECTS & CASE STUDIES</span>
          <h1 className="project-heading">
            Featured <strong className="purple">Engineering Works</strong>
          </h1>
          <p className="section-description">
            Selected full-stack platforms, real-time web applications, AI bots, and modern web architectures.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="projects-filter-wrapper text-center mb-5">
          {[
            { id: "all", label: "All Projects" },
            { id: "realtime", label: "Real-Time & Full Stack" },
            { id: "ai", label: "AI & Automation" },
            { id: "web", label: "Web Applications" },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`project-filter-btn ${activeFilter === tab.id ? "active" : ""}`}
              onClick={() => setActiveFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 1. FEATURED SHOWCASE (Wide Split-Screen Cards) */}
        {featuredList.length > 0 && (
          <div className="featured-showcase-container mb-5">
            {featuredList.map((project, idx) => (
              <div
                key={project.id}
                className={`featured-project-card glass-card mb-5 ${
                  idx % 2 === 1 ? "featured-reverse" : ""
                }`}
              >
                <Row className="align-items-center g-0">
                  {/* Visual Preview Side */}
                  <Col lg={6} className="featured-media-col">
                    <div className="featured-media-wrapper">
                      {/* Browser Mockup Top Bar */}
                      <div className="mockup-window-header">
                        <span className="window-dot dot-red"></span>
                        <span className="window-dot dot-yellow"></span>
                        <span className="window-dot dot-green"></span>
                        <span className="mockup-window-title">
                          {project.title.toLowerCase().replace(/\s+/g, "-")}.app
                        </span>
                      </div>
                      <div className="mockup-img-frame">
                        <img
                          src={project.imgPath}
                          alt={project.title}
                          className="featured-img"
                        />
                        <div className="media-overlay-badge">
                          <FaStar className="me-1 text-warning" />
                          <span>{project.badgeText}</span>
                        </div>
                      </div>
                    </div>
                  </Col>

                  {/* Content Detail Side */}
                  <Col lg={6} className="featured-content-col">
                    <div className="featured-content-inner p-4 p-xl-5">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="featured-category-badge">
                          {project.categoryIcon} &nbsp;{project.categoryLabel}
                        </span>
                      </div>

                      <h2 className="featured-title">{project.title}</h2>

                      <p className="featured-summary-text">{project.summary}</p>

                      <div className="featured-highlights-block mb-4">
                        <h6 className="highlights-heading">Key Features:</h6>
                        <ul className="featured-bullets-list">
                          {project.highlights.map((h, i) => (
                            <li key={i}>
                              <FaCheckCircle className="purple me-2 flex-shrink-0 mt-1" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="featured-tags-row mb-4">
                        {project.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="featured-tech-pill">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="featured-actions-row">
                        <Button
                          href={project.ghLink}
                          target="_blank"
                          rel="noreferrer"
                          className="featured-btn-primary"
                        >
                          <BsGithub className="me-2" /> View GitHub
                        </Button>
                        <Button
                          href={project.demoLink}
                          target="_blank"
                          rel="noreferrer"
                          className="featured-btn-secondary"
                        >
                          <CgWebsite className="me-2" /> Live Demo
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        )}

        {/* 2. OTHER PROJECTS (Modern Bento Glass Grid) */}
        {gridList.length > 0 && (
          <div className="grid-showcase-section mt-4">
            {featuredList.length > 0 && (
              <div className="section-subheading-wrap text-center mb-4">
                <h3 className="section-subheading-text">
                  More <span className="purple">Production & Web Applications</span>
                </h3>
              </div>
            )}

            <Row className="g-4">
              {gridList.map((project) => (
                <Col md={6} lg={6} key={project.id} className="d-flex">
                  <div className="bento-project-card glass-card d-flex flex-column w-100">
                    {/* Window Header */}
                    <div className="mockup-window-header">
                      <span className="window-dot dot-red"></span>
                      <span className="window-dot dot-yellow"></span>
                      <span className="window-dot dot-green"></span>
                      <span className="mockup-window-title">
                        {project.title.toLowerCase().replace(/\s+/g, "-")}
                      </span>
                    </div>

                    <div className="bento-img-frame">
                      <img
                        src={project.imgPath}
                        alt={project.title}
                        className="bento-img"
                      />
                      <span className="bento-category-tag">
                        {project.categoryLabel}
                      </span>
                    </div>

                    <div className="bento-body p-4 d-flex flex-column flex-grow-1">
                      <h3 className="bento-title mb-2">{project.title}</h3>
                      <p className="bento-summary flex-grow-1">{project.summary}</p>

                      <ul className="bento-bullets mb-3">
                        {project.highlights.map((h, i) => (
                          <li key={i}>
                            <FaCheckCircle className="purple me-2 flex-shrink-0 mt-1" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="bento-tags mb-3">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="bento-tag-pill">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="bento-actions d-flex gap-2 pt-3 border-top border-secondary border-opacity-25">
                        <Button
                          href={project.ghLink}
                          target="_blank"
                          rel="noreferrer"
                          className="bento-btn-github"
                        >
                          <BsGithub className="me-2" /> Code
                        </Button>
                        <Button
                          href={project.demoLink}
                          target="_blank"
                          rel="noreferrer"
                          className="bento-btn-demo"
                        >
                          <FaExternalLinkAlt className="me-2" /> Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default Projects;
