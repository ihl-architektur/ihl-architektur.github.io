import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Imprint from './pages/Imprint';
import DataPrivacy from './pages/DataPrivacy';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Vita from './pages/Vita';
import BoulderChurch from 'pages/projects/boulderchurch/BoulderChurch';
import Competition from 'pages/projects/competition/Competition';
import EPFL from 'pages/projects/epfl/EPFL';
import FeasibilityStudy from 'pages/projects/feasibility-study/FeasibilityStudy';
import Feel from 'pages/projects/feel/Feel';
import Fortress from 'pages/projects/fortress/Fortress';
import HikingHouse from 'pages/projects/hiking-house/HikingHouse';
import Master from 'pages/projects/master/Master';
import NikolaiChurch from 'pages/projects/nikolai-church/NikolaiChurch';
import PictureBuilding from 'pages/projects/picture-building/PictureBuilding';
import Renes from 'pages/projects/renes/Renes';
import SocialProject from 'pages/projects/social-project/SocialProject';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="datenschutz" element={<DataPrivacy />} />
          <Route path="impressum" element={<Imprint />} />
          <Route path="vita" element={<Vita />} />
          <Route path="*" element={<NotFound />} />
          <Route path="projects">
            <Route path="boulderchurch" element={<BoulderChurch />} />
            <Route path="competition" element={<Competition />} />
            <Route path="epfl" element={<EPFL />} />
            <Route path="feasibility-study" element={<FeasibilityStudy />} />
            <Route path="lattemit" element={<Feel />} />
            <Route path="fortress" element={<Fortress />} />
            <Route path="hiking-house" element={<HikingHouse />} />
            <Route path="master" element={<Master />} />
            <Route path="nikolai-chruch" element={<NikolaiChurch />} />
            <Route path="picture-building" element={<PictureBuilding />} />
            <Route path="renes" element={<Renes />} />
            <Route path="social-project" element={<SocialProject />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
