import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  DASHBOARD_URL,
  CONTACT_URL,
  RESOURCES_URL,
  JOURNAL_URL,
} from '../constants';
import * as S from './CMenu.style';
import { Logo, Line } from './CHeader.style';
import logo from '../assets/logoWhite.svg';

export class CMenu extends Component {
  state = {
    visible: false,
  };

  show = () => {
    this.setState({ visible: true });
  };

  hide = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    return (
      <Fragment>
        <S.MenuContainer
          onClick={() => {
            this.show();
          }}
        >
          <S.MenuLine />
          <S.MenuLine />
          <S.MenuLine />
          <S.MenuBarText>menu</S.MenuBarText>
        </S.MenuContainer>

        {visible && (
          <S.Overlay>
            <S.MenuWrapper>
              <S.CloseContainer>
                <S.Close
                  onClick={() => {
                    this.hide();
                  }}
                />
                <S.CloseText
                  onClick={() => {
                    this.hide();
                  }}
                >
                  close
                </S.CloseText>
              </S.CloseContainer>
              <Line />
              <S.MenuElement>
                <S.MenuText>
                  <Link to={DASHBOARD_URL}>DASHBOARD</Link>
                </S.MenuText>
              </S.MenuElement>
              <S.MenuElement>
                <S.MenuText>
                  <Link to={JOURNAL_URL}>GOALS</Link>
                </S.MenuText>
              </S.MenuElement>
              <S.MenuElement>
                <S.MenuText>
                  <Link to={RESOURCES_URL}>RESOURCES</Link>
                </S.MenuText>
              </S.MenuElement>
              <S.MenuElement>
                <S.MenuText>
                  <Link to={CONTACT_URL}>CONTACT</Link>
                </S.MenuText>
              </S.MenuElement>
              <S.MenuElement>
                <S.MenuText>
                  <Link to="logout">LOG OUT</Link>
                </S.MenuText>
              </S.MenuElement>
              <Logo src={logo} alt="Launchpad logo" />
            </S.MenuWrapper>
          </S.Overlay>
        )}
      </Fragment>
    );
  }
}
