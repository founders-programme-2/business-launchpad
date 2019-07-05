import React, { Component, Fragment } from 'react';
import {
  DASHBOARD_URL,
  CONTACT_URL,
  RESOURCES_URL,
  JOURNAL_URL,
  LANDING_URL,
} from '../constants';
import * as S from './CMenu.style';
import { Logo, Line } from './CHeader.style';
import logo from '../assets/logoWhite.svg';

class CMenu extends Component {
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
        <S.ButtonOpen
          onClick={() => {
            this.show();
          }}
        >
          <S.MenuLine />
          <S.MenuLine />
          <S.MenuLine />
          <S.P>menu</S.P>
        </S.ButtonOpen>

        {visible && (
          <S.Overlay>
            <S.MenuWrapper>
              <S.ButtonClose
                onClick={() => {
                  this.hide();
                }}
              >
                <S.CloseX />
                <S.PClose>close</S.PClose>
              </S.ButtonClose>
              <Line />
              <S.MenuElement>
                <S.LinkText to={DASHBOARD_URL}>DASHBOARD</S.LinkText>
              </S.MenuElement>
              <S.MenuElement>
                <S.LinkText to={JOURNAL_URL}>GOALS</S.LinkText>
              </S.MenuElement>
              <S.MenuElement>
                <S.LinkText to={RESOURCES_URL}>RESOURCES</S.LinkText>
              </S.MenuElement>
              <S.MenuElement>
                <S.LinkText to={CONTACT_URL}>CONTACT</S.LinkText>
              </S.MenuElement>
              <S.MenuElement>
                <S.LinkText to={LANDING_URL}>LOG OUT</S.LinkText>
              </S.MenuElement>
              <Logo src={logo} alt="Launchpad logo" />
            </S.MenuWrapper>
          </S.Overlay>
        )}
      </Fragment>
    );
  }
}

export default CMenu;
