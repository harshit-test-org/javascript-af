import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';

function createClient({ headers }) {
  return new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    request: (operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    }) as any,
  });
}

export default withApollo(createClient);
