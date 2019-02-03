import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../shared/theme';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Meta } from '../Meta';

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  flex-grow: 1;
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

const Page: React.FC<{}> = props => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <GlobalStyle />
      <Meta />
      <Header />
      <Inner>{props.children}</Inner>
      <Footer />
    </StyledPage>
  </ThemeProvider>
);

export { Page };
