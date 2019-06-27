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
        <S.H1>contact</S.H1>
        <S.ContactWrapper>
          <S.H3>
            <u>
              business
              <br />
              launchpad
            </u>
          </S.H3>
          <S.P>
            Trident Business Centre <br /> 89 Bickersteth Rd,
            <br /> Tooting, London <br /> SW17 9SH <br /> Phone:
            <br /> 020 8516 7759
            <br />
            <br />
            fakemail@fakeemail.com
          </S.P>
        </S.ContactWrapper>
      </S.Main>
      <CFooter />
    </Fragment>
  );
};

Contact.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default Contact;
