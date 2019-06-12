import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

const Error404 = () => {
  return <h1>Hello</h1>;
};

export default Error404;

test('Natural', () => {
  const error404 = renderer
    .create(
      <BrowserRouter>
        {' '}
        <Error404 />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(error404).toMatchSnapshot();
});
