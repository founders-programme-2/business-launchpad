import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as S from './Login.style';
import CHeader from './CHeader';
import { loginUser } from '../redux/actions/authActions';
import DASHBOARD_URL from '../constants';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
  };

  componentWillReceiveProps(nextProps) {
    const { history } = this.props;
    if (nextProps.auth.isAuthenticated) {
      history.push({ DASHBOARD_URL }); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

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
    loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

  render() {
    const { errors, email, password } = this.state;

    return (
      <Fragment>
        <CHeader />
        <S.Main>
          <S.H1>Login</S.H1>
          <form>
            <S.Label for="email">Email:</S.Label>
            <S.Input
              type="text"
              name="email"
              value={email}
              onChange={this.onchange}
              error={errors.email}
            />
            <S.Label for="password">Password:</S.Label>
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
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);

// class Login extends Component {
//   state = {
//     email: '',
//     password: '',
//     emailError: '',
//     passwordError: '',
//     isErrorEmail: false,
//     isErrorPassword: false,
//   };

//   componentDidMount() {
//     axios.get('/checkCookie').then(({ data: { cookie } }) => {
//       if (cookie) {
//         const { history } = this.props;
//         history.push(DASHBOARD_URL);
//       }
//     });
//   }

//   validate = () => {
//     let isError = false;
//     const { email, password } = this.state;

//     const errors = {
//       emailError: '',
//       passwordError: '',
//       isErrorEmail: false,
//       isErrorPassword: false,
//     };
//     if (email < 1) {
//       isError = true;
//       errors.isErrorEmail = true;
//       errors.emailError = 'Please enter your email.';
//     }
//     if (password < 1) {
//       isError = true;
//       errors.isErrorPassword = true;
//       errors.passwordError = 'Please enter your password.';
//     }
//     this.setState({
//       // eslint-disable-next-line react/no-access-state-in-setstate
//       ...this.state,
//       ...errors,
//     });
//     return isError;
//   };

//   login = () => {
//     const err = this.validate();
//     const { email, password } = this.state;
//     if (!err) {
//       const { history } = this.props;
//       const inputs = {
//         email,
//         password,
//       };

//       axios.post(LOGIN_URL, inputs).then(({ data }) => {
//         if (data.success) {
//           history.push(DASHBOARD_URL);
//         } else {
//           this.setState({
//             passwordError: 'email or password is incorrect.',
//             isErrorEmail: true,
//             isErrorPassword: true,
//           });
//         }
//       });
//     }
//   };

//   render() {
//     const {
//       isErrorEmail,
//       emailError,
//       email,
//       password,
//       isErrorPassword,
//       passwordError,
//     } = this.state;
//     return (
//       <Fragment>
//         <CHeader />
//         <S.Main>
//           <S.H1>Login</S.H1>
//           <form>
//             <S.Label for="email">Email:</S.Label>
//             <S.Input
//               StyleError={isErrorEmail}
//               {...this.props}
//               type="text"
//               name="email"
//               label="email"
//               errorText={emailError}
//               value={email}
//               onChange={e =>
//                 this.setState({
//                   email: e.target.value,
//                 })
//               }
//             />
//             <S.Label for="password">Password:</S.Label>
//             <S.Input
//               StyleError={isErrorPassword}
//               {...this.props}
//               type="password"
//               name="password"
//               label="password"
//               errorText={passwordError}
//               value={password}
//               onChange={e =>
//                 this.setState({
//                   password: e.target.value,
//                 })
//               }
//             />
//           </form>
//           <S.Button onClick={this.login}>login </S.Button>
//           <S.P>Forget Your Password?</S.P>
//         </S.Main>
//       </Fragment>
//     );
//   }
// }

// Login.propTypes = {
//   history: ReactRouterPropTypes.history.isRequired,
// };
