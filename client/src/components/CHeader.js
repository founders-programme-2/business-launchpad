import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Logo, HeaderWrapper, Line } from './CHeader.style.js';
import logo from'../styles/logoYellow.svg';
import info from '../styles/info.svg';
import {LANDING_URL,INFO_URL} from'../constants';

const CHeader = props => (
<header>
  <HeaderWrapper>
     <Link to={LANDING_URL}>
  <Logo src={logo} alt="Launchpad logo" />
  </Link>
   <Link to={INFO_URL}>
      <Logo src={info} alt="Launchpad logo" primary />
       </Link>
</HeaderWrapper>
    <Line />
</header>
);
export default CHeader;
