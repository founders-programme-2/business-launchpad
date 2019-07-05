import React, { Fragment } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import CHeader from './CHeader';
import * as S from './Error404.style';
import Button from './CBtn';

const Error404 = props => {
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
            404!
            <br />
            Sorry, the page you are looking for is unavailable.
          </S.H1>
        </S.Div>
        <Button text="back" cb={back} />
      </S.Main>
    </Fragment>
  );
};
Error404.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};
export default Error404;
