import React from 'react';
import { FaJava, FaNodeJs, FaReact, FaLinux, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiC, SiKubernetes, SiMysql } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: 'Java', icon: <FaJava /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'Linux', icon: <FaLinux /> },
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'C', icon: <SiC /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'Kubernetes', icon: <SiKubernetes /> },
        { name: 'SQL', icon: <SiMysql /> },
    ];

    const extraSkills = [
        "REST APIs", "System Design", "Agile", "Problem Solving", "Team Leadership"
    ];

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Efficient In</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-icon">{skill.icon}</div>
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>

                <div className="extra-skills">
                    <h3 className="subtitle">Extra Skills</h3>
                    <ul className="extra-skills-list">
                        {extraSkills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
