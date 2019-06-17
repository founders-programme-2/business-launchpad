import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  LANDING_URL,
  INFO_URL,
  DASHBOARD_URL,
  CONTACT_URL,
  PRIVACY_URL,
  RESOURCES_URL,
  JOURNAL_URL,
} from '../constants';
import {
  MenuContainer,
  MenuLine,
  MenuBarText,
  Close,
  CloseText,
  MenuWrapper,
  MenuElement,
  MenuText,
  CloseContainer,
  Overlay,
} from './CMenu.style';
import { Logo, Line } from './CHeader.style';
import logo from '../assets/logoWhite.svg';

export class CMenu extends Component {
  state = {
    visible: false,
  };

  show = () => {
    this.setState({ visible: true });
    console.log(this.state.visible);
  };

  hide = () => {
    this.setState({ visible: false });
    console.log(this.state.visible, 'hide');
  };

  render() {
    const { visible } = this.state;
    return (
      <Fragment>
        <MenuContainer
          onClick={() => {
            this.show();
          }}
        >
          <MenuLine />
          <MenuLine />
          <MenuLine />
          <MenuBarText>menu</MenuBarText>
        </MenuContainer>

        {visible && (
          <Overlay>
            <MenuWrapper>
              <CloseContainer>
                <Close
                  onClick={() => {
                    this.hide();
                  }}
                />
                <CloseText
                  onClick={() => {
                    this.hide();
                  }}
                >
                  close
                </CloseText>
              </CloseContainer>
              <Line />
              <MenuElement>
                <MenuText>
                  <Link to={DASHBOARD_URL}>DASHBOARD</Link>
                </MenuText>
              </MenuElement>
              <MenuElement>
                <MenuText>
                  <Link to={JOURNAL_URL}>GOALS</Link>
                </MenuText>
              </MenuElement>
              <MenuElement>
                <MenuText>
                  <Link to={RESOURCES_URL}>RESOURCES</Link>
                </MenuText>
              </MenuElement>
              <MenuElement>
                <MenuText>
                  <Link to={CONTACT_URL}>CONTACT</Link>
                </MenuText>
              </MenuElement>
              <MenuElement>
                <MenuText>
                  <Link to="logout">LOG OUT</Link>
                </MenuText>
              </MenuElement>
              <Logo src={logo} alt="Launchpad logo" />
            </MenuWrapper>
          </Overlay>
        )}
      </Fragment>
    );
  }
}
