import React, { Component } from 'react';
import axios from 'axios';

import {
  Header,
  StyledForm,
  StyledBottom,
  StyledLabel,
  StyledInput,
  StyledP,
  StyledText,
  ErrorMessage,
  BtnsContainer,
  StyledSignup,
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
    const { username, password } = this.state.user;
    const { history } = this.props;
    axios
      .post('/signup', { username, password })
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
        <Header title="Sign Up" />
        <StyledForm>
          <StyledLabel> Name* </StyledLabel>
          <StyledInput
            StyleError={this.state.isErrorname}
            {...this.props}
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={e =>
              this.setState({
                username: e.target.value,
              })
            }
          />
          <ErrorMessage>{this.state.nameError}</ErrorMessage>

          <StyledLabel> Email* </StyledLabel>
          <StyledInput
            StyleError={this.state.isErrorUsername}
            {...this.props}
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={e =>
              this.setState({
                username: e.target.value,
              })
            }
          />
          <ErrorMessage>{this.state.emailError}</ErrorMessage>
          <StyledLabel> Password* </StyledLabel>
          <StyledInput
            StyleError={this.state.isErrorPassword}
            {...this.props}
            type="password"
            name="password"
            placeholder="**************"
            value={this.state.password}
            onChange={e =>
              this.setState({
                password: e.target.value,
              })
            }
          />

          <StyledP>
            <StyledText>Been here before? </StyledText>
            <StyledSignup onClick={this.goLogin}> Login</StyledSignup>
          </StyledP>
        </StyledForm>

        <StyledBottom>
          <BtnsContainer>
            <Button />
            <GButton title="SIGN UP" onClick={this.signup} />
          </BtnsContainer>
          <Footer />
        </StyledBottom>
      </React.Fragment>
    );
  }
}

export default signUp;
