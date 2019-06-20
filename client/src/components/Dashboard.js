import React, { Component, Fragment } from 'react';
import CHeader from './CHeader';

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <CHeader menu />
        <h1>Dashboard</h1>
      </Fragment>
    );
  }
}

export default Dashboard;
