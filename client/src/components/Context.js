/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const MyContext = React.createContext();
export class MyProvider extends Component {
  state = {
    isLoggedIn: false,
    token: '',
    // for development this should be a static id of a document in your database
    // until login/authentication automatically starts to save it here
    _id: '5d10aa44726912311745ae0e',
    goalData: [],
  };

  updateGoals = goalData => {
    this.setState({ goalData });
  };

  render() {
    const { children } = this.props;
    return (
      <MyContext.Provider
        value={{ state: this.state, updateGoals: this.updateGoals }}
      >
        {children}
      </MyContext.Provider>
    );
  }
}
MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
