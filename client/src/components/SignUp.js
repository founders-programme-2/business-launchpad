import React, { Component, Fragment } from 'react';
import axios from 'axios';
import ReactRouterPropTypes from 'react-router-prop-types';
import Swal from 'sweetalert2';

import * as S from './SignUp.style';
import CHeader from './CHeader';
import { LOGIN_URL, REGISTER_SERVER } from '../constants';
class signUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  signup = () => {
    const { history } = this.props;
    const { name, email, password, confirmPassword } = this.state;
    const dataToSend = {
      name,
      email,
      password,
      confirmPassword,
    };

    axios
      .post(REGISTER_SERVER, dataToSend)
      .then(({ data }) => {
        if (data.success) {
          Swal.fire({
            type: 'success',
            title: 'Success!',
            text: 'Profile created - please log in',
          });
          history.push({
            pathname: LOGIN_URL,
          });
        } else {
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: data.message,
          });
        }
      })
      // eslint-disable-next-line no-console
      .catch(err => console.log('Sorry, an error occurred: ', err));
  };

  handleChange = event => {
    const { name } = event.target;
    const { value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      isErrorEmail,
      isErrorName,
      isErrorPassword,
      nameError,
      name,
      emailError,
      email,
      passwordError,
      password,
      confirmPassword,
    } = this.state;
    return (
      <Fragment>
        <CHeader menu={null} />
        <S.Main>
          <S.H1>Sign up</S.H1>
          <form>
            <S.Label>
              {' '}
              Name:
              <S.Input
                StyleError={isErrorName}
                {...this.props}
                type="text"
                name="name"
                label="name"
                errorText={nameError}
                value={name}
                onChange={this.handleChange}
              />
            </S.Label>
            <S.Label>
              {' '}
              Email:
              <S.Input
                StyleError={isErrorEmail}
                {...this.props}
                type="text"
                name="email"
                label="email"
                errorText={emailError}
                value={email}
                onChange={this.handleChange}
              />
            </S.Label>
            <S.Label>
              {' '}
              Password:
              <S.Input
                StyleError={isErrorPassword}
                {...this.props}
                type="password"
                name="password"
                label="password"
                errorText={passwordError}
                value={password}
                onChange={this.handleChange}
              />
            </S.Label>
            <S.Label>
              Confirm Password:
              <S.Input
                StyleError={isErrorPassword}
                {...this.props}
                type="password"
                name="confirmPassword"
                label="password"
                errorText={passwordError}
                value={confirmPassword}
                onChange={this.handleChange}
              />
            </S.Label>
          </form>

          <S.ButtonSignUp text="sign up" cb={this.signup} />
        </S.Main>
      </Fragment>
    );
  }
}

signUp.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default signUp;
