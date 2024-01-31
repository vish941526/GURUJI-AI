
import React from 'react';
import ContactUs from '../getInTouch/ContactUs'
const Footer = () => {
  

  return (
    <div className="container mt-4">
    <footer className="bg-dark fixed-bottom text-light text-center  p-3 ">
      <p>&copy; 2023 VishalMaurya. All rights reserved. | <a href="mailto:vishalmaurya2690@gmail.com?subject=Website Feedback" className="text-light">Provide Feedback</a></p>
    <ContactUs/>
    </footer>
    </div>
  );
};

export default Footer;
