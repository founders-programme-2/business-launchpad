import React, { Fragment } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import CHeader from './CHeader';
import * as S from './Error404.style';
import Button from './CBtn';

const Error500 = props => {
  const back = () => {
    const { history } = props;
    history.go(-1);
  };
  return (
    <Fragment>
      <CHeader menu={null} />
      <S.Main>
        <S.Div>
          <S.H1>
            500 :(
            <br />
            Sorry, we have had an issue on our end.
          </S.H1>
        </S.Div>
        <Button text="back" cb={back} />
      </S.Main>
    </Fragment>
  );
};
Error500.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};
export default Error500;
