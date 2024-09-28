import React from 'react';
import Container from '../utils/Container';
import Logo from '../atoms/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="py-6 text-white bg-primary">
      <Container className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-start">
        <div className="flex flex-col items-center gap-5 md:flex-row">
          <Logo />
        </div>
        <a
          href="#"
          className="flex items-center gap-2 text-xs font-semibold uppercase transition hover:text-secondary"
        >
          Back To Top <FontAwesomeIcon icon={faChevronUp} />
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
