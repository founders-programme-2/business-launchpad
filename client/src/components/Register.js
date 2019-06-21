import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
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

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { name, email, password, password2, errors } = this.state;
    const newUser = {
      name,
      email,
      password,
      password2,
    };
    console.log(newUser);
    return (
      <Fragment>
        <CHeader />
        <S.Main>
          <S.H1>Sign up</S.H1>
          <form onSubmit={this.onSubmit}>
            <S.Label for="name"> Name: </S.Label>
            <S.Input
              name="name"
              onChange={this.onChange}
              value={name}
              error={errors.name}
              type="text"
            />
            <S.Label for="email">Email:</S.Label>
            <S.Input
              onChange={this.onChange}
              value={email}
              error={errors.email}
              name="email"
              type="email"
            />
            <S.Label for="password">Password:</S.Label>
            <S.Input
              onChange={this.onChange}
              value={password}
              error={errors.password}
              name="password"
              type="password"
            />
            <S.Label for="confirmPassword">Confirm Password:</S.Label>
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

export default Register;

// class Register extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     nameError: '',
//     emailError: '',
//     passwordError: '',
//   };

//   // componentDidMount() {
//   //   axios.get('/checkCookie').then(({ data: { cookie } }) => {
//   //     if (cookie) {
//   //       const { history } = this.props;
//   //       history.push(LOGIN_URL);
//   //     }
//   //   });
//   // }

//   // validate = () => {
//   //   const {
//   //     name,
//   //     password,
//   //     confirmPassword,
//   //     nameError,
//   //     emailError,
//   //     passwordError,
//   //   } = this.state;
//   //   let err = false;
//   //   // List of characters to avoid in name
//   //   const characters = [
//   //     '+',
//   //     '/',
//   //     '*',
//   //     '$',
//   //     '#',
//   //     '@',
//   //     '!',
//   //     '^',
//   //     '&',
//   //     '(',
//   //     ')',
//   //     '?',
//   //     '>',
//   //     '<',
//   //     '.',
//   //   ];
//   //   for (let i = 0; i < characters.length; i + 1) {
//   //     if (name.includes(characters[i])) {
//   //       this.setState({
//   //         nameError:
//   //           'Name should only contain letters, numbers, underscores and dashes.',
//   //       });
//   //       err = true;
//   //     } else if (name < 1) {
//   //       this.setState({
//   //         nameError: 'Please provide a name.',
//   //       });
//   //       err = true;
//   //     }
//   //     if (password !== confirmPassword) {
//   //       this.setState({
//   //         passwordError: 'Passwords do not match.',
//   //       });
//   //       err = true;
//   //     } else if (password.length < 6 && password.length > 30) {
//   //       this.setState({
//   //         passwordError: 'Password needs to be between 6 to 30 characters.',
//   //       });
//   //       err = true;
//   //     }
//   //   }

//   //   if (nameError || passwordError || emailError) {
//   //     // eslint-disable-next-line no-alert
//   //     alert(`Error: ${nameError || passwordError || emailError}`);
//   //   }

//   //   return err;
//   // };

//   register = () => {
//     //const err = this.validate();
//     // if (!err) {
//       const { history } = this.props;
//       const { name, email, password, confirmPassword } = this.state;
//       const inputs = {
//         name,
//         email,
//         password,
//         confirmPassword,
//       };

//       axios.post(REGISTER_URL, inputs).then(({ data }) => {
//         if (data.success) {
//           history.push({
//             pathname: 'LOGIN_URL',
//           });
//         } else {
//           this.setState({
//             nameError: 'This name already exists.',
//             isErrorName: true,
//           });
//         }
//       });
//     }
//   // };

//   render() {
//     const {
//       isErrorEmail,
//       isErrorName,
//       isErrorPassword,
//       nameError,
//       name,
//       emailError,
//       email,
//       passwordError,
//       password,
//       confirmPassword,
//     } = this.state;
//     return (
//       <Fragment>
//         <CHeader />
//         <S.Main>
//           <S.H1>Sign up</S.H1>
//           <form>
//             <S.Label for="name"> Name: </S.Label>
//             <S.Input
//               StyleError={isErrorName}
//               type="text"
//               name="name"
//               label="name"
//               errorText={nameError}
//               value={name}
//               onChange={e =>
//                 this.setState({
//                   name: e.target.value,
//                 })
//               }
//             />
//             <S.Label for="email"> Email: </S.Label>
//             <S.Input
//               StyleError={isErrorEmail}
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
//             <S.Label for="password"> Password: </S.Label>
//             <S.Input
//               StyleError={isErrorPassword}
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
//             <S.Label for="confirmPassword">Confirm Password</S.Label>
//             <S.Input
//               StyleError={isErrorPassword}
//               type="password"
//               name="confirmPassword"
//               label="confirmPassword"
//               errorText={passwordError}
//               value={confirmPassword}
//               onChange={e =>
//                 this.setState({
//                   confirmPassword: e.target.value,
//                 })
//               }
//             />
//           </form>
//           <S.Button onClick={this.register}>Sign up</S.Button>
//         </S.Main>
//       </Fragment>
//     );
//   }
// }

// Register.propTypes = {
//   history: ReactRouterPropTypes.history.isRequired,
// };
