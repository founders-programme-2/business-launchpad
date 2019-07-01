import React, { Component, Fragment } from 'react';
import CHeader from './CHeader';
import CFooter from './CFooter';

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <CHeader menu />
        <h1>Dashboard</h1>
        <CFooter />
      </Fragment>
    );
  }
}

export default Dashboard;
