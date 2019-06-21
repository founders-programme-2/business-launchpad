import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

const Register = () => {
  return <h1>Hello</h1>;
};

export default Register;

test('Natural', () => {
  const register = renderer
    .create(
      <BrowserRouter>
        {' '}
        <Register />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(register).toMatchSnapshot();
});
