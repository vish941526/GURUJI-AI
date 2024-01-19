
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ContactUsComponent = () => {
  const handleCall = () => {
    window.location.href = 'tel:+919415262284';
  };
  const handleEmail = () => {
    window.location.href = 'mailto:vishalmaurya2690@gmail.com';
  };


 

  return (
    <>
    <section id="about" style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
    <div style={{ maxWidth: '800px', margin: 'auto', textAlign: 'center' }}>
      <img
        style={{ borderRadius: '50%', maxWidth: '200px', marginBottom: '20px' }}
        src="vishal.jpg"
        alt="Vishal Maurya"
      />
      <h2 style={{ fontSize: '2em', marginBottom: '10px' }}>Vishal Maurya</h2>
      <p style={{ fontSize: '1.2em', lineHeight: '1.6' }}>
        Welcome to my project website! I'm Vishal Maurya, and I've built an
      AI website that I'm excited to share with you. Here, you can explore
      Both the features chat using text and ask anything after uploading the Image.
      </p>
    </div>
  </section>
    <Container className="mt-1">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="text-center mb-2">
            <h4>Contact Details</h4>
          </div>
          <div className="d-grid gap-2">
            <Button variant="primary" onClick={handleCall}>
              Call: 9415262284
            </Button>
            <Button variant="success" onClick={handleEmail}>
              Email: vishalmaurya2690@gmail.com
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default ContactUsComponent;
