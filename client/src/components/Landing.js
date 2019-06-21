import React, { Component, Fragment } from 'react';
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
        <CHeader />
        <S.Main>
          <S.H1>MY</S.H1>
          <S.H2>
            Business <br /> launchpad
          </S.H2>
          <S.Button onClick={this.signup}>signup </S.Button>
          <S.Button1 onClick={this.login}>login </S.Button1>
        </S.Main>
      </Fragment>
    );
  }
}

export default Landing;
