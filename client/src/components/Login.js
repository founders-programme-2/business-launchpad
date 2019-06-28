import React, { Component, Fragment } from 'react';
import axios from 'axios';
import ReactRouterPropTypes from 'react-router-prop-types';
import Swal from 'sweetalert2';

import * as S from './Login.style';
import { LOGIN_SERVER, JOURNAL_URL } from '../constants';
import CHeader from './CHeader';
import Button from './CBtn';
import { MyContext } from './Context';

class Login extends Component {
  state = {
    email: 'oll@gmail.com',
    password: 'pass123',
  };

  componentDidMount() {
    // axios.get('/checkCookie').then(({ data: { cookie } }) => {
    //   if (cookie) {
    //     const { history } = this.props;
    //     history.push(DASHBOARD_URL);
    //   }
    // });
  }

  login = () => {
    const { email, password } = this.state;
    const { history } = this.props;
    const dataToSend = {
      email,
      password,
    };

    axios.post(LOGIN_SERVER, dataToSend).then(({ data }) => {
      if (data.success) {
        // eslint-disable-next-line react/destructuring-assignment
        this.context.updateToken(data.token);
        // eslint-disable-next-line react/destructuring-assignment
        this.context.updateId(data.userID);
        // eslint-disable-next-line react/destructuring-assignment
        this.context.updateName(data.username);
        console.log('context: ', this.context.state);
        history.push(JOURNAL_URL);
      } else {
        console.log('error: ', data);
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: data.message,
        });
      }
    });
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
      emailError,
      email,
      password,
      isErrorPassword,
      passwordError,
    } = this.state;
    return (
      <Fragment>
        <CHeader menu={null} />
        <S.Main>
          <S.H1>Login</S.H1>
          <form>
            <S.Label>
              Email:
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
            </S.Label>
            <S.Label>
              Password:
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
            </S.Label>
          </form>
          <Button text="login" cb={this.login} />
          <S.P>Forget Your Password?</S.P>
        </S.Main>
      </Fragment>
    );
  }
}

Login.contextType = MyContext;

Login.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default Login;
