import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'Lakeside Villa',
            category: 'residential',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            description: 'A luxurious single-family home with waterfront views.'
        },
        {
            id: 2,
            title: 'Urban Heights',
            category: 'commercial',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            description: 'Modern office complex in the heart of the city.'
        },
        {
            id: 3,
            title: 'Green Valley Duplex',
            category: 'multi-dwelling',
            image: 'https://images.unsplash.com/photo-1565514020176-db79237b6d17?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            description: 'Sustainable living for two families.'
        },
        {
            id: 4,
            title: 'Sunset Apartments',
            category: 'multi-dwelling',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            description: 'High-rise residential complex with amenities.'
        },
        {
            id: 5,
            title: 'Corporate Center',
            category: 'commercial',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            description: 'Award-winning architectural design for business.'
        },
        {
            id: 6,
            title: 'Hillside Retreat',
            category: 'residential',
            image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            description: 'Secluded luxury amidst nature.'
        }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="portfolio" className="section portfolio-section">
            <div className="container">
                <div className="section-header">
                    <h2>Our Latest Projects</h2>
                    <p>Explore our recent work across residential and commercial sectors.</p>
                </div>

                <div className="portfolio-filters">
                    <button
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        All
                    </button>
                    <button
                        className={`filter-btn ${filter === 'residential' ? 'active' : ''}`}
                        onClick={() => setFilter('residential')}
                    >
                        Residential
                    </button>
                    <button
                        className={`filter-btn ${filter === 'multi-dwelling' ? 'active' : ''}`}
                        onClick={() => setFilter('multi-dwelling')}
                    >
                        Multi-Dwelling
                    </button>
                    <button
                        className={`filter-btn ${filter === 'commercial' ? 'active' : ''}`}
                        onClick={() => setFilter('commercial')}
                    >
                        Commercial
                    </button>
                </div>

                <div className="portfolio-grid">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="portfolio-item">
                            <div className="portfolio-image">
                                <img src={project.image} alt={project.title} />
                                <div className="portfolio-overlay">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
