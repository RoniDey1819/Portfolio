import React from 'react';
import { FaJava, FaNodeJs, FaReact, FaLinux, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiC, SiKubernetes, SiMysql } from 'react-icons/si';
import { skills as skillsData, extraSkills } from '../data/portfolioData';
import './Skills.css';

// Icon mapping — add new icons here when you add new skills to portfolioData.js
const iconMap = {
    FaJava: <FaJava />,
    FaNodeJs: <FaNodeJs />,
    FaReact: <FaReact />,
    FaLinux: <FaLinux />,
    FaGitAlt: <FaGitAlt />,
    FaDocker: <FaDocker />,
    SiJavascript: <SiJavascript />,
    SiExpress: <SiExpress />,
    SiC: <SiC />,
    SiKubernetes: <SiKubernetes />,
    SiMysql: <SiMysql />,
};

const Skills = () => {
    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Proficient In</h2>
                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-icon">
                                {iconMap[skill.iconName] || <span>⚙️</span>}
                            </div>
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
