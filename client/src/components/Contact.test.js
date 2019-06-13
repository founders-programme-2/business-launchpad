import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

const Contact = () => {
  return <h1>Hello</h1>;
};

export default Contact;

test('Natural', () => {
  const contact = renderer
    .create(
      <BrowserRouter>
        {' '}
        <Contact />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(contact).toMatchSnapshot();
});
