import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon

const WhatsAppButton = () => {
  const phoneNumber = '+971529158949'; // Replace with your WhatsApp number

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      style={styles.button}
      className="whatsapp-button"
    >
      <FaWhatsapp size={30} color="white" /> {/* Use React Icon here */}
    </button>
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25d366',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    padding: '15px',
    fontSize: '24px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    zIndex: 1000,
  },
};

export default WhatsAppButton;
