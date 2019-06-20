/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const MyContext = React.createContext();
export class MyProvider extends Component {
  state = {
    isLoggedIn: false,
    token: '',
    _id: '5d0912f508d0f83945e080dd',
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
