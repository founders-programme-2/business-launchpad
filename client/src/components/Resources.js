import React, { Component, Fragment } from 'react';
import axios from 'axios';
import CHeader from './CHeader';
import * as S from './Resources.style';
import ResourceEntry from './Resources-Entry';

class Resources extends Component {
  state = {
    data: [],
    showFunding: true,
    showEvents: true,
    showBusiness: true,
    showBooks: true,
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
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
  };

  // renders all resources to the appropriate sections.
  // 'data' is the data returned from airtable
  // 'section' defines which category of resources should be rendered
  renderResources = (data, section) => {
    if (data.length === 0) {
      return (
        <p>
          Sorry, there are no resources here right now. Please check again
          later!
        </p>
      );
    }
    return data.map(resource => {
      if (resource.category === section) {
        return <ResourceEntry {...resource} key={resource.id} />;
      }
      return null;
    });
  };

  render() {
    const { data: resourceData } = this.state;

    return (
      <Fragment>
        <CHeader menu />
        <S.H1>Resources</S.H1>
        <S.Section>
          <S.H2>
            Funding <S.ArrowDown />
          </S.H2>
          {this.renderResources(resourceData, 'funding')}
        </S.Section>
        <S.Section>
          <S.H2>
            Events <S.ArrowDown />
          </S.H2>
          {this.renderResources(resourceData, 'events')}
        </S.Section>
        <S.Section>
          <S.H2>
            Business Development <S.ArrowDown />
          </S.H2>
          {this.renderResources(resourceData, 'businessdev')}
        </S.Section>
        <S.Section>
          <S.H2>
            Books Worth Reading <S.ArrowDown />
          </S.H2>
          {this.renderResources(resourceData, 'books')}
        </S.Section>
      </Fragment>
    );
  }
}

export default Resources;
