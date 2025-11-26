import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Certifications.css';

const Certifications = () => {
    const [certs, setCerts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCertifications = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3002';
                const res = await axios.get(`${apiUrl}/api/certifications`);

                // Format the data to match the component's expected format
                const formattedCerts = res.data.map(cert => ({
                    title: cert.title,
                    issuer: cert.issuer,
                    date: cert.issue_date ? new Date(cert.issue_date).getFullYear().toString() : 'N/A',
                    link: cert.credential_url || '#',
                    image_url: cert.image_url
                }));

                setCerts(formattedCerts);
            } catch (err) {
                console.error("Error fetching certifications:", err);
                // Fallback to empty array or show error message
                setCerts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchCertifications();
    }, []);

    if (loading) {
        return (
            <section id="certifications" className="section cert-section">
                <div className="container">
                    <h2 className="title">Certifications</h2>
                    <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Loading...</p>
                </div>
            </section>
        );
    }

    if (certs.length === 0) {
        return (
            <section id="certifications" className="section cert-section">
                <div className="container">
                    <h2 className="title">Certifications</h2>
                    <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>No certifications found.</p>
                </div>
            </section>
        );
    }

    return (
        <section id="certifications" className="section cert-section">
            <div className="container">
                <h2 className="title">Certifications</h2>
                <div className="cert-grid">
                    {certs.map((cert, index) => (
                        <div className="cert-card" key={index}>
                            {cert.image_url && (
                                <div className="cert-image">
                                    <img src={cert.image_url} alt={cert.title} />
                                </div>
                            )}
                            <h3>{cert.title}</h3>
                            <p className="issuer">{cert.issuer}</p>
                            <p className="date">{cert.date}</p>
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">View Credential</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
