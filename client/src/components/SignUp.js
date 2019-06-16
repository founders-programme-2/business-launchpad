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
  InputContainer,
  Title,
  StyleAll,
  LoginButton,
  Stylecontainer,
  Stylephoto,
  Styleques,
} from './SignUp.style';

class signUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    nameError: '',
    EmailError: '',
    passwordError: '',
    isErrorName: false,
    isErrorEmail: '',
    isErrorPassword: false,
  };

  componentDidMount() {
    axios.get('/checkcookie').then(({ data: { cookie } }) => {
      if (cookie) {
        const { history } = this.props;
        history.push('/login');
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
      axios.post('/signup', inputs).then(({ data }) => {
        if (data.success) {
          history.push({
            pathname: '/login',
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
      <React.Fragment>
        <StyleAll>
          <Stylecontainer>
            <Stylephoto src={blp} alt="photo" />
            <Link href={INFO_URL}>
              <Styleques src={question} alt="info" />
            </Link>
          </Stylecontainer>
          <Title>SIGNUP</Title>
          <StyledForm>
            <InputContainer>
              <StyledLabel> Name: </StyledLabel>
              <StyledInput
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
            </InputContainer>
            <InputContainer>
              <StyledLabel> Email: </StyledLabel>
              <StyledInput
                StyleError={this.state.isErrorEmail}
                {...this.props}
                type="text"
                name="email"
                placeholder="email"
                errorText={this.state.emailError}
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
                placeholder="password"
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
            <LoginButton onClick={this.signUp}>Sign up</LoginButton>
          </StyledBottom>
        </StyleAll>
      </React.Fragment>
    );
  }
}

export default signUp;
