import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

const CBtn = () => {
  return <h1>Hello</h1>;
};

export default CBtn;

test('Natural', () => {
  const cbtn = renderer
    .create(
      <BrowserRouter>
        {' '}
        <CBtn />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(cbtn).toMatchSnapshot();
});
