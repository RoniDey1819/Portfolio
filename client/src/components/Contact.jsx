import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent! (This is a demo)');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="title">Get In Touch</h2>
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h3>Let's Connect</h3>
                        <p>I'm currently open to new opportunities and collaborations.</p>

                        <div className="contact-details">
                            <a href="mailto:ronidey1819@gmail.com" className="contact-email">
                                <FaEnvelope /> ronidey1819@gmail.com
                            </a>
                        </div>

                        <div className="social-links">
                            <a href="https://linkedin.com/in/ronidey1819" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                            <a href="https://github.com/RoniDey1819" target="_blank" rel="noreferrer"><FaGithub /></a>
                            <a href="https://x.com/ronidey1819" target="_blank" rel="noreferrer"><FaTwitter /></a>
                            <a href="https://instagram.com/roniii.dey" target="_blank" rel="noreferrer"><FaInstagram /></a>
                        </div>

                        <a href="/resume.pdf" download className="btn resume-btn">
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
                        <button type="submit" className="btn contact-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
