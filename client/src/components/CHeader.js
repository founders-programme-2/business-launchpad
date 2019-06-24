import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as S from './CHeader.style';
import logo from '../assets/logoBlack.svg';
import info from '../assets/info.svg';
import CMenu from './CMenu';
import { LANDING_URL, INFO_URL } from '../constants';

const CHeader = props => {
  const { menu } = props;
  return (
    <S.Header>
      <S.HeaderWrapper>
        <Link to={LANDING_URL}>
          <S.Logo src={logo} alt="Launchpad logo" />
        </Link>
        {menu ? (
          <CMenu />
        ) : (
          <Link to={INFO_URL}>
            <S.Logo src={info} alt="Launchpad logo" primary />
          </Link>
        )}
      </S.HeaderWrapper>
      {menu ? null : <S.Line />}
    </S.Header>
  );
};
export default CHeader;

CHeader.propTypes = {
  menu: PropTypes.bool,
};

CHeader.defaultProps = {
  menu: PropTypes.bool,
};
