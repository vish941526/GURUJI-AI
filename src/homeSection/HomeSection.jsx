
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './HomeSection.css'; 
import Footer from '../footer/Footer';

const HomeSection = () => {
  return (
    <Container fluid className="home-section-bg text-light text-center">
      <Container>
        <h2 className="mb-4">Welcome to Our AI-Powered Website!</h2>
        <p>
          Explore the  functions of our website:
        </p>

        <Row className="justify-content-center mt-4">
          <FunctionCard
            title="Text-based AI"
            description="Get insights, summaries, and answers from text input."
            link="/textAi"
          />

          <FunctionCard
            title="Image-based AI"
            description="Upload an image and ask questions related to the image."
            link="/imageAi"
          />
        </Row>
      </Container>
      <Footer/>
    </Container>
  );
};

const FunctionCard = ({ title, description, link }) => {
  return (
    <Col md={6} lg={4} className="mb-4">
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={link}>
            <Button variant="primary">Explore &rarr;</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HomeSection;
