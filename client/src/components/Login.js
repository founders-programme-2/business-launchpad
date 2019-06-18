import React, { Component, Fragment } from 'react';
import axios from 'axios';

import {
  Form,
  Bottom,
  Label,
  Arialabel,
  Styledp,
  Container,
  Title,
  Main,
  Loginbutton,
} from './Login.style';

class Login extends Component {
  state = {
    email: '',
    password: '',
    emaiError: '',
    passwordError: '',
    isErrorEmail: false,
    isErrorPassword: false,
  };

  componentDidMount() {
    axios.get('/checkcookies').then(({ data: { cookie } }) => {
      if (cookie) {
        const { history } = this.props;
        history.push('/dashboard');
      }
    });
  }

  validate = () => {
    let isError = false;
    this.setState({ isErrorEmail: false, isErrorPassword: false });

    const errors = {
      emailError: '',
      passwordError: '',
      isErrorEmail: false,
      isErrorPassword: false,
    };
    if (this.state.email < 1) {
      isError = true;
      errors.isErrorEmail = true;
      errors.emailError = 'Please enter your email.';
    }
    if (this.state.password < 1) {
      isError = true;
      errors.isErrorPassword = true;
      errors.passwordError = 'Please enter your password.';
    }
    this.setState({
      ...this.state,
      ...errors,
    });
    return isError;
  };

  login = () => {
    const err = this.validate();
    if (!err) {
      const { history } = this.props;
      const inputs = {
        email: this.state.email,
        password: this.state.password,
      };
      const detailsInputs = this.props.location.data;
      axios.post('/login', inputs).then(({ data }) => {
        if (data.success) {
          if (detailsInputs) {
            axios.post('/dashboard', detailsInputs).then(addData => {
              if (addData.data.success) {
                history.push('/dashboard');
              } else {
                history.push('/login');
              }
            });
          } else {
            history.push('/dashboard');
          }
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
    return (
      <Fragment>
        <Main>
          <Title>login</Title>
          <Form>
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
            <Loginbutton onClick={this.login}>login </Loginbutton>
          </Bottom>
          <Styledp>Forget Your Password?</Styledp>
        </Main>
      </Fragment>
    );
  }
}

export default Login;
