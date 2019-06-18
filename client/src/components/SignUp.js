import React, { Component, Fragment } from 'react';
import axios from 'axios';

import {
  Form,
  Bottom,
  Label,
  Arialabel,
  Container,
  Title,
  Main,
  LoginButton,
} from './SignUp.style';

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
      if (this.state.name.includes(characters[i])) {
        isError = true;
        errors.isErrorName = true;
        errors.nameError =
          'Name should only contain letters, numbers, underscores and dashes.';
      } else if (this.state.name < 1) {
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
      const inputs = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      };
      axios.post('/account/signUp', inputs).then(({ data }) => {
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
    return (
      <Fragment>
        <Main>
          <Title>Sigup</Title>
          <Form>
            <Container>
              <Label> Name: </Label>
              <Arialabel
                StyleError={this.state.isErrorName}
                {...this.props}
                type="text"
                name="name"
                errorText={this.state.nameError}
                value={this.state.name}
                onChange={e =>
                  this.setState({
                    name: e.target.value,
                  })
                }
              />
            </Container>
            <Container>
              <Label> Email: </Label>
              <Arialabel
                StyleError={this.state.isErrorEmail}
                {...this.props}
                type="text"
                name="email"
                errorText={this.state.emailError}
                value={this.state.email}
                onChange={e =>
                  this.setState({
                    email: e.target.value,
                  })
                }
              />
            </Container>
            <Container>
              <Label> Password: </Label>
              <Arialabel
                StyleError={this.state.isErrorPassword}
                {...this.props}
                type="password"
                name="password"
                errorText={this.state.passwordError}
                value={this.state.password}
                onChange={e =>
                  this.setState({
                    password: e.target.value,
                  })
                }
              />
            </Container>
          </Form>
          <Bottom>
            <LoginButton onClick={this.signUp}>Signup</LoginButton>
          </Bottom>
        </Main>
      </Fragment>
    );
  }
}

export default signUp;
