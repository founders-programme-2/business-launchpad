/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const MyContext = React.createContext();
export class MyProvider extends Component {
  state = {
    isLoggedIn: false,
    token: '',
    _id: '5d10aa44726912311745ae0e',
    goalData: [],
  };

  // TODO: Refactor below functions into a single function if possible

  // sort the goals by most recent when update the state
  updateGoals = goalData => {
    goalData.sort(function(a, b) {
      a = new Date(a.dateCreated);
      b = new Date(b.dateCreated);
      return a > b ? -1 : a < b ? 1 : 0;
    });
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
