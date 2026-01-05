import { useState, useEffect } from 'react';
import './WhatsAppButton.css';

function WhatsAppButton() {
  const [isShifted, setIsShifted] = useState(false);

  const togglePosition = () => {
    if (window.pageYOffset > 300) {
      setIsShifted(true);
    } else {
      setIsShifted(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', togglePosition);
    return () => window.removeEventListener('scroll', togglePosition);
  }, []);

  return (
    <a
      href="https://wa.me/919114036376"
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-button ${isShifted ? 'shifted' : ''}`}
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}

export default WhatsAppButton;
