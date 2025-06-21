import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {
  Brush, House, PaintBucket, Palette, ClipboardCheck,
  Globe, Rulers, Building, Award, Droplet,
  CheckCircle, ClockHistory, ShieldCheck
} from 'react-bootstrap-icons';
import './OurServices.css';

const OurServices = () => {
  const services = [
    {
      title: "Domestic & Commercial Painting",
      icon: <Brush size={40} />,
      description: "Professional painting services for homes and businesses",
      features: ["Residential homes", "Office buildings", "Retail spaces"]
    },
    {
      title: "Interior & Exterior Painting",
      icon: <House size={40} />,
      description: "Complete painting solutions for inside and outside your property",
      features: ["Wall preparation", "Premium paints", "Weatherproof coatings"]
    },
    {
      title: "Texture Coating",
      icon: <PaintBucket size={40} />,
      description: "Specialized texture applications for unique finishes",
      features: ["Custom patterns", "Modern textures", "Durable finishes"]
    },
    {
      title: "Decorative Finishing",
      icon: <Palette size={40} />,
      description: "Custom decorative finishes to enhance your space",
      features: ["Faux finishes", "Metallic effects", "Wall glazing"]
    },
    {
      title: "Epoxy & Industrial Coating",
      icon: <Droplet size={40} />,
      description: "Durable coatings for industrial and commercial floors",
      features: ["High-traffic areas", "Chemical resistant", "5+ year warranty"]
    },
    {
      title: "Color Consultation",
      icon: <ClipboardCheck size={40} />,
      description: "Expert color advice at no additional cost",
      features: ["Color matching", "Trend analysis", "Sample testing"]
    }
  ];

  const benefits = [
    { icon: <CheckCircle size={50} />, text: "100% Satisfaction Guarantee" },
    { icon: <ClockHistory size={50} />, text: "On-Time Completion" },
    { icon: <ShieldCheck size={50} />, text: "Licensed & Insured" },
    { icon: <Award size={50} />, text: "5-Star Rated Service" }
  ];

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

        <Row xs={1} md={2} lg={3} className="g-4 mb-5">
          {services.map((service, index) => (
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
                  <Button variant="outline-primary" className="mt-auto service-button">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

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
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurServices;