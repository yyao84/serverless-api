// Fail unit test
const handler = require('../serverless-api');

test('Simple Test', () => handler.hello().then((data) => {
  expect(data).toBe('123');
}));
