import React, { useRef, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Alert,
  Form,
  Button
} from 'react-bootstrap';
import {
  Telephone,
  Envelope,
  GeoAlt,
  Clock,
  InfoCircle,
  PersonFill,
  ClipboardCheck,
  ChatLeftText,
  Send,
  Palette,
  Whatsapp
} from 'react-bootstrap-icons';
import emailjs from '@emailjs/browser';
import './ContactPage.css';

const ContactPage = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
      'service_rywobz8',
      'template_hr4iolj',
        form.current,
      '-4CAsNbCXUOQhfA0k'
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage('✅ Your message has been sent successfully!');
          setSending(false);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatusMessage('❌ Failed to send message. Please try again.');
          setSending(false);
        }
      );
  };

  return (
    <Container fluid className="contact-page px-0">

      {/* Hero Section */}
      <section className="contact-hero bg-gradient-primary text-white py-3">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-6 fw-bold mb-2">Connect With Classy Colours</h1>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="g-4">

            {/* Contact Info */}
            <Col lg={5}>
              <Card className="border-0 shadow-sm h-100 contact-info-card">
                <Card.Header className="bg-white border-0 py-4">
                  <h2 className="h4 d-flex align-items-center mb-0">
                    <Palette className="me-3 text-primary" size={24} />
                    Contact Information
                  </h2>
                </Card.Header>
                <Card.Body className="p-4">
                  <ListGroup variant="flush" className="mb-4 contact-info-list">
                    <ListGroup.Item className="d-flex align-items-start border-0 px-0 py-3">
                      <div className="contact-icon bg-primary-light rounded-circle d-flex align-items-center justify-content-center me-3">
                        <Telephone className="text-primary" size={18} />
                      </div>
                      <div>
                        <h6 className="mb-1">Phone</h6>
                        <a href="tel:0403732881" className="text-decoration-none text-dark fw-medium">0403 732 881</a>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-start border-0 px-0 py-3">
                      <div className="contact-icon bg-primary-light rounded-circle d-flex align-items-center justify-content-center me-3">
                        <Envelope className="text-primary" size={18} />
                      </div>
                      <div>
                        <h6 className="mb-1">Email</h6>
                        <a href="mailto:classycolours22@gmail.com" className="text-decoration-none text-dark fw-medium">classycolours22@gmail.com</a>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-start border-0 px-0 py-3">
                      <div className="contact-icon bg-primary-light rounded-circle d-flex align-items-center justify-content-center me-3">
                        <GeoAlt className="text-primary" size={18} />
                      </div>
                      <div>
                        <h6 className="mb-1">Service Area</h6>
                        <p className="mb-0 text-muted">All suburbs in the region</p>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>

                  {/* Business Hours */}
                  <div className="mb-4 business-hours">
                    <h6 className="d-flex align-items-center mb-3 text-muted">
                      <div className="contact-icon bg-primary-light rounded-circle d-flex align-items-center justify-content-center me-3">
                        <Clock className="text-primary" size={18} />
                      </div>
                      Business Hours
                    </h6>
                    <ul className="list-unstyled ps-4 mb-0">
                      <li>Monday - Friday: 8:00 AM - 5:00 PM</li>
                      <li>Saturday: 9:00 AM - 2:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>

                  {/* Alert */}
                  <Alert variant="warning" className="d-flex align-items-start emergency-alert">
                    <InfoCircle className="me-3 mt-1 text-warning" size={20} />
                    <div>
                      <strong>Emergency after-hours service available</strong>
                      <p className="mb-0">Call us directly for urgent inquiries outside business hours.</p>
                    </div>
                  </Alert>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Form */}
            <Col lg={7}>
              <Card className="border-0 shadow-lg h-100 contact-form-card">
                <Card.Header className="bg-white border-0 py-4 px-4">
                  <div className="d-flex align-items-center">
                    <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                      <Envelope className="text-primary" size={24} />
                    </div>
                    <div>
                      <h2 className="h4 mb-1">Send Us a Message</h2>
                      <p className="text-muted mb-0">We're here to help with all your painting needs</p>
                    </div>
                  </div>
                </Card.Header>

                <Card.Body className="p-4">
                  <Form ref={form} onSubmit={sendEmail}>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group controlId="formName">
                          <Form.Label className="fw-medium">Full Name</Form.Label>
                          <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                              <PersonFill className="text-muted" size={18} />
                            </span>
                            <Form.Control
                              type="text"
                              name="user_name"
                              placeholder="Your name"
                              required
                              className="border-start-0 ps-1"
                            />
                          </div>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group controlId="formEmail">
                          <Form.Label className="fw-medium">Email Address</Form.Label>
                          <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                              <Envelope className="text-muted" size={18} />
                            </span>
                            <Form.Control
                              type="email"
                              name="user_email"
                              placeholder="your.email@example.com"
                              required
                              className="border-start-0 ps-1"
                            />
                          </div>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group controlId="formPhone">
                          <Form.Label className="fw-medium">Phone Number</Form.Label>
                          <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                              <Telephone className="text-muted" size={18} />
                            </span>
                            <Form.Control
                              type="tel"
                              name="user_phone"
                              placeholder="0400 000 000"
                              className="border-start-0 ps-1"
                            />
                          </div>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group controlId="formService">
                          <Form.Label className="fw-medium">Service Needed</Form.Label>
                          <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                              <ClipboardCheck className="text-muted" size={18} />
                            </span>
                            <Form.Select
                              name="user_service"
                              className="border-start-0 ps-1"
                              required
                            >
                              <option value="">Select a service</option>
                              <option>Interior Painting</option>
                              <option>Exterior Painting</option>
                              <option>Commercial Painting</option>
                              <option>Color Consultation</option>
                            </Form.Select>
                          </div>
                        </Form.Group>
                      </Col>

                      <Col xs={12}>
                        <Form.Group controlId="formMessage">
                          <Form.Label className="fw-medium">Your Message</Form.Label>
                          <div className="input-group">
                            <span className="input-group-text bg-light border-end-0 align-items-start pt-2">
                              <ChatLeftText className="text-muted" size={18} />
                            </span>
                            <Form.Control
                              as="textarea"
                              name="message"
                              rows={4}
                              placeholder="Tell us about your project..."
                              required
                              className="border-start-0 ps-1"
                            />
                          </div>
                        </Form.Group>
                      </Col>

                      <Col xs={12}>
                        <div className="d-grid mb-3">
                          <Button
                            variant="primary"
                            size="lg"
                            className="fw-bold py-3"
                            type="submit"
                            disabled={sending}
                          >
                            {sending ? 'Sending...' : (
                              <>
                                <Send className="me-2" size={18} />
                                Submit Inquiry
                              </>
                            )}
                          </Button>
                        </div>
                        
                        {/* WhatsApp Button */}
                        <div className="d-grid">
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
                  </Form>

                  {statusMessage && (
                    <div className="mt-3 text-center">
                      <Alert variant={statusMessage.startsWith('✅') ? 'success' : 'danger'}>
                        {statusMessage}
                      </Alert>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default ContactPage;