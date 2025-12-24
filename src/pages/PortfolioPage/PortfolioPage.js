import React, { useState } from 'react';
import { Container, Row, Col, Modal, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PortfolioPage.css';

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const imagePaths = {
    project1: [
      require('../../assets/images/portfolio/residential/interior1.jpeg'),
      require('../../assets/images/portfolio/residential/interior2.jpg'),
      require('../../assets/images/portfolio/residential/interior3.jpg'),
      require('../../assets/images/portfolio/residential/interior4.jpg'),
      require('../../assets/images/portfolio/residential/interior5.jpg'),
    ],
    project2: [
      require('../../assets/images/portfolio/commercial/exterior1.jpg'),
      require('../../assets/images/portfolio/commercial/exterior2.jpg'),
      require('../../assets/images/portfolio/commercial/exterior3.jpg'),
      require('../../assets/images/portfolio/commercial/exterior4.jpg'),
      require('../../assets/images/portfolio/commercial/exterior5.jpg'),
    ],
    project3: [
      require('../../assets/images/portfolio/texture/texture1.jpg'),
      require('../../assets/images/portfolio/texture/texture2.jpg'),
      require('../../assets/images/portfolio/texture/texture3.jpg'),
      require('../../assets/images/portfolio/texture/texture4.jpg'),
      require('../../assets/images/portfolio/texture/texture5.jpg'),
    ],
  };

  const fallbackColors = [
    ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'],
    ['#A29BFE', '#FD79A8', '#55EFC4', '#74B9FF', '#FFEAA7'],
    ['#D63031', '#00B894', '#0984E3', '#6C5CE7', '#FDCB6E']
  ];

  const projects = [
    { 
      id: 1, 
      category: 'Interior',
      duration: '2 weeks',
      location: 'Downtown Apartment',
      squareFootage: '1,200 sq ft',
      paintType: 'Eco-friendly premium paint',
      photos: [
        {
          id: 1,
          image: imagePaths.project1[0] || null,
          color: '#FF6B6B'
        },
        {
          id: 2,
          image: imagePaths.project1[1] || null,
          color: '#4ECDC4'
        },
        {
          id: 3,
          image: imagePaths.project1[2] || null,
          color: '#45B7D1'
        },
        {
          id: 4,
          image: imagePaths.project1[3] || null,
          color: '#96CEB4'
        },
        {
          id: 5,
          image: imagePaths.project1[4] || null,
          color: '#FFEAA7'
        }
      ],
      testimonial: "The team transformed our apartment with precision and care. The color choices were perfect!"
    },
    { 
      id: 2, 
      category: 'Exterior',
      duration: '4 weeks',
      location: 'Corporate Headquarters',
      squareFootage: '15,000 sq ft',
      paintType: 'Weatherproof industrial coating',
      photos: [
        {
          id: 1,
          image: imagePaths.project2[0] || null,
          color: '#A29BFE'
        },
        {
          id: 2,
          image: imagePaths.project2[1] || null,
          color: '#FD79A8'
        },
        {
          id: 3,
          image: imagePaths.project2[2] || null,
          color: '#55EFC4'
        },
        {
          id: 4,
          image: imagePaths.project2[3] || null,
          color: '#74B9FF'
        },
        {
          id: 5,
          image: imagePaths.project2[4] || null,
          color: '#FFEAA7'
        }
      ],
      testimonial: "Professional from start to finish. Our building looks brand new!"
    },
    { 
      id: 3, 
      category: 'Specialty',
      duration: '3 weeks',
      location: 'Luxury Hotel Lobby',
      squareFootage: '3,500 sq ft',
      paintType: 'Custom textured coating',
      photos: [
        {
          id: 1,
          image: imagePaths.project3[0] || null,
          color: '#D63031'
        },
        {
          id: 2,
          image: imagePaths.project3[1] || null,
          color: '#00B894'
        },
        {
          id: 3,
          image: imagePaths.project3[2] || null,
          color: '#0984E3'
        },
        {
          id: 4,
          image: imagePaths.project3[3] || null,
          color: '#6C5CE7'
        },
        {
          id: 5,
          image: imagePaths.project3[4] || null,
          color: '#FDCB6E'
        }
      ],
      testimonial: "The textured finish added incredible depth to our hotel lobby. Exceptional craftsmanship!"
    }
  ];

  const handleViewProject = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const renderImage = (photo, className = '', style = {}) => {
    if (photo.image) {
      return (
        <img 
          src={photo.image} 
          alt="Project photo"
          className={className}
          style={style}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
      );
    }
    return null;
  };

  const renderImageOrColor = (photo, className = '', style = {}) => {
    return (
      <>
        {photo.image && (
          <img 
            src={photo.image} 
            alt="Project photo"
            className={className}
            style={style}
            onError={(e) => {
              e.target.style.display = 'none';
              const fallback = e.target.parentElement.querySelector('.image-fallback');
              if (fallback) fallback.style.display = 'block';
            }}
          />
        )}
        <div 
          className="image-fallback"
          style={{
            ...style,
            backgroundColor: photo.color,
            display: photo.image ? 'none' : 'block'
          }}
        >
          <div className="fallback-content">
            <span className="fallback-text">Project Image</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
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
                  <div className="image-carousel">
                    <Carousel fade indicators={false} controls={false} interval={3000}>
                      {project.photos.slice(0, 3).map(photo => (
                        <Carousel.Item key={photo.id}>
                          <div className="portfolio-image-slide">
                            {renderImageOrColor(
                              photo,
                              'carousel-image',
                              {
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover',
                                borderRadius: '8px'
                              }
                            )}
                            <div className="slide-content">
                              <span className="photo-count">
                                {project.photos.length} photos
                              </span>
                            </div>
                          </div>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </div>
                </div>
                <div className="portfolio-content p-3">
                  <div className="project-meta mb-3">
                    <span className="badge bg-light text-dark me-2">
                      <i className="bi bi-clock me-1"></i> {project.duration}
                    </span>
                    <span className="badge bg-light text-dark">
                      <i className="bi bi-rulers me-1"></i> {project.squareFootage}
                    </span>
                  </div>
                  <button 
                    className="btn btn-sm btn-outline-primary w-100"
                    onClick={() => handleViewProject(project)}
                  >
                    <i className="bi bi-images me-2"></i>
                    View Project Photos
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <button className="btn btn-primary btn-lg px-4">
              <i className="bi bi-chat-dots me-2"></i>
              Request a Free Quote
            </button>
          </Col>
        </Row>
      </Container>

      <Modal 
        show={showModal} 
        onHide={handleCloseModal}
        size="xl"
        centered
        className="project-modal"
      >
        {selectedProject && (
          <>
            <Modal.Header closeButton className="border-0 pb-0">
              <Modal.Title className="w-100">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h4 className="mb-1">Project Details</h4>
                  </div>
                  <span className="badge bg-primary fs-6">{selectedProject.category}</span>
                </div>
              </Modal.Title>
            </Modal.Header>
            
            <Modal.Body className="pt-3">
              <div className="main-carousel-wrapper mb-4">
                <Carousel fade indicators={true} interval={null}>
                  {selectedProject.photos.map(photo => (
                    <Carousel.Item key={photo.id}>
                      <div className="main-carousel-image">
                        {renderImageOrColor(
                          photo,
                          'main-image',
                          {
                            width: '100%',
                            height: '400px',
                            objectFit: 'cover',
                            borderRadius: '8px'
                          }
                        )}
                        <div className="photo-counter">
                          Photo {photo.id} of {selectedProject.photos.length}
                        </div>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>

              <Row>
                <Col lg={8}>
                  <div className="project-details mb-4">
                    <h5 className="mb-3">Project Details</h5>
                    <Row>
                      <Col md={6}>
                        <div className="detail-item mb-3">
                          <div className="detail-label">
                            <i className="bi bi-clock text-primary me-2"></i>
                            Duration
                          </div>
                          <div className="detail-value">{selectedProject.duration}</div>
                        </div>
                        <div className="detail-item mb-3">
                          <div className="detail-label">
                            <i className="bi bi-geo-alt text-primary me-2"></i>
                            Location
                          </div>
                          <div className="detail-value">{selectedProject.location}</div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="detail-item mb-3">
                          <div className="detail-label">
                            <i className="bi bi-rulers text-primary me-2"></i>
                            Square Footage
                          </div>
                          <div className="detail-value">{selectedProject.squareFootage}</div>
                        </div>
                        <div className="detail-item mb-3">
                          <div className="detail-label">
                            <i className="bi bi-paint-bucket text-primary me-2"></i>
                            Paint Type
                          </div>
                          <div className="detail-value">{selectedProject.paintType}</div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>

                <Col lg={4}>
                  <div className="testimonial-card p-4 mb-4">
                    <h5 className="mb-3">
                      <i className="bi bi-chat-quote text-primary me-2"></i>
                      Client Feedback
                    </h5>
                    <p className="testimonial-text">"{selectedProject.testimonial}"</p>
                    <div className="testimonial-rating">
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <span className="ms-2">5.0</span>
                    </div>
                  </div>

                  <div className="action-card p-4">
                    <h5 className="mb-3">Interested in Similar Work?</h5>
                    <p className="text-muted small mb-3">
                      Contact us for a free consultation and quote
                    </p>
                    <button className="btn btn-primary w-100 mb-2">
                      <i className="bi bi-calendar-check me-2"></i>
                      Schedule Consultation
                    </button>
                    <button className="btn btn-outline-primary w-100">
                      <i className="bi bi-chat-dots me-2"></i>
                      Request Quote
                    </button>
                  </div>
                </Col>
              </Row>

              <div className="thumbnail-gallery mt-4">
                <h6 className="mb-3">Project Gallery ({selectedProject.photos.length} photos)</h6>
                <div className="thumbnails-scroll">
                  <Row className="g-2 flex-nowrap" style={{ overflowX: 'auto' }}>
                    {selectedProject.photos.map(photo => (
                      <Col xs={4} md={3} lg={2} key={photo.id} className="flex-shrink-0">
                        <div className="thumbnail-item">
                          {renderImageOrColor(
                            photo,
                            'thumbnail-image',
                            {
                              width: '100%',
                              height: '100px',
                              objectFit: 'cover',
                              borderRadius: '6px',
                              cursor: 'pointer'
                            }
                          )}
                          <div className="thumbnail-overlay">
                            <span className="thumbnail-title">Photo {photo.id}</span>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
    </>
  );
};

export default PortfolioPage;