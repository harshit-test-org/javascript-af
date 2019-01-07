import Head from 'next/head';

interface Props {
  title?: string;
}

const Meta: React.SFC<Props> = props => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/logo.png" />
    <title>{props.title || 'JavaScript-AF'}</title>
  </Head>
);

export { Meta };
