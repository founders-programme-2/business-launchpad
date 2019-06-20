import React, { Component, Fragment } from 'react';
import * as S from './CBtn.style';

class Landing extends Component {
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
