import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';
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
                <MenuText>DASHBOARD</MenuText>
              </MenuElement>
              <MenuElement>
                <MenuText>GOALS</MenuText>
              </MenuElement>
              <MenuElement>
                <MenuText>RESOURCES</MenuText>
              </MenuElement>
              <MenuElement>
                <MenuText>CONTACT</MenuText>
              </MenuElement>
              <MenuElement>
                <MenuText>LOG OUT</MenuText>
              </MenuElement>
              <Logo src={logo} alt="Launchpad logo" />
            </MenuWrapper>
          </Overlay>
        )}
      </Fragment>
    );
  }
}
