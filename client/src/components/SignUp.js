import React, { Component, Fragment } from 'react';
import axios from 'axios';
import ReactRouterPropTypes from 'react-router-prop-types';
import * as S from './Login.style';
import CHeader from './CHeader';
import { LOGIN_URL, SIGNUP_URL } from '../constants';

class signUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    nameError: '',
    emailError: '',
    passwordError: '',
    isErrorName: false,
    isErrorEmail: '',
    isErrorPassword: false,
  };

  componentDidMount() {
    axios.get('/checkCookie').then(({ data: { cookie } }) => {
      if (cookie) {
        const { history } = this.props;
        history.push(LOGIN_URL);
      }
    });
  }

  validate = () => {
    let isError = false;
    this.setState({
      isErrorName: false,
      isErrorEmail: false,
      isErrorPassword: false,
    });
    const name = this.state;
    const characters = [
      '+',
      '/',
      '*',
      '$',
      '#',
      '@',
      '!',
      '^',
      '&',
      '(',
      ')',
      '?',
      '>',
      '<',
      '.',
    ];
    const errors = {
      nameError: '',
      emailError: '',
      passwordError: '',
      isErrorName: false,
      isErrorEmail: false,
      isErrorPassword: false,
    };
    for (let i = 0; i < characters.length; i + 1) {
      if (name.includes(characters[i])) {
        isError = true;
        errors.isErrorName = true;
        errors.nameError =
          'Name should only contain letters, numbers, underscores and dashes.';
      } else if (name < 1) {
        isError = true;
        errors.isErrorName = true;
        errors.nameError = 'Name is required.';
      }
      const { password, confirmPassword } = this.state;
      if (password !== confirmPassword) {
        isError = true;
        errors.isErrorPassword = true;
        errors.passwordError = 'Passwords do not match.';
      } else if (password.length < 6) {
        isError = true;
        errors.isErrorPassword = true;
        errors.passwordError = 'Password needs to be at least 6 characters.';
      }
    }

    this.setState({
      ...this.state,
      ...errors,
    });
    return isError;
  };

  signup = () => {
    const err = this.validate();
    if (!err) {
      const { history } = this.props;
      const { name, email, password, confirmPassword } = this.state;
      const inputs = {
        name,
        email,
        password,
        confirmPassword,
      };

      axios.post(SIGNUP_URL, inputs).then(({ data }) => {
        if (data.success) {
          history.push({
            pathname: 'LOGIN_URL',
          });
        } else {
          this.setState({
            nameError: 'This name already exists.',
            isErrorName: true,
          });
        }
      });
    }
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
        <CHeader />
        <S.Main>
          <S.H1>Sign up</S.H1>
          <form>
            <S.Label for="name"> Name: </S.Label>
            <S.Input
              StyleError={isErrorName}
              {...this.props}
              type="text"
              name="name"
              label="name"
              errorText={nameError}
              value={name}
              onChange={e =>
                this.setState({
                  name: e.target.value,
                })
              }
            />
            <S.Label for="email"> Email: </S.Label>
            <S.Input
              StyleError={isErrorEmail}
              {...this.props}
              type="text"
              name="email"
              label="email"
              errorText={emailError}
              value={email}
              onChange={e =>
                this.setState({
                  email: e.target.value,
                })
              }
            />
            <S.Label for="password"> Password: </S.Label>
            <S.Input
              StyleError={isErrorPassword}
              {...this.props}
              type="password"
              name="password"
              label="password"
              errorText={passwordError}
              value={password}
              onChange={e =>
                this.setState({
                  password: e.target.value,
                })
              }
            />
            <S.Label for="confirmPassword">Confirm Password</S.Label>
            <S.Input
              StyleError={isErrorPassword}
              {...this.props}
              type="password"
              name="confirmPassword"
              label="password"
              errorText={passwordError}
              value={confirmPassword}
              onChange={e =>
                this.setState({
                  name: e.target.value,
                })
              }
            />
          </form>
          <S.Button onClick={this.signup}>Sign up </S.Button>
        </S.Main>
      </Fragment>
    );
  }
}

signUp.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default signUp;
