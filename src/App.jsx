import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/pages/Layout';
import Home from './components/pages/Home';
import Imprint from './components/pages/Imprint';
import DataPrivacy from './components/pages/DataPrivacy';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="datenschutz" element={<DataPrivacy />} />
          <Route path="impressum" element={<Imprint />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
