-- PostgreSQL Database Setup for Portfolio

-- Create the database (run this separately if needed)
-- CREATE DATABASE portfolio_db;

-- Connect to portfolio_db and run the following:

-- Drop table if exists (for clean setup)
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS certifications CASCADE;
DROP TABLE IF EXISTS contact_messages CASCADE;

-- Projects table
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR(500),
    project_url VARCHAR(500),
    status VARCHAR(20) DEFAULT 'completed' CHECK (status IN ('completed', 'current')),
    technologies TEXT[], -- Array of technologies used
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Certifications table
CREATE TABLE certifications (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    issuer VARCHAR(255) NOT NULL,
    issue_date DATE,
    credential_id VARCHAR(255),
    credential_url VARCHAR(500),
    image_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact messages table
CREATE TABLE contact_messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'archived'))
);

-- Insert sample projects
INSERT INTO projects (title, description, image_url, project_url, status, technologies) VALUES
('Portfolio Website', 'A modern, responsive portfolio website built with React and Node.js. Features include dark/light mode, smooth animations, and a dynamic project showcase.', 'https://via.placeholder.com/600x400/00f2ea/ffffff?text=Portfolio', 'https://github.com/yourusername/portfolio', 'completed', ARRAY['React', 'Node.js', 'PostgreSQL', 'Express']),
('E-commerce Platform', 'Full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.', 'https://via.placeholder.com/600x400/ff0050/ffffff?text=E-Commerce', 'https://github.com/yourusername/ecommerce', 'completed', ARRAY['React', 'Redux', 'Node.js', 'MongoDB', 'Stripe']),
('AI Chatbot Assistant', 'Intelligent chatbot powered by OpenAI API with context-aware responses, conversation history, and multi-language support.', 'https://via.placeholder.com/600x400/7d00f2/ffffff?text=AI+Chatbot', 'https://github.com/yourusername/chatbot', 'current', ARRAY['Python', 'OpenAI API', 'Flask', 'React']);

-- Insert sample certifications
INSERT INTO certifications (title, issuer, issue_date, credential_id, credential_url, image_url) VALUES
('AWS Certified Solutions Architect', 'Amazon Web Services', '2024-01-15', 'AWS-SA-2024-001', 'https://aws.amazon.com/certification/', 'https://via.placeholder.com/300x200/ff9900/ffffff?text=AWS'),
('Google Cloud Professional', 'Google Cloud', '2023-11-20', 'GCP-PRO-2023-456', 'https://cloud.google.com/certification', 'https://via.placeholder.com/300x200/4285f4/ffffff?text=GCP'),
('Meta Front-End Developer', 'Meta (Facebook)', '2023-09-10', 'META-FE-2023-789', 'https://www.coursera.org/professional-certificates/meta-front-end-developer', 'https://via.placeholder.com/300x200/1877f2/ffffff?text=Meta');

-- Create indexes for better performance
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_projects_created_at ON projects(created_at DESC);
CREATE INDEX idx_certifications_issue_date ON certifications(issue_date DESC);
CREATE INDEX idx_contact_messages_status ON contact_messages(status);
CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at DESC);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for projects table
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
