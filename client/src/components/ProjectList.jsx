import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProjectList.css';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3002';
                const res = await axios.get(`${apiUrl}/api/projects`);
                setProjects(res.data);
            } catch (err) {
                console.error("Error fetching projects:", err);
                // Fallback data
                setProjects([
                    { id: 1, title: 'Portfolio Website', description: 'My personal portfolio.', image_url: 'https://via.placeholder.com/400', project_url: '#', status: 'completed' },
                    { id: 2, title: 'AI Chatbot', description: 'Building a chatbot.', image_url: 'https://via.placeholder.com/400', project_url: '#', status: 'current' }
                ]);
            }
        };
        fetchProjects();
    }, []);

    const completedProjects = projects.filter(p => p.status === 'completed' || !p.status);
    const currentProjects = projects.filter(p => p.status === 'current');

    const ProjectGrid = ({ items }) => (
        <div className="projects-grid">
            {items.map((project) => (
                <div className="project-card" key={project.id}>
                    <div className="project-image">
                        <img src={project.image_url} alt={project.title} />
                    </div>
                    <div className="project-info">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.project_url} target="_blank" rel="noopener noreferrer" className="btn project-btn">View Project</a>
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
