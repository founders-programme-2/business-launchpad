import React, { Component } from 'react';
import Button from './CBtn.style';

class CBtn extends Component {
  state = {
    email: '',
    password: '',
    text: '',
    path: '',
    confirmPassword: '',
  };

  login = () => {
    const { email, password } = this.state;
    const { history } = this.props;
    const inputs = {
      email,
      password,
    };
  };

  signup = () => {
    const { email, password, confirmPassword } = this.state;
    const { history } = this.props;
    const inputs = {
      email,
      password,
      confirmPassword,
    };
  };

  render() {
    const { text, path } = this.state;
    return (
      <Button onClick={path} type="button">
        {text}
      </Button>
    );
  }
}

export default CBtn;
