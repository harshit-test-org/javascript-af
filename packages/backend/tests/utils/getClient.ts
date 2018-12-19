import ApolloBoost from 'apollo-boost';

const port = process.env.PORT || 4000;
const { graphqlPath } = require('../../src/apolloServer');

const getClient = () => {
  return new ApolloBoost({
    uri: `http://localhost:${port}${graphqlPath}`,
  });
};

export { getClient };
