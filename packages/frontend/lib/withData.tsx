import withApollo from 'next-with-apollo';
import ApolloClient, { Operation } from 'apollo-boost';

function createClient({ headers }) {
  return new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    request: async (operation: Operation) => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
  });
}

export default withApollo(createClient);
