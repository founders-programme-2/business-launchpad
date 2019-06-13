import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

const CAccordion = () => {
  return <h1>Hello</h1>;
};

export default CAccordion;

test('Natural', () => {
  const caccordion = renderer
    .create(
      <BrowserRouter>
        {' '}
        <CAccordion />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(caccordion).toMatchSnapshot();
});
