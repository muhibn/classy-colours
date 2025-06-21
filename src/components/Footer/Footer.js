import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Instagram, Tiktok } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <Container>
        <Row>
          {/* Company Info */}
          <Col md={4} className="mb-4 mb-md-0">
            <h3 className="text-warning mb-3">Classy Colours PTY LTD</h3>
            <p className="text-light">
              Quality painting services for residential and commercial properties
            </p>
          </Col>

          {/* Contact Info */}
          <Col md={4} className="mb-4 mb-md-0">
            <h3 className="text-warning mb-3">Contact Us</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-telephone me-2"></i>
                <a href="tel:0403732881" className="text-white text-decoration-none">
                  0403 732 881
                </a>
              </li>
              <li>
                <i className="bi bi-envelope me-2"></i>
                <a href="mailto:classycolours22@gmail.com" className="text-white text-decoration-none">
                  classycolours22@gmail.com
                </a>
              </li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col md={4}>
            <h3 className="text-warning mb-3">Follow Us</h3>
            <div className="d-flex gap-3">
              <a 
                href="https://instagram.com/classycolours" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <Instagram />
              </a>
              <a 
                href="https://facebook.com/classycolours" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <Facebook />
              </a>
              <a 
                href="https://tiktok.com/@classycolours" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <Tiktok />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="my-4" />

        {/* Copyright */}
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Classy Colours PTY LTD. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;