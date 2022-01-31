const handler = require('../serverless-api');

test('Simple Test', () => handler.hello().then((data) => {
  expect(data).toBeDefined();
}));
