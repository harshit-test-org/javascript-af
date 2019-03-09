import React from 'react';
import Head from 'next/head';

interface IProps {
  title?: string;
}

const Meta: React.FC<IProps> = props => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/logo.png" />
    <title>{props.title || 'JavaScript-AF'}</title>
  </Head>
);

export { Meta };
