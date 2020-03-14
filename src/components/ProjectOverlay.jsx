import React from "react";
import { useProjectsValue } from "../context";

export const ProjectOverlay = ({
  setProject,
  showProjectOverlay,
  setShowProjectOverlay
}) => {
  const { projects } = useProjectsValue();
  return (
    projects &&
    showProjectOverlay && (
      <div className="project-overlay" data-testid="project-overlay">
        <ul className="project-overlay__list">
          {projects.map(project => (
            <li key={project.projectid} data-testid="project-overlay-action">
              <div
                onClick={() => {
                  setProject(project.projectid);
                  setShowProjectOverlay(false);
                }}
                onKeyDown={() => {
                  setProject(project.projectid);
                  setShowProjectOverlay(false);
                }}
                tabIndex={0}
                role="button"
              >
                {project.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};
