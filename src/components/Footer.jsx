import React from 'react';
import { Link } from 'react-router'; // Importing Link from react-router
import Container from '../utils/Container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="py-6 text-black bg-white">
      <Container className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-start">
        {/* Middle: Back To Top (right-aligned on large screens) */}
        <div className="md:pl-[168px] md:flex-grow md:flex md:justify-center">
          <a
            href="#"
            className="flex items-center gap-2 text-xs font-semibold uppercase transition hover:text-secondary md:self-end"
          >
            <FontAwesomeIcon size="2x" icon={faChevronUp} />
          </a>
        </div>
        {/* Right Side: Impressum and Datenschutz */}
        <div className="flex gap-5 text-xs font-semibold ">
          <Link to="/impressum" className="transition hover:text-secondary">
            Impressum
          </Link>
          <Link to="/datenschutz" className="transition hover:text-secondary">
            Datenschutz
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
