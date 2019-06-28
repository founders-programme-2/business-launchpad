import React, { Fragment } from 'react';
import * as S from './Privacy.style';
import CHeader from './CHeader';
import CFooter from './CFooter';

const Privacy = () => {
  return (
    <Fragment>
      <CHeader menu />
      <S.Main>
        <S.H1>
          your <br />
          privacy
        </S.H1>
        <S.P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </S.P>
        <S.P>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </S.P>
      </S.Main>
      <CFooter />
    </Fragment>
  );
};

export default Privacy;
