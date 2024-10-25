import React from 'react';
import Container from 'utils/Container';

const Contact = () => {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          fontFamily: 'Arial, sans-serif',
          color: '#333',
        }}
      >
        <div style={{ marginRight: '2em' }}>
          <p style={{ margin: 0 }}>KONTAKT</p>
        </div>
        <div>
          <p style={{ margin: 0 }}>Isabelle Ihl</p>
          <p style={{ margin: 0 }}>M.Sc. Architektin</p>
          <p style={{ margin: 0 }}>Damaschkestraße 34</p>
          <p style={{ margin: 0 }}>D-10711 Berlin</p>
          <p style={{ margin: 0 }}>+49 15733927022</p>
          <p style={{ margin: 0 }}>info@ihl-architektur.de</p>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
