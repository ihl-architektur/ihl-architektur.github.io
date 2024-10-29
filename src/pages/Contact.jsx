import React from 'react';
import Container from 'utils/Container';

const Contact = () => {
  return (
    <Container>
      <div className="flex flex-row">
        <div className="py-6 text-base font-semibold uppercase">KONTAKT</div>
        <div className="py-6 pl-[82px]">
          <p>Isabelle Ihl</p>
          <p>M.Sc. Architektin</p>
          <p>Damaschkestraße 34</p>
          <p>D-10711 Berlin</p>
          <p className="pt-6">+49 15733927022</p>
          <p>info@ihl-architektur.de</p>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
