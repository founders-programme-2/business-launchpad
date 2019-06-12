const supertest = require('supertest');

supertest('Check jest', () => {
  expect(1).toBe(1);
});
