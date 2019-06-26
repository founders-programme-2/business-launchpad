import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Link } from 'react-router-dom';
import * as S from './CFooter.style';
import { CONTACT_URL, PRIVACY_URL } from '../constants';

class CFooter extends Component {
  render() {
    return (
      <S.Footer>
        <S.Line />
        <S.FooterWrapper>
          <Link to={PRIVACY_URL}>
            <S.H1>PrivacyPolicy</S.H1>
          </Link>
          <Link to={CONTACT_URL}>
            <S.H2>ContactUs </S.H2>
          </Link>
        </S.FooterWrapper>
      </S.Footer>
    );
  }
}

CFooter.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default CFooter;
