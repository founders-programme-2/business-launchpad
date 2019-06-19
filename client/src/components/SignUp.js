import React, { Component, Fragment } from 'react';
import axios from 'axios';

import * as S from './Login.style';

class signUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
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
        history.push('/account/login');
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
    for (let i = 0; i < characters.length; i++) {
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
      const { name, email, password } = this.state;
      const inputs = {
        name,
        email,
        password,
      };
      axios.post('/account/sign-up', inputs).then(({ data }) => {
        if (data.success) {
          history.push({
            pathname: '/account/login',
            data: this.props.location.data,
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
    } = this.state;
    return (
      <Fragment>
        <S.Main>
          <S.H1>Sign up</S.H1>
          <S.Form>
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
          </S.Form>
          <S.Button onClick={this.signup}>Sign up </S.Button>
        </S.Main>
      </Fragment>
    );
  }
}

export default signUp;
