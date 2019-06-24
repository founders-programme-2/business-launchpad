import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { registerUser } from '../redux/actions/authActions';
import * as S from './Register.style';
import CHeader from './CHeader';
import { LOGIN_URL } from '../constants';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {},
  };

  componentDidMount = () => {
    const { auth, history } = this.props;
    const { isAuthenticated } = auth;
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (isAuthenticated) {
      history.push('/dashboard');
    }
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Register user
  onSubmit = e => {
    const { history, registerUser } = this.props;
    const { name, email, password, password2 } = this.state;
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
      password2,
    };

    registerUser(newUser, history);
  };

  render() {
    const { name, email, password, password2, errors } = this.state;

    return (
      <Fragment>
        <CHeader />
        <S.Main>
          <S.H1>Sign up</S.H1>
          <form onSubmit={this.onSubmit}>
            <S.Label htlmFor="name"> Name: </S.Label>
            <S.Input
              name="name"
              onChange={this.onChange}
              value={name}
              error={errors.name}
              type="text"
            />
            <S.Label htmlFor="email">Email:</S.Label>
            <S.Input
              onChange={this.onChange}
              value={email}
              error={errors.email}
              name="email"
              type="email"
            />
            <S.Label htmlFor="password">Password:</S.Label>
            <S.Input
              onChange={this.onChange}
              value={password}
              error={errors.password}
              name="password"
              type="password"
            />
            <S.Label htmlFor="confirmPassword">Confirm Password:</S.Label>
            <S.Input
              onChange={this.onChange}
              value={password2}
              error={errors.password}
              name="password2"
              type="password"
            />
            <S.Button type="submit">Sign up</S.Button>
          </form>

          <S.P>
            Already have an account?
            <br />
            <Link to={LOGIN_URL}>Log in</Link>
          </S.P>
        </S.Main>
      </Fragment>
    );
  }
}

Register.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  registerUser: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  auth: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object.isRequired,
};

// mapStateToProps allows us to get our state from Redux and map it to props which we can use inside components.
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

// connect() - connects our components to our Redux store
// mapStateToProps allows us to 'capture' the data from our state and map it to props that we can use
// { registerUser } is the props we want to pull from the store
// withRouter(Register) allow us to redirect within an action use react router dom

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
