import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import question from '../assets/question.png';
import blp from '../assets/blp.png';
import { INFO_URL } from '../constants';

import {
  StyledForm,
  StyledBottom,
  StyledLabel,
  StyledInput,
  StyledP,
  StyledText,
  InputContainer,
  Title,
  StyleAll,
  LoginButton,
  Stylecontainer,
  Stylephoto,
  Styleques,
} from './Login.style';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      usernameError: '',
      passwordError: '',
      isErrorEmail: false,
      isErrorPassword: false,
    };
  }

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
      EmailError: '',
      passwordError: '',
      isErrorEmail: false,
      isErrorPassword: false,
    };
    if (this.state.email < 1) {
      isError = true;
      errors.isErrorEmail = true;
      errors.EmailError = 'Please enter your email.';
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
      <React.Fragment>
        <StyleAll>
          <Stylecontainer>
            <Stylephoto src={blp} alt="photo" />
            <Link href={INFO_URL}>
              <Styleques src={question} alt="info" />
            </Link>
          </Stylecontainer>
          <Title>LOGIN</Title>
          <StyledForm>
            <InputContainer>
              <StyledLabel> Email: </StyledLabel>
              <StyledInput
                StyleError={this.state.isErrorEmail}
                {...this.props}
                type="text"
                name="email"
                errorText={this.state.EmailError}
                value={this.state.email}
                onChange={e =>
                  this.setState({
                    email: e.target.value,
                  })
                }
              />
            </InputContainer>

            <InputContainer>
              <StyledLabel> Password: </StyledLabel>
              <StyledInput
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
            </InputContainer>
          </StyledForm>
          <StyledBottom>
            <LoginButton onClick={this.login}>LOGIN</LoginButton>
          </StyledBottom>
          <StyledP>
            <StyledText>Forget Your Password? </StyledText>
          </StyledP>
        </StyleAll>
      </React.Fragment>
    );
  }
}

export default Login;
