import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/pages/Layout';
import Home from './components/pages/Home';
import Imprint from './components/pages/Imprint';
import DataPrivacy from './components/pages/DataPrivacy';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import Vita from './components/pages/Vita';
import BoulderChurch from 'components/pages/projects/boulderchurch/BoulderChurch';
import Competition from 'components/pages/projects/competition/Competition';
import EPFL from 'components/pages/projects/epfl/EPFL';
import FeasibilityStudy from 'components/pages/projects/feasibility-study/FeasibilityStudy';
import Feel from 'components/pages/projects/feel/Feel';
import Fortress from 'components/pages/projects/fortress/Fortress';
import HikingHouse from 'components/pages/projects/hiking-house/HikingHouse';
import Master from 'components/pages/projects/master/Master';
import NikolaiChurch from 'components/pages/projects/nikolai-church/NikolaiChurch';
import PictureBuilding from 'components/pages/projects/picture-building/PictureBuilding';
import Renes from 'components/pages/projects/renes/Renes';
import SocialProject from 'components/pages/projects/social-project/SocialProject';

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
            <Route path="feel" element={<Feel />} />
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
