import React from 'react';
import { projects as projectsData } from '../data/portfolioData';
import './ProjectList.css';

const ProjectList = () => {
    const completedProjects = projectsData.filter(
        (p) => p.status === 'completed' || !p.status
    );
    const currentProjects = projectsData.filter((p) => p.status === 'current');

    const ProjectGrid = ({ items }) => (
        <div className="projects-grid">
            {items.map((project) => (
                <div className="project-card" key={project.id}>
                    <div className="project-image">
                        <img src={project.imageUrl} alt={project.title} />
                    </div>
                    <div className="project-info">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        {project.technologies && project.technologies.length > 0 && (
                            <div className="project-tech-tags">
                                {project.technologies.map((tech, i) => (
                                    <span className="tech-tag" key={i}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                        <a
                            href={project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn project-btn"
                        >
                            View Project
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title main-title">Projects</h2>

                <div className="projects-subsection">
                    <h3 className="subsection-title">Previous Projects</h3>
                    <ProjectGrid items={completedProjects} />
                </div>

                {currentProjects.length > 0 && (
                    <div className="projects-subsection current-project-wrapper">
                        <h3 className="subsection-title">Current Project</h3>
                        <ProjectGrid items={currentProjects} />
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectList;
