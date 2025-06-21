import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow">
            <Card.Body className="p-4">
              <h2 className="text-center mb-4 text-primary">About Classy Colours</h2>
              
              <Card.Text className="lead mb-4">
                Classy Colours is a premier painting service provider with over a decade of experience in transforming 
                residential and commercial spaces across the region. Our passion for color and commitment to excellence 
                has made us a trusted name in the painting industry.
              </Card.Text>
              
              <Card.Text>
                We specialize in:
                <ul className="list-group list-group-flush mb-4">
                  <li className="list-group-item">Interior & exterior painting</li>
                  <li className="list-group-item">Commercial property coatings</li>
                  <li className="list-group-item">Specialty finishes and textures</li>
                  <li className="list-group-item">Surface preparation and restoration</li>
                  <li className="list-group-item">Eco-friendly paint solutions</li>
                </ul>
              </Card.Text>
              
              <Card.Text className="mb-4">
                Founded by Ali in 2012, Classy Colours takes pride in our meticulous attention to detail and commitment 
                to using only premium quality materials from trusted brands. Our team of skilled, background-checked 
                professionals undergoes continuous training to stay updated with the latest techniques and trends.
              </Card.Text>
              
              <Card.Text className="mb-4">
                What sets us apart is our customer-first approach - we treat every project, big or small, with the same 
                level of care and professionalism. From the initial consultation to the final cleanup, we ensure a 
                seamless, stress-free experience.
              </Card.Text>
              
              <div className="contact-info bg-light p-4 rounded">
                <h5 className="mb-3">Contact Us</h5>
                <p><i className="bi bi-telephone me-2"></i> Phone: 0403 732 881</p>
                <p><i className="bi bi-envelope me-2"></i> Email: classycolours22@gmail.com</p>
                <p><i className="bi bi-geo-alt me-2"></i> Serving: Sydney Metropolitan Area</p>
                
                <div className="social-links mt-3">
                  <a href="https://instagram.com/classycolours" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary me-2">
                    <i className="bi bi-instagram me-1"></i> Instagram
                  </a>
                  <a href="https://facebook.com/classycolours" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary me-2">
                    <i className="bi bi-facebook me-1"></i> Facebook
                  </a>
                  <a href="https://tiktok.com/@classycolours" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                    <i className="bi bi-tiktok me-1"></i> TikTok
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;