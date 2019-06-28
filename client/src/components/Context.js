/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const MyContext = React.createContext();
export class MyProvider extends Component {
  state = {
    isLoggedIn: false,
    token: '',
    _id: '',
    goalData: [],
  };

  // TODO: Refactor below functions into a single function if possible

  updateGoals = goalData => {
    this.setState({ goalData });
  };

  updateToken = tokenData => {
    this.setState({ token: tokenData });
  };

  updateId = idData => {
    this.setState({ _id: idData });
  };

  updateName = username => {
    this.setState({ username });
  };

  render() {
    const { children } = this.props;
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          updateGoals: this.updateGoals,
          updateToken: this.updateToken,
          updateId: this.updateId,
          updateName: this.updateName,
        }}
      >
        {children}
      </MyContext.Provider>
    );
  }
}
MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
