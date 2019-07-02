import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './CFooter.style';
import { CONTACT_URL, PRIVACY_URL } from '../constants';

const CFooter = () => {
  return (
    <S.Footer>
      <S.Line />
      <S.FooterWrapper>
        <Link to={PRIVACY_URL}>
          <S.H3>Privacy Policy</S.H3>
        </Link>
        <Link to={CONTACT_URL}>
          <S.H3>Contact Us </S.H3>
        </Link>
      </S.FooterWrapper>
    </S.Footer>
  );
};

export default CFooter;
