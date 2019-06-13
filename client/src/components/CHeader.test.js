import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

const CHeader = () => {
  return <h1>Hello</h1>;
};

export default CHeader;

test('Natural', () => {
  const cheader = renderer
    .create(
      <BrowserRouter>
        {' '}
        <CHeader />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(cheader).toMatchSnapshot();
});
