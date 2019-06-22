import React, { Component, Fragment } from 'react';
import axios from 'axios';
import ReactRouterPropTypes from 'react-router-prop-types';
import * as S from './Login.style';
import { LOGIN_URL, DASHBOARD_URL } from '../constants';
import CHeader from './CHeader';
import Button from './CBtn';

class Login extends Component {
  state = {
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    isErrorEmail: false,
    isErrorPassword: false,
  };

  componentDidMount() {
    axios.get('/checkCookie').then(({ data: { cookie } }) => {
      if (cookie) {
        const { history } = this.props;
        history.push(DASHBOARD_URL);
      }
    });
  }

  validate = () => {
    let isError = false;
    const { email, password } = this.state;

    const errors = {
      emailError: '',
      passwordError: '',
      isErrorEmail: false,
      isErrorPassword: false,
    };
    if (email < 1) {
      isError = true;
      errors.isErrorEmail = true;
      errors.emailError = 'Please enter your email.';
    }
    if (password < 1) {
      isError = true;
      errors.isErrorPassword = true;
      errors.passwordError = 'Please enter your password.';
    }
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      ...this.state,
      ...errors,
    });
    return isError;
  };

  login = () => {
    const err = this.validate();
    const { email, password } = this.state;
    if (!err) {
      const { history } = this.props;
      const inputs = {
        email,
        password,
      };

      axios.post(LOGIN_URL, inputs).then(({ data }) => {
        if (data.success) {
          history.push(DASHBOARD_URL);
        } else {
          this.setState({
            passwordError: 'email or password is incorrect.',
            isErrorEmail: true,
            isErrorPassword: true,
          });
        }
      });
    }
  };

  render() {
    const {
      isErrorEmail,
      emailError,
      email,
      password,
      isErrorPassword,
      passwordError,
    } = this.state;
    return (
      <Fragment>
        <CHeader />
        <S.Main>
          <S.H1>Login</S.H1>
          <form>
            <S.Label for="email">Email:</S.Label>
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
            <S.Label for="password">Password:</S.Label>
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
          </form>
          <Button text="login" path="LOGIN_URL" />
          <S.P>Forget Your Password?</S.P>
        </S.Main>
      </Fragment>
    );
  }
}

Login.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default Login;
