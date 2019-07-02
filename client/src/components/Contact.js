import React, { Fragment } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import * as S from './Contact.style';
import CHeader from './CHeader';
import CFooter from './CFooter';

const Contact = () => {
  return (
    <Fragment>
      <CHeader menu />
      <S.Main>
        <S.H1>Contact</S.H1>
        <S.Address>
          <S.H2>
            business
            <br />
            launchpad
          </S.H2>
          <S.P>Trident Business Centre 89 Bickersteth Rd,</S.P>
          <S.P>
            Tooting, London SW17 9SH
            <br /> Phone: 020 8516 7759
          </S.P>
          <S.P>fakemail@fakeemail.com</S.P>
        </S.Address>
      </S.Main>
      <CFooter />
    </Fragment>
  );
};

Contact.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default Contact;
