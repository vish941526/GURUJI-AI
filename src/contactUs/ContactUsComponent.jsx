
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Footer from '../footer/Footer';

const ContactUsComponent = () => {
  const handleCall = () => {
    window.location.href = 'tel:+9415262284';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:vishalmaurya2690@gmail.com';
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="text-center mb-4">
            <h2>Contact Vishal Maurya</h2>
          </div>
          <div className="d-grid gap-3">
            <Button variant="primary" onClick={handleCall}>
              Call: 9415262284
            </Button>
            <Button variant="success" onClick={handleEmail}>
              Email: vishalmaurya2690@gmail.com
            </Button>
          </div>
        </Col>
      </Row>
      <Footer/>
    </Container>
  );
};

export default ContactUsComponent;
