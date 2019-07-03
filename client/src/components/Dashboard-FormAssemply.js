import React, { Component } from 'react';
import * as S from './Dashboard-FormAssemply.style';
import * as C from './Journal.style';

class FormAssemply extends Component {
  render() {
    return (
      <S.FormWrapper>
        <h2>Start here:</h2>
        <S.Form border>
          <C.P>
            Complete your registration to get the most of out Business
            Launchpad!
          </C.P>
          <S.Button>Go!</S.Button>
        </S.Form>
        <S.Form>
          <C.P>
            Complete your intial assessment to help your coach understand what
            your business does.
          </C.P>
          <S.Button>Go!</S.Button>
        </S.Form>
      </S.FormWrapper>
    );
  }
}

export default FormAssemply;
