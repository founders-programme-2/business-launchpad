import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

const CFooter = () => {
  return <h1>Hello</h1>;
};

export default CFooter;

test('Natural', () => {
  const cfooter = renderer
    .create(
      <BrowserRouter>
        {' '}
        <CFooter />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(cfooter).toMatchSnapshot();
});
