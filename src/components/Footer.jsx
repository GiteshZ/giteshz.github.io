import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>BuildMaster</h3>
                    <p>Excellence in construction services.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Email: contact@buildmaster.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                </div>
                <div className="footer-section">
                    <h4>Social</h4>
                    <div className="social-links">
                        <a href="#">LinkedIn</a>
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} BuildMaster Construction. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
