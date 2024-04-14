/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World' }),
  };
};
