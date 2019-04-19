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
  z-index: -100;
  background-color: ${props => props.theme.colors.offWhite};
  background-image: ${props => {
    const color = props.theme.colors.primary.lightest;
    const fillColor = color.substring(1);
    return `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23${fillColor}' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`;
  }};
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
    font-family: ${theme.fontFamily.sans};
    background-color: ${props => props.theme.colors.offWhite};
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
