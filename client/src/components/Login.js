import React, { Component } from 'react';
import axios from 'axios';

import {
  Header,
  StyledP,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledBottom,
  ErrorMessage,
  GButton,
  Button,
  BtnsContainer,
  StyledText,
} from './Login.style';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    const { history } = this.props;
    axios.get('/checkauth').then(({ data }) => {
      if (data.success) {
        history.push('/dashboard');
      } else {
        history.push('/login');
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
      .post('/login', { username, password })
      .then(({ data }) => {
        if (data.success) {
          history.push('/dashboard');
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
        <Header title="Login " />
        <StyledForm>
          <StyledLabel> Email* </StyledLabel>
          <StyledInput
            StyleError={this.state.isErrorUsername}
            {...this.props}
            type="email"
            name="email"
            placeholder="email"
            errorText={this.state.emailError}
            value={this.state.email}
            onChange={e =>
              this.setState({
                username: e.target.value,
              })
            }
          />
          <ErrorMessage>{this.state.usernameError}</ErrorMessage>

          <StyledLabel> Password* </StyledLabel>
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
          <ErrorMessage>{this.state.passwordError}</ErrorMessage>
        </StyledForm>

        <StyledBottom>
          <BtnsContainer>
            <Button />
            <GButton title="LOGIN" onClick={this.login} />
          </BtnsContainer>
          <StyledP>
            <StyledText>Forget your password? </StyledText>
          </StyledP>
        </StyledBottom>
      </React.Fragment>
    );
  }
}

export default Login;
