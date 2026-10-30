import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import { FaLinkedinIn, FaLaptopCode, FaMobileAlt, FaServer, FaCloud } from "react-icons/fa";

function Home2() {
  const pillars = [
    {
      icon: <FaLaptopCode />,
      title: "Full Stack & Web Apps",
      desc: "Specializing in high-performance web applications using React.js, Next.js, and TypeScript with robust technical SEO, SSR/SSG, and responsive glassmorphism UI.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Cross-Platform Mobile",
      desc: "Architecting end-to-end React Native mobile apps for Android & iOS covering authentication, deep linking, e-commerce workflows, and FCM push notifications.",
    },
    {
      icon: <FaServer />,
      title: "Backend & Real-Time APIs",
      desc: "Designing resilient RESTful microservices with Node.js, Express, Socket.IO, JWT auth, MongoDB, MySQL, and seamless Razorpay payment integrations.",
    },
    {
      icon: <FaCloud />,
      title: "DevOps, Cloud & SDKs",
      desc: "Architecting in-house SDKs replacing paid vendor solutions, setting up GitHub Actions CI/CD pipelines, and deploying on AWS & Google Play with 99% uptime.",
    },
  ];

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center mb-5">
          <Col md={8} className="home-about-description">
            <span className="section-subtitle">ABOUT MY JOURNEY</span>
            <h1 className="section-title">
              CRAFTING <span className="purple">SCALABLE SOFTWARE</span> FROM VISION TO PRODUCTION
            </h1>
            <p className="home-about-body">
              Hi! I'm <b className="purple">Swati Jain</b>, a results-driven Full Stack Developer based in India. With a strong foundation in Computer Science (B.Tech CGPA 9.0) and 1+ years of production experience at AST Consulting and Agritek India, I bridge the gap between intuitive user experiences and rock-solid backend infrastructure.
              <br />
              <br />
              My core toolkit revolves around{" "}
              <i>
                <b className="purple">React.js, React Native, TypeScript, Next.js, Node.js, and MongoDB</b>
              </i>
              . I thrive on architecting custom solutions — like in-house news & personalization SDKs, real-time polling systems, and high-converting e-commerce apps with Razorpay payments and FCM push notifications.
              <br />
              <br />
              Beyond product engineering, I am passionate about competitive programming, having solved{" "}
              <b className="purple">400+ problems on LeetCode & GeeksforGeeks</b> and achieved{" "}
              <b className="purple">AIR 3 in Codekaze</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar text-center">
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
              <div className="avatar-glass-ring">
                <img src={myImg} className="img-fluid" alt="Swati Jain avatar" />
              </div>
            </Tilt>
          </Col>
        </Row>

        {/* Pillars of Expertise */}
        <div className="pillars-section mt-5 pt-3">
          <div className="text-center mb-4">
            <h2 className="project-heading">
              What I <strong className="purple">Bring to the Table</strong>
            </h2>
            <p className="text-muted-light">
              Comprehensive full-stack lifecycle capabilities from architecture to deployment
            </p>
          </div>

          <Row className="g-4">
            {pillars.map((pillar, idx) => (
              <Col md={6} lg={3} key={idx}>
                <div className="pillar-card glass-card">
                  <div className="pillar-icon-box purple">{pillar.icon}</div>
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Social Connect Banner */}
        <Row className="mt-5 pt-4">
          <Col md={12} className="home-about-social">
            <h1>LET'S CONNECT & COLLABORATE</h1>
            <p>
              Feel free to reach out via GitHub, LinkedIn, email, or direct call.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ast-swati-jain"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="GitHub - ast-swati-jain"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/swati-jain-sj/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="LinkedIn - Swati Jain"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:swati2003jain@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Email Swati"
                >
                  <AiFillMail />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="tel:+917240953261"
                  className="icon-colour home-social-icons"
                  title="Call +91 7240953261"
                >
                  <AiFillPhone />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
