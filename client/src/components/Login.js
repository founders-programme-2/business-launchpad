import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as S from './Login.style';
import CHeader from './CHeader';
import { loginUser } from '../redux/actions/authActions';
import { DASHBOARD_URL } from '../constants';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
  };

  componentDidMount = () => {
    const { auth, history } = this.props;
    const { isAuthenticated } = auth;
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (isAuthenticated) {
      history.push({ DASHBOARD_URL });
    }
  };

  componentWillReceiveProps = nextProps => {
    const { history } = this.props;
    if (nextProps.auth.isAuthenticated) {
      history.push({ DASHBOARD_URL }); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = e => {
    const { email, password } = this.state;
    const { loginUser } = this.props;
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    loginUser(userData);
  };

  render() {
    const { errors, email, password } = this.state;

    return (
      <Fragment>
        <CHeader />
        <S.Main>
          <S.H1>Login</S.H1>
          <form>
            <S.Label htmlFor="email">Email:</S.Label>
            <S.Input
              type="text"
              name="email"
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <S.Label htmlFor="password">Password:</S.Label>
            <S.Input
              type="password"
              name="password"
              value={password}
              onChange={this.onChange}
              error={errors.password}
            />
          </form>
          <S.Button type="submit" onClick={this.onSubmit}>
            login{' '}
          </S.Button>
          <S.P>Forget Your Password?</S.P>
        </S.Main>
      </Fragment>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  auth: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
