import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

const Journal = () => {
  return <h1>Hello</h1>;
};

export default Journal;

test('Natural', () => {
  const journal = renderer
    .create(
      <BrowserRouter>
        {' '}
        <Journal />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(journal).toMatchSnapshot();
});
