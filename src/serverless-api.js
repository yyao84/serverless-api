// Fail lint test
module.exports.hello = async (event) => ({
  statusCode: 200,
  body: JSON.stringify(
    {
      apiVersion: '1.0',
      message: `API v1 - %%COUNTRY%%@%%BRANCH%% at ${process.env.AWS_REGION}`,
      buildDate: '%%BUILDDATE%%',
      input: event,
    },
    null,
    2
  ),
});
