/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'is-empty';

export const MyContext = React.createContext();
export class MyProvider extends Component {
  state = {
    isAuthenticated: false,
    user: {},
    loading: false,
    // token: '',
    // // for development this should be a static id of a document in your database
    // // until login/authentication automatically starts to save it here
    // _id: '5d0912f508d0f83945e080dd',
    goalData: [],
  };

  updateGoals = goalData => {
    this.setState({ goalData });
  };

  /* ********************************* AUTHENTICATION ************************************ */
  /* AUTHENTICATION REDUCER */
  // authReducer = (initialState, action) => {
  //   switch (action.type) {
  //     case SET_CURRENT_USER:
  //       this.setState({
  //         isAuthenticated: !isEmpty(action.payload),
  //         user: action.payload,
  //       });
  //       break;
  //     case USER_LOADING:
  //       this.setState({
  //         loading: true,
  //       });
  //       break;
  //     default: {
  //       return initialState;
  //     }
  //   }
  // };

  // errorReducer = (initialState, action) => {
  //   switch (action.type) {
  //     case GET_ERRORS:
  //       return action.payload;
  //     default: {
  //       return initialState;
  //     }
  //   }
  // };

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
