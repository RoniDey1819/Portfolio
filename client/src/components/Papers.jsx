import React from 'react';
import './Papers.css';

const Papers = () => {
    const papers = [
        {
            title: "Optimizing Neural Networks for Edge Devices",
            abstract: "A study on reducing the computational load of deep learning models for IoT devices without significant accuracy loss.",
            link: "#",
            date: "2024"
        },
        {
            title: "Blockchain in Supply Chain Management",
            abstract: "Analyzing the impact of decentralized ledgers on transparency and efficiency in global logistics.",
            link: "#",
            date: "2023"
        }
    ];

    return (
        <section id="papers" className="section papers-section">
            <div className="container">
                <h2 className="title">Published Papers</h2>
                <div className="papers-grid">
                    {papers.map((paper, index) => (
                        <div className="paper-card" key={index}>
                            <div className="paper-header">
                                <h3>{paper.title}</h3>
                                <span className="paper-date">{paper.date}</span>
                            </div>
                            <p className="paper-abstract">{paper.abstract}</p>
                            <a href={paper.link} className="btn paper-btn">Read Paper</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Papers;
