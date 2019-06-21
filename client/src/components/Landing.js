import React, { Component, Fragment } from 'react';
import * as S from './Landing.style';
import { LOGIN_URL, SIGNUP_URL } from '../constants';

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
        <S.Main>
          <S.Title>MY</S.Title>
          <S.H1> Business launchpad </S.H1>
          <S.Button onClick={this.login}>login </S.Button>
          <S.Button onClick={this.signup}>signup </S.Button>
        </S.Main>
      </Fragment>
    );
  }
}

export default Landing;
