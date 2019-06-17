import React, { Component, Fragment } from 'react';
import * as S from './Resources.style';

class Resources extends Component {
  state = {
    funding: [],
    events: [],
    businessDevelopment: [],
    books: [],
  };

  render() {
    return (
      <Fragment>
        <S.H1>Resources</S.H1>
        <S.Section>
          <S.H2>Funding</S.H2>
        </S.Section>
        <S.Section>
          <S.H2>Events</S.H2>
        </S.Section>
        <S.Section>
          <S.H2>Business Development</S.H2>
        </S.Section>
        <S.Section>
          <S.H2>Books Worth Reading</S.H2>
        </S.Section>
      </Fragment>
    );
  }
}

export default Resources;
