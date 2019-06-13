const request = require('supertest');

const app = require('../app');

describe('Test routes', () => {
  test('Basic route should return a 200 status code', () => {
    return request(app)
      .get('/')
      .expect(200);
  });
});
