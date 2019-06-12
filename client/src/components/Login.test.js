import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

const Login = () => {
  return <h1>Hello</h1>;
};

export default Login;

test('Natural', () => {
  const login = renderer
    .create(
      <BrowserRouter>
        {' '}
        <Login />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(login).toMatchSnapshot();
});
