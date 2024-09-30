import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link className="flex flex-col items-center" to="/">
      <p className="font-medium ">ISABELLE IHL</p>
      <p>ARCHITEKTUR</p>
    </Link>
  );
};

export default Logo;
