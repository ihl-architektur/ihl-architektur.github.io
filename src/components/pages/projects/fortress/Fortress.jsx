import React from 'react';
import ProjectDetailView from 'components/sections/ProjectDetailView';
import boulderChurchData from 'data/boulderChurch/boulderChurch';

const Fortress = () => {
  return <ProjectDetailView data={boulderChurchData} />;
};

export default Fortress;
