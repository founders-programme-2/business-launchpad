import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

const Info = () => {
  return <h1>Hello</h1>;
};

export default Info;

test('Natural', () => {
  const info = renderer
    .create(
      <BrowserRouter>
        {' '}
        <Info />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(info).toMatchSnapshot();
});
