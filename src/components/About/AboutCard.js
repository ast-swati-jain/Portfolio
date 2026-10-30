import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaCloud,
} from "react-icons/fa";

function AboutCard() {
  const principles = [
    {
      icon: <FaLaptopCode />,
      title: "Scalable Architecture & Clean Code",
      desc: "Strict TypeScript type-safety, modular component design, and automated CI/CD for resilient, zero-downtime releases.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Fluid Cross-Platform Experience",
      desc: "Architecting 60fps React Native mobile applications on Android & iOS with deep linking, Razorpay checkout, and real-time FCM push notifications.",
    },
    {
      icon: <FaServer />,
      title: "High-Throughput APIs & Microservices",
      desc: "Designing resilient RESTful APIs, secure JWT auth, WebSocket real-time pipelines, and robust database architectures with MongoDB and MySQL.",
    },
    {
      icon: <FaCloud />,
      title: "Autonomous In-House Engineering",
      desc: "Engineering custom SDKs to eliminate paid third-party vendor dependencies, slashing external costs and cutting maintenance overhead by 40%.",
    },
  ];

  return (
    <div className="about-bio-card glass-card">
      <div className="about-bio-badge-row mb-3">
        <span className="section-pill-tag">Engineering Bio</span>
        <span className="badge-pill-purple">1+ Years Production Exp</span>
      </div>

      <h3 className="about-bio-title">
        Engineering Scalable Systems from <span className="purple">Concept to Production</span>
      </h3>

      <div className="about-bio-paragraphs">
        <p className="about-bio-text">
          Hi! I am <strong className="text-white">Swati Jain</strong>, a Full Stack Developer based in{" "}
          <span className="purple">Shivpuri, Madhya Pradesh, India</span>. With a strong theoretical computer science foundation and 1+ years of production experience across high-velocity engineering teams, I turn complex technical specifications into performant, elegant software.
        </p>

        <p className="about-bio-text">
          At <strong className="text-white">AST Consulting</strong>, I architected a proprietary In-House News & Personalization SDK that cut external vendor licensing costs and reduced maintenance overhead by <strong>40%</strong>, developed production-grade Next.js web applications, and engineered cross-platform mobile apps. Previously at <strong className="text-white">Agritek India</strong>, I built consumer-facing mobile apps using React Native, integrating Razorpay payment gateways and automated CI/CD releases to AWS and Google Play Console.
        </p>
      </div>

      <div className="about-principles-block mt-4">
        <h5 className="principles-heading">Core Engineering Principles</h5>
        <div className="principles-list">
          {principles.map((p, idx) => (
            <div className="principle-item" key={idx}>
              <div className="principle-icon-box purple">{p.icon}</div>
              <div className="principle-content">
                <span className="principle-name">{p.title}: </span>
                <span className="principle-desc">{p.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
