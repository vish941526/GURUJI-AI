import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import LoadingSpinner from '../loadingicon/LoadingSpinner';

const ChatComponent = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const API_KEY = 'AIzaSyAp7027qBxH7jUefNjr8vvN-skwF4-zkYc';
  const MODEL_NAME = 'gemini-pro';

  const runChat = async () => {
    try {
      if (!userInput) return;

      setLoading(true);

      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: MODEL_NAME });

      const generationConfig = {
        temperature: 1,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
      };

      const safetySettings = [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ];

      const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [],
      });

      const result = await chat.sendMessage(userInput);
      const newResponse = result.response.text();

      setResponse(newResponse);

      setChatHistory([...chatHistory, { user: userInput, ai: newResponse }]);
    } catch (error) {
      console.error('Error in runChat:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = () => {
    runChat();
    setUserInput('');
  };

  return (
    <div>

    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card>
            <Card.Header className="bg-primary text-white text-center">
              <h3>Guru-Ji ......Ask Anything</h3>
            </Card.Header>
            <Card.Body>
              <Form.Group className="d-flex mb-3">
                <Form.Control
                  type="text"
                  value={userInput}
                  onChange={(event) => setUserInput(event.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow-1 me-2"
                />
                <Button variant="primary" onClick={handleSendMessage}>
                  Send
                </Button>
              </Form.Group>
              {loading ? (
                <div className="text-center">
                  <LoadingSpinner />
                </div>
              ) : null }
              <div className="mb-4">
                {chatHistory.map((message, index) => (
                  <div key={index} className="mb-2">
                    <strong>You:</strong> {message.user}
                    <br />
                    <strong>GURUJI:</strong> {message.ai}
                    <hr />
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
    </div>
  );
};

export default ChatComponent;
