import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Outlet, useLocation } from 'react-router';

const Layout = () => {
  const location = useLocation();
  const shouldHideHeaderFooter = location.pathname.startsWith('/projects');
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header (Nav) */}
      {!shouldHideHeaderFooter && (
        <header>
          <Nav />
        </header>
      )}

      {/* Main content (Outlet) */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      {!shouldHideHeaderFooter && (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  );
};

export default Layout;
