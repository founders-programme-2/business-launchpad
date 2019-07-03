import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './CFooter.style';
import { CONTACT_URL, PRIVACY_URL, LOGIN_URL } from '../constants';

const CFooter = location => {
  const { pathname } = location;
  if (pathname !== LOGIN_URL) {
    return (
      <S.Footer>
        <S.Line />
        <S.FooterWrapper>
          {pathname !== PRIVACY_URL && (
            <Link to={PRIVACY_URL}>
              <S.H3>Privacy Policy</S.H3>
            </Link>
          )}
          {pathname !== CONTACT_URL && (
            <Link to={CONTACT_URL}>
              <S.H3>Contact Us </S.H3>
            </Link>
          )}
        </S.FooterWrapper>
      </S.Footer>
    );
  }
  return null;
};

export default CFooter;
