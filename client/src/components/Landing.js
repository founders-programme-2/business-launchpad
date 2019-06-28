import React, { Component, Fragment } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import * as S from './Landing.style';
import { LOGIN_URL, SIGNUP_URL } from '../constants';
import CHeader from './CHeader';

class Landing extends Component {
  login = () => {
    const { history } = this.props;
    history.push(LOGIN_URL);
  };

  signup = () => {
    const { history } = this.props;
    history.push(SIGNUP_URL);
  };

  render() {
    return (
      <Fragment>
        <CHeader menu={null} />
        <S.Main>
          <S.SectionTitle>
            <S.H1>My</S.H1>
            <S.H2>Business</S.H2>
            <S.H2>launchpad</S.H2>
          </S.SectionTitle>
          <S.SectionButtons>
            <S.ButtonSignUp onClick={this.signup}>sign up</S.ButtonSignUp>
            <S.ButtonLogin onClick={this.login}>login </S.ButtonLogin>
          </S.SectionButtons>
        </S.Main>
      </Fragment>
    );
  }
}

Landing.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default Landing;
