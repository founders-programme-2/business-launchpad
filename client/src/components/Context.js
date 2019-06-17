import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MyContext = React.createContext();
export class MyProvider extends Component {
  state = {
    isLoggedIn: false,
    token: '',
  };


  render() {
    const { children } = this.props;
    return (
      <MyContext.Provider value={{ state: this.state }}>
        {children}
      </MyContext.Provider>
    );
  }
}
MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
