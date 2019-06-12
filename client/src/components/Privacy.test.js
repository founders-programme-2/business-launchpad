import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

const Privacy = () => {
  return <h1>Hello</h1>;
};

export default Privacy;

test('Natural', () => {
  const privacy = renderer
    .create(
      <BrowserRouter>
        {' '}
        <privacy />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(privacy).toMatchSnapshot();
});
