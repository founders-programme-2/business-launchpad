import React, { Component, Fragment } from 'react';
import CHeader from './CHeader';

class Landing extends Component {
  render() {
    return (
      <Fragment>
        <CHeader menu={null} />
        <h1>This is a h1</h1>
      </Fragment>
    );
  }
}

export default Landing;
