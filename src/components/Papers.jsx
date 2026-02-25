import React from 'react';
import { papers as papersData } from '../data/portfolioData';
import './Papers.css';

const Papers = () => {
    const papers = papersData.map((paper) => ({
        id: paper.id,
        title: paper.title,
        abstract: paper.abstract,
        link: paper.paperUrl || '#',
        date: paper.publicationDate
            ? new Date(paper.publicationDate).getFullYear().toString()
            : 'N/A',
        authors: paper.authors,
        journal: paper.journal,
        doi: paper.doi,
    }));

    if (papers.length === 0) {
        return (
            <section id="papers" className="section papers-section">
                <div className="container">
                    <h2 className="title">Papers and Blogs</h2>
                    <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                        No papers yet. Check back soon!
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section id="papers" className="section papers-section">
            <div className="container">
                <h2 className="title">Papers and Blogs</h2>
                <div className="papers-grid">
                    {papers.map((paper) => (
                        <div className="paper-card" key={paper.id}>
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
                            <a
                                href={paper.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn paper-btn"
                            >
                                Read Paper
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Papers;
