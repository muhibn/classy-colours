import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import {
  Brush, House, PaintBucket, Palette, ClipboardCheck,
  Droplet, CheckCircle, ClockHistory, ShieldCheck, Award,
  Grid, ChevronDown, X,
  Whatsapp
} from 'react-bootstrap-icons';
import './OurServices.css';

const OurServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [viewAllMode, setViewAllMode] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: 'domestic-commercial',
      title: "Domestic & Commercial Painting",
      icon: <Brush size={40} />,
      description: "Professional painting services for homes and businesses",
      features: ["Residential homes", "Office buildings", "Retail spaces"],
      category: 'painting',
      details: {
        overview: "Our expert painters deliver flawless finishes for both residential and commercial properties, using premium quality paints and techniques.",
        process: ["Initial consultation and color selection", "Surface preparation and repairs", "Priming and painting", "Final inspection and cleanup"],
        materials: ["Eco-friendly low-VOC paints", "Professional-grade tools", "Protective coverings for furniture"],
        faq: [
          { question: "How long does a typical painting project take?", answer: "Most residential projects take 2-5 days depending on size and complexity." },
          { question: "Do I need to move my furniture?", answer: "We'll move and cover furniture as part of our service, though clearing small items helps us work faster." }
        ]
      }
    },
    {
      id: 'interior-exterior',
      title: "Interior & Exterior Painting",
      icon: <House size={40} />,
      description: "Complete painting solutions for inside and outside your property",
      features: ["Wall preparation", "Premium paints", "Weatherproof coatings"],
      category: 'painting',
      details: {
        overview: "Comprehensive protection and beautification for your property's interior and exterior surfaces, designed to withstand the elements.",
        process: ["Damage assessment and repairs", "Power washing (exterior)", "Caulking and sealing", "Multiple coat application"],
        materials: ["Mold-resistant paints for wet areas", "UV-resistant exterior coatings", "Specialty finishes as requested"],
        faq: [
          { question: "What's the best season for exterior painting?", answer: "Spring and fall are ideal, but we can paint year-round with proper preparation." },
          { question: "How often should exterior paint be refreshed?", answer: "Typically every 5-7 years, depending on material and climate conditions." }
        ]
      }
    },
    {
      id: 'texture-coating',
      title: "Texture Coating",
      icon: <PaintBucket size={40} />,
      description: "Specialized texture applications for unique finishes",
      features: ["Custom patterns", "Modern textures", "Durable finishes"],
      category: 'specialty',
      details: {
        overview: "Add depth and character to your walls with our custom texture coating services, perfect for creating feature walls or entire room transformations.",
        process: ["Surface preparation", "Base coat application", "Texture application using specialized tools", "Protective top coat"],
        materials: ["Venetian plaster", "Skip trowel textures", "Knockdown textures", "Orange peel finishes"],
        faq: [
          { question: "Can texture coatings be applied over existing paint?", answer: "Yes, with proper surface preparation we can apply over most existing surfaces." },
          { question: "Are textured walls harder to clean?", answer: "It depends on the texture type - we can recommend low-maintenance options." }
        ]
      }
    },
    {
      id: 'decorative-finishing',
      title: "Decorative Finishing",
      icon: <Palette size={40} />,
      description: "Custom decorative finishes to enhance your space",
      features: ["Faux finishes", "Metallic effects", "Wall glazing"],
      category: 'specialty',
      details: {
        overview: "Elevate your space with artistic finishes that create unique visual effects and luxurious atmospheres.",
        process: ["Design consultation", "Sample creation", "Surface preparation", "Specialty finish application"],
        materials: ["Metallic pigments", "Glazing liquids", "Specialty brushes and tools", "Waxes and sealers"],
        faq: [
          { question: "How durable are decorative finishes?", answer: "With proper application and sealing, they can last as long as conventional paint." },
          { question: "Can decorative finishes be removed?", answer: "They can be painted over, though some textures may require smoothing first." }
        ]
      }
    },
    {
      id: 'epoxy-coating',
      title: "Epoxy & Industrial Coating",
      icon: <Droplet size={40} />,
      description: "Durable coatings for industrial and commercial floors",
      features: ["High-traffic areas", "Chemical resistant", "5+ year warranty"],
      category: 'industrial',
      details: {
        overview: "High-performance floor coatings that combine durability with aesthetic appeal, perfect for garages, warehouses, and commercial spaces.",
        process: ["Concrete preparation and repair", "Acid etching or grinding", "Primer application", "Epoxy coat application", "Top coat and sealant"],
        materials: ["100% solids epoxy", "Polyurethane top coats", "Flake and quartz additives", "Anti-slip additives"],
        faq: [
          { question: "How long before I can walk on epoxy floors?", answer: "Typically 12-24 hours for foot traffic, 72 hours for heavy items." },
          { question: "Can epoxy be applied over existing flooring?", answer: "In most cases yes, depending on the current floor condition and type." }
        ]
      }
    },
    {
      id: 'color-consultation',
      title: "Color Consultation",
      icon: <ClipboardCheck size={40} />,
      description: "Expert color advice at no additional cost",
      features: ["Color matching", "Trend analysis", "Sample testing"],
      category: 'consulting',
      details: {
        overview: "Our color experts help you choose the perfect palette for your space, considering lighting, architecture, and your personal style.",
        process: ["On-site evaluation", "Color psychology assessment", "Sample presentation", "Final recommendations"],
        materials: ["Color swatches", "Digital visualization tools", "Material samples", "Lighting simulators"],
        faq: [
          { question: "Is there a charge for color consultation?", answer: "No, it's complimentary with any painting service." },
          { question: "Can you match existing colors?", answer: "Yes, we use professional color matching technology for perfect matches." }
        ]
      }
    }
  ];

  const benefits = [
    { icon: <CheckCircle size={50} />, text: "100% Satisfaction Guarantee" },
    { icon: <ClockHistory size={50} />, text: "On-Time Completion" },
    { icon: <ShieldCheck size={50} />, text: "Licensed & Insured" },
    { icon: <Award size={50} />, text: "5-Star Rated Service" }
  ];

  const serviceCategories = [
    { id: 'all', name: 'All Services' },
    { id: 'painting', name: 'Painting Services' },
    { id: 'specialty', name: 'Specialty Finishes' },
    { id: 'industrial', name: 'Industrial Coatings' },
    { id: 'consulting', name: 'Consultation Services' }
  ];

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <section id="services" className="our-services-section py-5 position-relative overflow-hidden">
      <div className="background-overlay"></div>

      <Container className="position-relative" style={{ zIndex: 1 }}>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <span className="text-primary fw-bold section-subtitle">WHAT WE OFFER</span>
            <h2 className="display-5 fw-bold mt-2 section-title">Premium Painting Services</h2>
            <p className="lead text-muted section-description">
              Transforming spaces with quality craftsmanship and attention to detail
            </p>
          </Col>
        </Row>

        {!viewAllMode ? (
          <>
            <Row xs={1} md={2} lg={3} className="g-4 mb-5">
              {services.slice(0, 6).map((service, index) => (
                <Col key={index}>
                  <Card className="h-100 border-0 shadow-sm hover-lift service-card">
                    <Card.Body className="p-4">
                      <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle mb-4">
                        {service.icon}
                      </div>
                      <Card.Title as="h3" className="h4 fw-bold mb-3 service-title">{service.title}</Card.Title>
                      <Card.Text className="text-muted mb-4 service-description">
                        {service.description}
                      </Card.Text>
                      <ul className="list-unstyled mb-4 service-features">
                        {service.features.map((feature, i) => (
                          <li key={i} className="mb-2">
                            <CheckCircle className="text-primary me-2" size={16} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button 
                        variant="outline-primary" 
                        className="mt-auto service-button"
                        onClick={() => handleLearnMore(service)}
                      >
                        Learn More <ChevronDown size={18} className="ms-1" />
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <Row className="mb-5">
              <Col className="text-center">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => setViewAllMode(true)}
                  className="view-all-button"
                >
                  <Grid size={20} className="me-2" /> View All Services
                </Button>
              </Col>
            </Row>
          </>
        ) : (
          <div className="all-services-view">
            <Row className="mb-4">
              <Col>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {serviceCategories.map(category => (
                    <Button
                      key={category.id}
                      variant={activeTab === category.id ? "primary" : "outline-primary"}
                      onClick={() => setActiveTab(category.id)}
                      className="service-tab-button"
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </Col>
            </Row>

            <Row xs={1} md={2} lg={3} className="g-4 mb-5">
              {filteredServices.map((service, index) => (
                <Col key={index}>
                  <Card className="h-100 border-0 shadow-sm hover-lift service-card">
                    <Card.Body className="p-4">
                      <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle mb-4">
                        {service.icon}
                      </div>
                      <Card.Title as="h3" className="h4 fw-bold mb-3 service-title">{service.title}</Card.Title>
                      <Card.Text className="text-muted mb-4 service-description">
                        {service.description}
                      </Card.Text>
                      <ul className="list-unstyled mb-4 service-features">
                        {service.features.map((feature, i) => (
                          <li key={i} className="mb-2">
                            <CheckCircle className="text-primary me-2" size={16} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="d-flex gap-2">
                        <Button 
                          variant="outline-primary" 
                          className="mt-auto service-button"
                          onClick={() => handleLearnMore(service)}
                        >
                          Details
                        </Button>
                        <Button 
                          variant="primary" 
                          className="mt-auto"
                        >
                          Get Quote
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <Row className="mb-5">
              <Col className="text-center">
                <Button 
                  variant="outline-primary" 
                  size="lg"
                  onClick={() => setViewAllMode(false)}
                >
                  Back to Summary View
                </Button>
              </Col>
            </Row>
          </div>
        )}

        <Row className="g-4 mt-5">
          <Col lg={10} className="mx-auto">
            <Card className="border-0 shadow-sm benefits-card">
              <Card.Body className="p-4 p-lg-5">
                <Row className="g-4 text-center">
                  {benefits.map((benefit, index) => (
                    <Col md={3} key={index} className="benefit-col">
                      <div className="d-flex flex-column align-items-center benefit-item">
                        <div className="icon-box bg-white text-primary rounded-circle mb-3 mt-4 benefit-icon d-flex align-items-center justify-content-center">
                          {benefit.icon}
                        </div>
                        <h4 className="h5 mb-0 benefit-text">{benefit.text}</h4>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col className="text-center cta-section">
            <h3 className="h4 mb-4 cta-title">Ready to transform your space?</h3>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Button size="lg" className="px-4 cta-button-primary">
                Get a Free Quote
              </Button>
              <Button variant="outline-dark" size="lg" className="px-4 cta-button-secondary">
                Call Now: 0403 732 881
              </Button>
              <Button
                variant="success"
                size="lg"
                className="fw-bold py-3"
                href="https://wa.me/61403732881"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Whatsapp className="me-2" size={18} />
                Message on WhatsApp
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Service Details Modal */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        size="lg"
        centered
        className="service-modal"
      >
        <Modal.Header className="border-0 position-relative">
          <Modal.Title className="w-100 text-center">
            <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle mb-3 mx-auto">
              {selectedService?.icon}
            </div>
            <h3 className="h2">{selectedService?.title}</h3>
          </Modal.Title>
          <Button 
            variant="link" 
            onClick={() => setShowModal(false)} 
            className="position-absolute top-0 end-0 p-3"
          >
            <X size={24} />
          </Button>
        </Modal.Header>
        <Modal.Body className="px-4 px-md-5 pb-4">
          {selectedService && (
            <>
              <p className="lead mb-4">{selectedService.details.overview}</p>
              
              <div className="mb-4">
                <h4 className="h5 mb-3">Our Process</h4>
                <ul className="process-steps">
                  {selectedService.details.process.map((step, i) => (
                    <li key={i} className="d-flex mb-2">
                      <span
                        className="step-number bg-primary text-white rounded-circle me-1 d-inline-flex align-items-center justify-content-center"
                        style={{ width: '32px', height: '32px' }}
                      >
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="h5 mb-3">Materials We Use</h4>
                <div className="d-flex flex-wrap gap-2">
                  {selectedService.details.materials.map((material, i) => (
                    <span key={i} className="badge bg-light text-dark border">{material}</span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="h5 mb-3">Frequently Asked Questions</h4>
                <div className="accordion">
                  {selectedService.details.faq.map((item, i) => (
                    <div key={i} className="accordion-item mb-2 border">
                      <button 
                        className="accordion-button collapsed fw-bold" 
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq-${i}`}
                      >
                        {item.question}
                      </button>
                      <div id={`faq-${i}`} className="accordion-collapse collapse">
                        <div className="accordion-body bg-light">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer className="border-0 justify-content-center">
          <Button 
            variant="primary" 
            size="lg" 
            className="px-4"
            onClick={() => {
              setShowModal(false);
              // Here you could link to your contact form or trigger a quote request
            }}
          >
            Get a Free Quote for This Service
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default OurServices;