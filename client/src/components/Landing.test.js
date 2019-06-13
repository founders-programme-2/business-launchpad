import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

const Landing = () => {
  return <h1>Hello</h1>;
};

export default Landing;

test('Natural', () => {
  const landing = renderer
    .create(
      <BrowserRouter>
        {' '}
        <Landing />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(landing).toMatchSnapshot();
});
