import React from "react";
import GitHubCalendar from "react-github-calendar";
import { FaGithub, FaCodeBranch, FaFireAlt, FaExternalLinkAlt } from "react-icons/fa";

function Github() {
  return (
    <div className="github-showcase-wrapper glass-card my-5">
      <div className="github-showcase-header">
        <div className="github-user-info">
          <div className="github-icon-circle">
            <FaGithub />
          </div>
          <div>
            <h3 className="github-showcase-title">
              Days I <strong className="purple">Code & Build</strong>
            </h3>
            <p className="github-showcase-sub">
              Open source activity, algorithmic solutions, and production repositories on{" "}
              <a
                href="https://github.com/ast-swati-jain"
                target="_blank"
                rel="noreferrer"
                className="github-profile-link"
              >
                @ast-swati-jain <FaExternalLinkAlt className="ms-1" size={11} />
              </a>
            </p>
          </div>
        </div>

        <div className="github-badges-row">
          <span className="github-chip">
            <FaFireAlt className="chip-fire me-1" /> Active Contributions
          </span>
          <span className="github-chip">
            <FaCodeBranch className="chip-branch me-1" /> Public Repos
          </span>
        </div>
      </div>

      <div className="github-calendar-inner">
        <GitHubCalendar
          username="ast-swati-jain"
          blockSize={15}
          blockMargin={5}
          color="#a855f7"
          fontSize={15}
        />
      </div>
    </div>
  );
}

export default Github;
