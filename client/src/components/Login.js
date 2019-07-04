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
    email: '',
    password: '',
  };

  login = () => {
    const { email, password } = this.state;
    const { history } = this.props;
    const dataToSend = {
      email,
      password,
    };

    axios.post(LOGIN_SERVER, dataToSend).then(({ data }) => {
      if (data.success) {
        const { updateToken, updateId, updateName } = this.context;
        updateToken(data.token);
        updateId(data.userID);
        updateName(data.username);

        history.push(JOURNAL_URL);
      } else {
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
