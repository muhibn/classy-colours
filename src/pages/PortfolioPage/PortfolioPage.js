import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PortfolioPage.css';

const PortfolioPage = () => {
  const projects = [
    { 
      id: 1, 
      title: 'Residential Interior', 
      description: 'Modern color scheme for a family home',
      category: 'Interior'
    },
    { 
      id: 2, 
      title: 'Commercial Exterior', 
      description: 'Office building repaint with premium weatherproof coatings',
      category: 'Exterior' 
    },
    { 
      id: 3, 
      title: 'Texture Coating', 
      description: 'Decorative wall finishes with custom patterns',
      category: 'Specialty' 
    },
    { 
      id: 4, 
      title: 'Epoxy Flooring', 
      description: 'Durable industrial coating for high-traffic areas',
      category: 'Flooring' 
    },
    { 
      id: 5, 
      title: 'Roof Painting', 
      description: 'Weatherproof roof restoration with 10-year guarantee',
      category: 'Exterior' 
    },
    { 
      id: 6, 
      title: 'Heritage Restoration', 
      description: 'Period-accurate color matching for historical property',
      category: 'Restoration' 
    },
    { 
      id: 7, 
      title: 'Feature Wall', 
      description: 'Custom-designed accent wall with metallic finishes',
      category: 'Interior' 
    },
    { 
      id: 8, 
      title: 'Deck Staining', 
      description: 'Premium timber protection with UV-resistant sealant',
      category: 'Exterior' 
    }
  ];

  return (
    <Container fluid className="portfolio-page py-5">
      <Row className="justify-content-center mb-5">
        <Col xs={12} className="text-center">
          <h1 className="display-4 mb-3">Our Portfolio</h1>
          <p className="lead text-muted">
            View our gallery of completed projects showcasing our quality craftsmanship
          </p>
        </Col>
      </Row>

      <Row className="g-4">
        {projects.map(project => (
          <Col key={project.id} xs={12} sm={6} md={4} lg={3}>
            <div className="portfolio-card h-100">
              <div className="portfolio-image-placeholder">
                <div className="image-overlay">
                  <span className="badge bg-primary">{project.category}</span>
                </div>
                <div className="image-placeholder">
                  <div className="placeholder-content">{project.title}</div>
                </div>
              </div>
              <div className="portfolio-content p-3">
                <h3 className="h5">{project.title}</h3>
                <p className="text-muted">{project.description}</p>
                <button className="btn btn-sm btn-outline-primary">
                  View Project Details
                </button>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <Row className="mt-5">
        <Col className="text-center">
          <button className="btn btn-primary btn-lg px-4">
            Request a Free Quote
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default PortfolioPage;