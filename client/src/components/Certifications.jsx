import React from 'react';
import './Certifications.css';

const Certifications = () => {
    const certs = [
        {
            title: "Full Stack Web Development",
            issuer: "Udemy",
            date: "2024",
            link: "#"
        },
        {
            title: "React Native Specialist",
            issuer: "Coursera",
            date: "2023",
            link: "#"
        },
        {
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "2023",
            link: "#"
        }
    ];

    return (
        <section id="certifications" className="section cert-section">
            <div className="container">
                <h2 className="title">Certifications</h2>
                <div className="cert-grid">
                    {certs.map((cert, index) => (
                        <div className="cert-card" key={index}>
                            <h3>{cert.title}</h3>
                            <p className="issuer">{cert.issuer}</p>
                            <p className="date">{cert.date}</p>
                            <a href={cert.link} className="cert-link">View Credential</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
