import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link className="flex flex-col items-center text-[22px] leading-7" to="/">
      <p className="font-semibold ">ISABELLE IHL</p>
      <p>ARCHITEKTUR</p>
    </Link>
  );
};

export default Logo;
