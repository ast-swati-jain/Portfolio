import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view glass-card">
      <div className="project-img-wrapper">
        <Card.Img variant="top" src={props.imgPath} alt={props.title} className="project-card-img" />
        {props.category && (
          <span className="project-category-tag">{props.category}</span>
        )}
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="project-card-title">{props.title}</Card.Title>

        {props.tags && (
          <div className="project-tags-row mb-3">
            {props.tags.map((tag, i) => (
              <span key={i} className="project-tag-pill">
                {tag}
              </span>
            ))}
          </div>
        )}

        <Card.Text className="project-card-description flex-grow-1">
          {props.description}
        </Card.Text>

        <div className="project-actions-row pt-3">
          {props.ghLink && (
            <Button
              className="project-btn-github"
              href={props.ghLink}
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub /> &nbsp;GitHub
            </Button>
          )}

          {props.demoLink && (
            <Button
              className="project-btn-demo"
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
            >
              <CgWebsite /> &nbsp;Live Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
