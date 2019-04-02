import React from 'react';
import { normalize } from 'polished';
import styled, {
  ThemeProvider,
  createGlobalStyle,
} from '../../lib/styled-components';
import theme from '../shared/theme';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Meta } from '../Meta';

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  @media all and (min-width: 1400px) {
    margin: 0 auto;
    max-width: ${props => props.theme.maxWidth};
    width: 100%;
  }
  flex-grow: 1;
  padding: 2rem;
`;

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: ${theme.fontFamily.sans}
  }
  a {
    text-decoration: none;
  }
`;

const Page: React.FC = props => (
  <ThemeProvider theme={theme}>
    <StyledPage {...props}>
      <GlobalStyle />
      <Meta />
      <Header />
      {props.children}
      <Footer />
    </StyledPage>
  </ThemeProvider>
);

export { Page };
