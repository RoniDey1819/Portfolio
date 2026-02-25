import React from 'react';
import { certifications } from '../data/portfolioData';
import './Certifications.css';

const Certifications = () => {
    const certs = certifications.map((cert) => ({
        id: cert.id,
        title: cert.title,
        issuer: cert.issuer,
        date: cert.issueDate
            ? new Date(cert.issueDate).getFullYear().toString()
            : 'N/A',
        link: cert.credentialUrl || '#',
        imageUrl: cert.imageUrl,
    }));

    if (certs.length === 0) {
        return (
            <section id="certifications" className="section cert-section">
                <div className="container">
                    <h2 className="title">Certifications</h2>
                    <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                        No certifications yet. Check back soon!
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section id="certifications" className="section cert-section">
            <div className="container">
                <h2 className="title">Certifications</h2>
                <div className="cert-grid">
                    {certs.map((cert) => (
                        <div className="cert-card" key={cert.id}>
                            {cert.imageUrl && (
                                <div className="cert-image">
                                    <img src={cert.imageUrl} alt={cert.title} />
                                </div>
                            )}
                            <h3>{cert.title}</h3>
                            <p className="issuer">{cert.issuer}</p>
                            <p className="date">{cert.date}</p>
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cert-link"
                            >
                                View Credential
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
