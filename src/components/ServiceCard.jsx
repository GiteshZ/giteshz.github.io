import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, description, icon, image }) => {
    return (
        <div className="service-card" style={{ backgroundImage: `url(${image})` }}>
            <div className="service-content">
                <div className="icon-container">{icon}</div>
                <h3>{title}</h3>
                <p>{description}</p>
                <button className="btn-text">Learn More &rarr;</button>
            </div>
            <div className="service-overlay"></div>
        </div>
    );
};

export default ServiceCard;
