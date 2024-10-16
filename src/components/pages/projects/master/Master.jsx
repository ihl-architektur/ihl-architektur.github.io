import React from 'react';
import ProjectDetailView from 'components/sections/ProjectDetailView';
import boulderChurchData from 'data/boulderChurch/boulderChurch';

const Master = () => {
  return <ProjectDetailView data={boulderChurchData} />;
};

export default Master;
