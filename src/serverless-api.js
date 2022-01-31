// %%VARIABLES%% should be replaced during deployment
exports.hello = async (event) => ({
  statusCode: 200,
  body: JSON.stringify(
    {
      apiVersion: '0.1',
      message: `API v1 - %%COUNTRY%%@%%BRANCH%% at ${process.env.AWS_REGION}`,
      buildDate: '%%BUILDDATE%%',
      input: event,
    },
    null,
    2,
  ),
});
