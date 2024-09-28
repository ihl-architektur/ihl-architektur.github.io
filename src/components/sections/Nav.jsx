import React from 'react';
import Container from '../utils/Container';
import Logo from '../atoms/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

const Nav = () => {
  const menuRef = useRef();

  const switchMenu = () => {
    menuRef.current.classList.toggle('top-full');
    menuRef.current.classList.toggle('translate-y-0');
  };

  return (
    <div className="sticky top-0 left-0 z-30 flex items-center py-3 bg-white shadow-sm">
      <Container className="flex items-center justify-between gap-3">
        <Logo />
        <nav className="flex items-center">
          <ul className="items-center justify-between hidden gap-5 sm:flex">
            <li>
              <a
                href="#blog"
                className="font-medium uppercase transition-colors text-primary hover:text-secondary"
              >
                Kontakt
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-medium uppercase transition-colors text-primary hover:text-secondary"
              >
                Vita
              </a>
            </li>
          </ul>
          <button className="sm:hidden" onClick={switchMenu}>
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
          <ul
            className="absolute top-0 left-0 z-10 w-full transition -translate-y-full bg-white shadow-md sm:hidden"
            ref={menuRef}
          >
            <Container>
              <li>
                <a
                  href="#blog"
                  className="block py-3 font-medium uppercase transition-colors text-primary hover:text-secondary"
                >
                  Kontakt
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-3 font-medium uppercase transition-colors text-primary hover:text-secondary"
                >
                  Vita
                </a>
              </li>
            </Container>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default Nav;
