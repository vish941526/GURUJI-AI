
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../footer/Footer';

const FeaturesComponent = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col md={8} lg={6} className="mx-auto">
          <div className="text-center">
            <h2 className="mb-4">Explore Guru Ji AI Chat Features</h2>
          </div>
          <ul className="list-group">
            <li className="list-group-item">
              <h5>Powerful AI Chat</h5>
              <p>
                Guru Ji uses state-of-the-art GPT technology for intelligent and natural conversations.
              </p>
            </li>
            <li className="list-group-item">
              <h5>Dynamic Responses</h5>
              <p>
                Get dynamic responses tailored to your questions and conversations.
              </p>
            </li>
            <li className="list-group-item">
              <h5>Multi-category Support</h5>
              <p>
                Guru Ji can assist you with a variety of topics, including general knowledge, advice, and more.
              </p>
            </li>
            <li className="list-group-item">
              <h5>Print Support</h5>
              <p>
                Guru Ji can assist you with a Print features which help us the user to Print the answer into pdf
              </p>
            </li>
          </ul>
        </Col>
      </Row>
      <Footer/>
    </Container>
  );
};

export default FeaturesComponent;
