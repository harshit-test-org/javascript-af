require('ts-node/register');

const server = require('../../src/express').default;
const port = process.env.PORT || 4000;

module.exports = async () => {
  // tslint:disable-next-line
  global['httpServer'] = await server.listen(port);
  return null;
};
