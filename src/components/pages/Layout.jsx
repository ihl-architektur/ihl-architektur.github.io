import React from 'react';
import Nav from '../sections/Nav';
import Footer from '../sections/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header (Nav) */}
      <header>
        <Nav />
      </header>

      {/* Main content (Outlet) */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
