import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../shared/theme';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Meta } from '../Meta';

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
`;

interface Props {
  title?: string;
}

const Page: React.FC<Props> = props => (
  // @ts-ignore
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      <Meta />
      <Header />
      <Inner>{props.children}</Inner>
      <Footer />
    </div>
  </ThemeProvider>
);

export { Page };
