import React, { Component, Fragment } from 'react';
import axios from 'axios';
import * as S from './Resources.style';

class Resources extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.getResources();
  }

  getResources = () => {
    axios
      .get('/resources/get')
      .then(response => {
        const { data } = response.data;
        this.setState({ data });
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log("state: ", this.state)
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
