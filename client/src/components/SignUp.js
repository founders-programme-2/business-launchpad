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
  };

  componentDidMount() {
    const { history } = this.props;
    axios.get('/checkauth').then(({ data }) => {
      if (data.success) {
        history.push('/login');
      } else {
        history.push('/signup');
      }
    });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ user: { ...this.state.user, [name]: value } });
  };

  handleClick = () => {
    const { name, email, password } = this.state.user;
    const { history } = this.props;
    axios
      .post('/signup', { name, email, password })
      .then(({ data }) => {
        if (data.success) {
          history.push('/login');
        } else {
          this.setState({ error: data.error });
        }
      })
      .catch(error => {
        this.setState({ error: error.response.data.error });
      });
  };

  handleSubmitForm = event => {
    event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <StyleAll>
          <Stylecontainer>
            <Link to={INFO_URL}>
              <Styleques src={question} alt="info" />
            </Link>
            <Stylephoto src={blp} alt="photo" />
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
