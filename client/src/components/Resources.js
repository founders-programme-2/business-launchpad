import React, { Component, Fragment } from 'react';
import axios from 'axios';
import CHeader from './CHeader';
import * as S from './Resources.style';
import ResourceEntry from './Resources-Entry';
import CFooter from './CFooter';

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

  handleFunding = () => {
    this.setState({ showFunding: !this.state.showFunding });
  };

  handleEvents = () => {
    this.setState({ showEvents: !this.state.showEvents });
  };

  handleBusiness = () => {
    this.setState({ showBusiness: !this.state.showBusiness });
  };

  handleBooks = () => {
    this.setState({ showBooks: !this.state.showBooks });
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
    const { showFunding, showEvents, showBusiness, showBooks } = this.state;
    return (
      <Fragment>
        <CHeader menu />
        <S.H1>Resources</S.H1>
        <S.Section>
          <S.H2>
            Funding <S.ArrowDown onClick={this.handleFunding} />
          </S.H2>
          {showFunding && this.renderResources(resourceData, 'funding')}
        </S.Section>
        <S.Section>
          <S.H2>
            Events <S.ArrowDown onClick={this.handleEvents} />
          </S.H2>
          {showEvents && this.renderResources(resourceData, 'events')}
        </S.Section>
        <S.Section>
          <S.H2>
            Business Development <S.ArrowDown onClick={this.handleBusiness} />
          </S.H2>
          {showBusiness && this.renderResources(resourceData, 'businessdev')}
        </S.Section>
        <S.Section>
          <S.H2>
            Books Worth Reading <S.ArrowDown onClick={this.handleBooks} />
          </S.H2>
          {showBooks && this.renderResources(resourceData, 'books')}
        </S.Section>
        <CFooter/>
      </Fragment>
    );
  }
}

export default Resources;
