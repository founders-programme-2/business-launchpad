import React, { Component, Fragment } from 'react';
import axios from 'axios';
import ReactRouterPropTypes from 'react-router-prop-types';
import * as S from './Login.style';
import CHeader from './CHeader';
import { LOGIN_URL, REGISTER_SERVER } from '../constants';
import Button from './CBtn';

class signUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  componentDidMount() {
    // axios.get('/checkCookie').then(({ data: { cookie } }) => {
    //   if (cookie) {
    //     const { history } = this.props;
    //     history.push(LOGIN_URL);
    //   }
    // });
  }

  signup = () => {
    const { history } = this.props;
    const { name, email, password, confirmPassword } = this.state;
    const dataToSend = {
      name,
      email,
      password,
      confirmPassword,
    };

    axios
      .post(REGISTER_SERVER, dataToSend)
      .then(({ data }) => {
        if (data.success) {
          console.log('success data: ', data);
          history.push({
            pathname: LOGIN_URL,
          });
        } else {
          console.log('Error data: ', data);
        }
      })
      .catch(err => console.log('Sorry, an error occurred: ', err));
  };

  handleChange = event => {
    const { name } = event.target;
    const { value } = event.target;
    this.setState({
      [name]: value,
    });
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
        <CHeader menu={null} />
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
            <S.Label for="confirmPassword">Confirm Password:</S.Label>
            <S.Input
              StyleError={isErrorPassword}
              {...this.props}
              type="password"
              name="confirmPassword"
              label="password"
              errorText={passwordError}
              value={confirmPassword}
              onChange={this.handleChange}
            />
          </form>

          <Button text="signup" cb={this.signup} />
        </S.Main>
      </Fragment>
    );
  }
}

signUp.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default signUp;
