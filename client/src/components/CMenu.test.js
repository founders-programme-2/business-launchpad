import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

const Cmenu = () => {
  return <h1>Hello</h1>;
};

export default Cmenu;

test('Natural', () => {
  const cmenu = renderer
    .create(
      <BrowserRouter>
        {' '}
        <Cmenu />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(cmenu).toMatchSnapshot();
});
