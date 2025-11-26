import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Papers.css';

const Papers = () => {
    const [papers, setPapers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchPapers = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3002';
                console.log('🔍 Fetching papers from:', `${apiUrl}/api/papers`);

                const res = await axios.get(`${apiUrl}/api/papers`, {
                    timeout: 10000
                });
                console.log('✅ Papers fetched:', res.data);

                // Format the data
                const formattedPapers = res.data.map(paper => ({
                    title: paper.title,
                    abstract: paper.abstract,
                    link: paper.paper_url || '#',
                    date: paper.publication_date ? new Date(paper.publication_date).getFullYear().toString() : 'N/A',
                    authors: paper.authors,
                    journal: paper.journal,
                    doi: paper.doi
                }));

                if (isMounted) {
                    console.log('📝 Setting papers and loading=false');
                    setPapers(formattedPapers);
                    setLoading(false);
                }
            } catch (err) {
                console.error("❌ Error fetching papers:", err);
                if (isMounted) {
                    setPapers([]);
                    setLoading(false);
                }
            }
        };

        fetchPapers();

        return () => {
            isMounted = false;
        };
    }, []);

    console.log('🎯 Render - loading:', loading, 'papers:', papers.length);

    if (loading) {
        return (
            <section id="papers" className="section papers-section">
                <div className="container">
                    <h2 className="title">Papers and Blogs</h2>
                    <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Loading...</p>
                </div>
            </section>
        );
    }

    if (papers.length === 0) {
        return (
            <section id="papers" className="section papers-section">
                <div className="container">
                    <h2 className="title">Papers and Blogs</h2>
                    <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>No papers found.</p>
                </div>
            </section>
        );
    }

    return (
        <section id="papers" className="section papers-section">
            <div className="container">
                <h2 className="title">Papers and Blogs</h2>
                <div className="papers-grid">
                    {papers.map((paper, index) => (
                        <div className="paper-card" key={index}>
                            <div className="paper-header">
                                <h3>{paper.title}</h3>
                                <span className="paper-date">{paper.date}</span>
                            </div>
                            {paper.journal && (
                                <p className="paper-journal">{paper.journal}</p>
                            )}
                            <p className="paper-abstract">{paper.abstract}</p>
                            {paper.authors && paper.authors.length > 0 && (
                                <p className="paper-authors">
                                    <strong>Authors:</strong> {paper.authors.join(', ')}
                                </p>
                            )}
                            <a href={paper.link} target="_blank" rel="noopener noreferrer" className="btn paper-btn">Read Paper</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Papers;
