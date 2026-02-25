import React, { useState } from 'react';
import {
    FaLinkedin,
    FaGithub,
    FaTwitter,
    FaInstagram,
    FaEnvelope,
    FaFileDownload,
} from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Build a mailto: link — no backend needed
        const subject = encodeURIComponent(
            `Portfolio Contact from ${formData.name}`
        );
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="title">Get In Touch</h2>
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h3>Let's Connect</h3>
                        <p>
                            I'm currently open to new opportunities and
                            collaborations.
                        </p>

                        <div className="contact-details">
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="contact-email"
                            >
                                <FaEnvelope /> {personalInfo.email}
                            </a>
                        </div>

                        <div className="social-links">
                            <a
                                href={personalInfo.socials.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href={personalInfo.socials.github}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href={personalInfo.socials.twitter}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Twitter / X"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href={personalInfo.socials.instagram}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                        </div>

                        <a
                            href={personalInfo.resumePath}
                            download="Roni_Dey_Resume.pdf"
                            className="btn resume-btn"
                        >
                            <FaFileDownload /> Download My Resume
                        </a>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn contact-btn">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
