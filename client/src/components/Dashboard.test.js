import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

const Dashboard = () => {
  return <h1>Hello</h1>;
};

export default Dashboard;

test('Natural', () => {
  const dashboard = renderer
    .create(
      <BrowserRouter>
        {' '}
        <Dashboard />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(dashboard).toMatchSnapshot();
});
