import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

const Signup = () => {
  return <h1>Hello</h1>;
};

export default Signup;

test('Natural', () => {
  const signup = renderer
    .create(
      <BrowserRouter>
        {' '}
        <Signup />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(signup).toMatchSnapshot();
});
