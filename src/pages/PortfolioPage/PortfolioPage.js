import React, { useState, useEffect, useMemo, useCallback, memo } from 'react';
import { Container, Row, Col, Modal, Carousel, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PortfolioPage.css';

// Memoized components for better performance
const ImageFallback = memo(({ photo, className, style }) => (
  <div 
    className={`image-fallback ${className}`}
    style={{ 
      backgroundColor: photo.color, 
      ...style 
    }}
  >
    <div className="fallback-content">
      <i className="bi bi-image"></i>
      <span className="fallback-title">{photo.title}</span>
    </div>
  </div>
));

const ProjectImage = memo(({ photo, className, style }) => {
  const [imageError, setImageError] = useState(false);
  
  if (imageError || !photo.image) {
    return <ImageFallback photo={photo} className={className} style={style} />;
  }
  
  return (
    <img 
      src={photo.image} 
      alt={photo.title}
      className={`project-image ${className}`}
      style={style}
      loading="lazy"
      onError={() => setImageError(true)}
    />
  );
});

const FilterButton = memo(({ filter, activeFilter, onClick }) => (
  <button
    className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
    onClick={() => onClick(filter.id)}
    aria-pressed={activeFilter === filter.id}
  >
    {filter.label}
  </button>
));

const ProjectCard = memo(({ project, onViewProject }) => {
  const handleClick = useCallback(() => {
    onViewProject(project);
  }, [project, onViewProject]);

  return (
    <Col xs={12} md={6} lg={4} xl={3} className="project-card-col">
      <div className="project-card" onClick={handleClick} role="button" tabIndex={0}>
        <div className="project-card-image">
          <ProjectImage 
            photo={project.photos[0]} 
            style={{ height: '220px' }}
          />
          <div className="project-overlay">
            <div className="overlay-content">
              <span className="category-badge">{project.category}</span>
              <h5 className="project-title">{project.title}</h5>
              <div className="project-meta">
                <span>
                  <i className="bi bi-geo-alt"></i> {project.location}
                </span>
                <span>
                  <i className="bi bi-calendar"></i> {project.year}
                </span>
              </div>
            </div>
            <button className="view-project-btn" aria-label="View project">
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
        
        <div className="project-card-content">
          <div className="project-stats">
            <div className="stat">
              <i className="bi bi-clock"></i>
              <span>{project.duration}</span>
            </div>
            <div className="stat">
              <i className="bi bi-rulers"></i>
              <span>{project.squareFootage}</span>
            </div>
            <div className="stat">
              <i className="bi bi-paint-bucket"></i>
              <span>{project.paintType.split(' ')[0]}</span>
            </div>
          </div>
          <div className="project-tags">
            <span className="project-tag">
              <i className="bi bi-star-fill"></i>
              {project.rating}/5
            </span>
            <span className="project-tag">
              <i className="bi bi-images"></i>
              {project.photos.length} photos
            </span>
          </div>
        </div>
      </div>
    </Col>
  );
});

const ProjectModal = memo(({ project, show, onHide }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleSelect = useCallback((selectedIndex) => {
    setActiveIndex(selectedIndex);
  }, []);

  const handleThumbnailClick = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  if (!project) return null;

  return (
    <Modal 
      show={show} 
      onHide={onHide}
      size="xl"
      centered
      className="project-modal"
      backdropClassName="modal-backdrop-custom"
      aria-labelledby="project-modal-title"
    >
      <Modal.Header closeButton className="modal-header-custom">
        <Modal.Title id="project-modal-title" className="modal-title-custom">
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center mb-2">
              <span className="modal-category">{project.category}</span>
              <span className="modal-rating ms-2">
                <i className="bi bi-star-fill"></i>
                {project.rating}/5
              </span>
            </div>
            <div className="modal-project-info">
              <h3 className="modal-project-title">{project.title}</h3>
              <div className="modal-project-subtitle">
                <span><i className="bi bi-geo-alt"></i> {project.location}</span>
                <span><i className="bi bi-calendar"></i> {project.year}</span>
                <span><i className="bi bi-images"></i> {project.photos.length} photos</span>
              </div>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="modal-body-custom">
        {/* Main Carousel - Full Width */}
        <div className="main-carousel-section">
          <Carousel 
            activeIndex={activeIndex} 
            onSelect={handleSelect}
            fade 
            indicators={true}
            className="project-carousel"
          >
            {project.photos.map((photo, index) => (
              <Carousel.Item key={`${photo.id}-${index}`}>
                <div className="carousel-image-container">
                  <ProjectImage 
                    photo={photo}
                    className="main-carousel-image"
                    style={{ height: '500px' }}
                  />
                  <div className="carousel-caption">
                    <h5>{photo.title}</h5>
                    <span className="photo-counter">
                      {index + 1} / {project.photos.length}
                    </span>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Thumbnail Gallery - Full Width */}
        <ThumbnailGallery 
          photos={project.photos}
          activeIndex={activeIndex}
          onThumbnailClick={handleThumbnailClick}
        />
      </Modal.Body>

      <Modal.Footer className="modal-footer-custom">
        <button className="btn btn-outline-secondary" onClick={onHide}>
          Close Gallery
        </button>
        <button className="btn btn-primary">
          <i className="bi bi-whatsapp me-2"></i>
          Get Free Quote
        </button>
      </Modal.Footer>
    </Modal>
  );
});

const ThumbnailGallery = memo(({ photos, activeIndex, onThumbnailClick }) => (
  <div className="thumbnail-gallery-section">
    <div className="gallery-header">
      <h4 className="gallery-title">Browse All Photos</h4>
      <span className="gallery-count">{photos.length} photos</span>
    </div>
    
    <div className="thumbnails-container">
      {photos.map((photo, index) => (
        <div 
          key={`thumb-${photo.id}-${index}`}
          className={`thumbnail-item ${index === activeIndex ? 'active' : ''}`}
          onClick={() => onThumbnailClick(index)}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && onThumbnailClick(index)}
          aria-label={`View photo ${index + 1}: ${photo.title}`}
        >
          <ProjectImage 
            photo={photo}
            className="thumbnail-image"
            style={{ height: '120px' }}
          />
          <div className="thumbnail-label">
            <span className="thumbnail-index">{index + 1}</span>
            <span className="thumbnail-title">{photo.title}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
));

const LoadingSpinner = memo(() => (
  <Container className="portfolio-loading d-flex justify-content-center align-items-center">
    <Spinner animation="border" variant="primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </Container>
));

// Main Component
const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const imagePaths = useMemo(() => ({
    residential1: [
      require('../../assets/images/portfolio/residential1/interior1.jpeg'),
      require('../../assets/images/portfolio/residential1/interior2.jpeg'),
      require('../../assets/images/portfolio/residential1/interior3.jpeg'),
      require('../../assets/images/portfolio/residential1/interior4.jpeg'),
      require('../../assets/images/portfolio/residential1/interior5.jpeg'),
    ],
        residential2: [
      require('../../assets/images/portfolio/residential2/interior1.jpeg'),
      require('../../assets/images/portfolio/residential2/interior2.jpeg'),
      require('../../assets/images/portfolio/residential2/interior3.jpeg'),
      require('../../assets/images/portfolio/residential2/interior4.jpeg'),
      require('../../assets/images/portfolio/residential2/interior5.jpeg'),
    ],
    commercail: [
      require('../../assets/images/portfolio/commercial1/exterior1.jpeg'),
      require('../../assets/images/portfolio/commercial1/exterior2.jpeg'),
      require('../../assets/images/portfolio/commercial1/exterior3.jpeg'),
      require('../../assets/images/portfolio/commercial1/exterior4.jpeg'),
      require('../../assets/images/portfolio/commercial1/exterior5.jpeg'),
    ],
    texture1: [
      require('../../assets/images/portfolio/texture1/texture1.jpg'),
      require('../../assets/images/portfolio/texture1/texture2.jpg'),
      require('../../assets/images/portfolio/texture1/texture3.jpg'),
      require('../../assets/images/portfolio/texture1/texture4.jpg'),
      require('../../assets/images/portfolio/texture1/texture5.jpg'),
    ],
  }), []);

  const projects = useMemo(() => [
    { 
      id: 1, 
      title: 'Modern Apartment Renovation',
      category: 'interior',
      duration: '2 weeks',
      location: 'Downtown Apartment',
      squareFootage: '1,200 sq ft',
      paintType: 'Eco-friendly premium paint',
      rating: 5,
      year: '2023',
      photos: [
        { id: 1, image: imagePaths.residential1[0], color: '#FF6B6B', title: 'Living Room' },
        { id: 2, image: imagePaths.residential1[1], color: '#4ECDC4', title: 'Bedroom' },
        { id: 3, image: imagePaths.residential1[2], color: '#45B7D1', title: 'Kitchen' },
        { id: 4, image: imagePaths.residential1[3], color: '#96CEB4', title: 'Bathroom' },
        { id: 5, image: imagePaths.residential1[4], color: '#FFEAA7', title: 'Final View' }
      ]
    },
       { 
      id: 2, 
      title: 'Modern Apartment Renovation',
      category: 'interior',
      duration: '2 weeks',
      location: 'Downtown Apartment',
      squareFootage: '1,200 sq ft',
      paintType: 'Eco-friendly premium paint',
      rating: 5,
      year: '2023',
      photos: [
        { id: 1, image: imagePaths.residential2[0], color: '#FF6B6B', title: 'Living Room' },
        { id: 2, image: imagePaths.residential2[1], color: '#4ECDC4', title: 'Bedroom' },
        { id: 3, image: imagePaths.residential2[2], color: '#45B7D1', title: 'Kitchen' },
        { id: 4, image: imagePaths.residential2[3], color: '#96CEB4', title: 'Bathroom' },
        { id: 5, image: imagePaths.residential2[4], color: '#FFEAA7', title: 'Final View' }
      ]
    },
    { 
      id: 3, 
      title: 'Corporate Headquarters Facade',
      category: 'exterior',
      duration: '4 weeks',
      location: 'Tech Park Corporate Campus',
      squareFootage: '15,000 sq ft',
      paintType: 'Weatherproof industrial coating',
      rating: 5,
      year: '2023',
      photos: [
        { id: 1, image: imagePaths.commercail[0], color: '#A29BFE', title: 'Front Entrance' },
        { id: 2, image: imagePaths.commercail[1], color: '#FD79A8', title: 'Building Facade' },
        { id: 3, image: imagePaths.commercail[2], color: '#55EFC4', title: 'Side View' },
        { id: 4, image: imagePaths.commercail[3], color: '#74B9FF', title: 'Detail Work' },
        { id: 5, image: imagePaths.commercail[4], color: '#FFEAA7', title: 'Completed' }
      ]
    },
    { 
      id: 4, 
      title: 'Luxury Hotel Lobby Texturing',
      category: 'specialty',
      duration: '3 weeks',
      location: 'Grand Plaza Hotel',
      squareFootage: '3,500 sq ft',
      paintType: 'Custom textured coating',
      rating: 5,
      year: '2024',
      photos: [
        { id: 1, image: imagePaths.texture1[0], color: '#D63031', title: 'Texturing' },
        { id: 2, image: imagePaths.texture1[1], color: '#00B894', title: 'Color Application' },
        { id: 3, image: imagePaths.texture1[2], color: '#0984E3', title: 'Detail' },
        { id: 4, image: imagePaths.texture1[3], color: '#6C5CE7', title: 'Finishing' },
        { id: 5, image: imagePaths.texture1[4], color: '#FDCB6E', title: 'Final Result' }
      ]
    },
    { 
      id: 5, 
      title: 'Contemporary Office Interior',
      category: 'interior',
      duration: '3 weeks',
      location: 'Creative Agency Office',
      squareFootage: '2,800 sq ft',
      paintType: 'Low-VOC premium paint',
      rating: 4.5,
      year: '2023',
      photos: [
        { id: 1, image: null, color: '#FF9F43', title: 'Workspace' },
        { id: 2, image: null, color: '#5F27CD', title: 'Conference' },
        { id: 3, image: null, color: '#54A0FF', title: 'Reception' },
        { id: 4, image: null, color: '#00D2D3', title: 'Break Room' },
        { id: 5, image: null, color: '#F368E0', title: 'Office' }
      ]
    },
    { 
      id: 6, 
      title: 'Historic Building Restoration',
      category: 'exterior',
      duration: '6 weeks',
      location: 'Heritage District',
      squareFootage: '8,500 sq ft',
      paintType: 'Historical restoration coating',
      rating: 4.8,
      year: '2023',
      photos: [
        { id: 1, image: null, color: '#FF6B6B', title: 'Before' },
        { id: 2, image: null, color: '#4ECDC4', title: 'Process' },
        { id: 3, image: null, color: '#45B7D1', title: 'Color Match' },
        { id: 4, image: null, color: '#96CEB4', title: 'Details' },
        { id: 5, image: null, color: '#FFEAA7', title: 'After' }
      ]
    },
    { 
      id: 7, 
      title: 'Retail Store Modernization',
      category: 'interior',
      duration: '2 weeks',
      location: 'Shopping Mall Unit',
      squareFootage: '3,200 sq ft',
      paintType: 'Commercial1-grade coating',
      rating: 4.7,
      year: '2024',
      photos: [
        { id: 1, image: null, color: '#A29BFE', title: 'Store Front' },
        { id: 2, image: null, color: '#FD79A8', title: 'Interior' },
        { id: 3, image: null, color: '#55EFC4', title: 'Brand Colors' },
        { id: 4, image: null, color: '#74B9FF', title: 'Setup' },
        { id: 5, image: null, color: '#FFEAA7', title: 'Final' }
      ]
    }
  ], [imagePaths]);

  const filters = useMemo(() => [
    { id: 'all', label: 'All Projects' },
    { id: 'interior', label: 'Interior' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'specialty', label: 'Specialty' }
  ], []);

  const filteredProjects = useMemo(() => 
    activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeFilter),
    [activeFilter, projects]
  );

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleViewProject = useCallback((project) => {
    setSelectedProject(project);
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
    setTimeout(() => setSelectedProject(null), 300);
  }, []);

  const handleFilterChange = useCallback((filterId) => {
    setActiveFilter(filterId);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Container fluid className="portfolio-page">
        {/* Hero Section */}
        <div className="portfolio-hero">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} className="text-center">
                <h1 className="hero-title">Our Portfolio</h1>
                <p className="hero-subtitle">
                  Browse our gallery of completed painting projects showcasing quality craftsmanship
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Filters */}
        <Container className="portfolio-filters">
          <div className="filter-container">
            {filters.map(filter => (
              <FilterButton
                key={filter.id}
                filter={filter}
                activeFilter={activeFilter}
                onClick={handleFilterChange}
              />
            ))}
          </div>
        </Container>

        {/* Projects Grid */}
        <Container className="projects-grid">
          <Row className="g-4">
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewProject={handleViewProject}
              />
            ))}
          </Row>
        </Container>

        {/* CTA Section */}
        <Container className="portfolio-cta">
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <div className="cta-card">
                <h2 className="cta-title">Start Your Project Today</h2>
                <p className="cta-text">
                  Get a free consultation and quote for your next painting project
                </p>
                <div className="cta-buttons">
                  <button className="btn btn-primary btn-lg me-3">
                    <i className="bi bi-calendar-check me-2"></i>
                    Book Consultation
                  </button>
                  <button className="btn btn-outline-primary btn-lg">
                    <i className="bi bi-telephone me-2"></i>
                    Call Now
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        show={showModal}
        onHide={handleCloseModal}
      />
    </>
  );
};

export default memo(PortfolioPage);