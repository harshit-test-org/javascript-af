import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';
import { ApolloClient } from 'apollo-boost';

class MyApp extends App<{ apollo?: ApolloClient<{}> }> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps: { query?: any } = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
