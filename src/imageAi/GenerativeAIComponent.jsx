import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Container, Row, Col, Form, Button, Image,Spinner } from 'react-bootstrap';
const genAI = new GoogleGenerativeAI('AIzaSyDY6rZTnI_GNPyTigg5iI6QymFnN62woSU');

const GenerativeAIComponent = () => {
  const [result, setResult] = useState('');
  const [textInput, setTextInput] = useState('');
  const [image1, setImage1] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleImage1Upload = (event) => {
    const file = event.target.files[0];
    setImage1(file);
  };

  const generateContent = async () => {
    try {
        setLoading(true); 
      const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

      const prompt = textInput;

      const image1Part = await fileToGenerativePart(image1);

      const result = await model.generateContent([prompt, image1Part]);

      const response = await result.response;
      const text = response.text();

      setResult(text);
    } catch (error) {
      console.error('Error:', error);
    }finally{
        setLoading(false);
    }
  };

  const fileToGenerativePart = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64Data = reader.result.split(',')[1];
        const mimeType = file.type;

        const generativePart = {
          inlineData: {
            data: base64Data,
            mimeType,
          },
        };

        resolve(generativePart);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}> 
          <h2 className="text-center mb-4" style={{backgroundColor:'#c6c6cd'}} >Guru Ji Pro</h2>
          <Form>
            <Form.Group controlId="textInput">
              <Form.Label>Text Input:</Form.Label>
              <Form.Control type="text" placeholder='Ask anything related to image' value={textInput} onChange={handleTextChange} />
            </Form.Group>

            <Form.Group controlId="image1">
              <Form.Label>Image:</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handleImage1Upload} />
              {image1 && (
                <div className="mt-2">
                  <Image style={{height:'5rem'}} src={URL.createObjectURL(image1)} alt="Preview" thumbnail fluid />
                </div>
              )}
            </Form.Group>

            <Button variant="primary" className='mt-3' onClick={generateContent} block>
            {loading ? (
                <Spinner animation="border" variant="danger" size="sm" />
              ) : (
                'Send'
              )}
            </Button>
          </Form>
        </Col>
      </Row>

      {result && (
        <Row className="mt-4">
          <Col>
            <h4>Result:</h4>
            <p>{result}</p>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default GenerativeAIComponent;
