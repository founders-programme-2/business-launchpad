import React, { Component, Fragment } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import * as S from './Info.style';
import CHeader from './CHeader';
import Button from './CBtn';

class Info extends Component {
  back = () => {
    const { history } = this.props;
    history.go(-1);
  };

  render() {
    return (
      <Fragment>
        <CHeader menu />
        <S.Main>
          <S.H1>
            what is <br />
            this app?
          </S.H1>
          <S.P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </S.P>
          <Button text="back" cb={this.back} />
        </S.Main>
      </Fragment>
    );
  }
}
Info.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default Info;
