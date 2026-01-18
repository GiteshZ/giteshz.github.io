import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ServiceCard from './components/ServiceCard';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  const services = [
    {
      title: "Single Dwelling Units",
      description: "Custom-designed single-family homes tailored to your lifestyle. We handle everything from foundation to finishing touches with unmatched attention to detail.",
      icon: "🏠",
      image: "https://images.unsplash.com/photo-1600596542815-e32c8cc22ebe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Multi-Dwelling Units",
      description: "Efficient and modern duplexes, triplexes, and townhouses. Maximizing space and value for investors and families alike.",
      icon: "🏘️",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Multi-Storied Residential",
      description: "High-rise apartments and complexes built with structural integrity and modern amenities. Delivering safe and sustainable urban living solutions.",
      icon: "🏢",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="App">
      <Navbar />
      <Hero />

      <section id="services" className="section services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Expertise</h2>
            <p>Comprehensive construction solutions for every residential need.</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>


      <Portfolio />

      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Let's Build Together</h2>
              <p>Ready to start your next project? Contact us today for a consultation.</p>
              <ul className="contact-details">
                <li><strong>Address:</strong> 123 Construction Blvd, Build City</li>
                <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                <li><strong>Email:</strong> info@buildmaster.com</li>
              </ul>
            </div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Your Phone Number" />
              </div>
              <div className="form-group">
                <select>
                  <option>Select Service Type</option>
                  <option>Single Dwelling</option>
                  <option>Multi-Dwelling</option>
                  <option>Multi-Storied</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Project Details" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
