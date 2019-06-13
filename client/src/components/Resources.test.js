import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

const Resources = () => {
  return <h1>Hello</h1>;
};

export default Resources;

test('Natural', () => {
  const resources = renderer
    .create(
      <BrowserRouter>
        {' '}
        <Resources />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(resources).toMatchSnapshot();
});
