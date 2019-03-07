import React from 'react';
import { normalize } from 'polished';
import { ThemeProvider, createGlobalStyle } from '../../lib/styled-components';
import { theme } from '.';

const GlobalNormalization = createGlobalStyle`
  ${normalize()}
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const Wrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalNormalization />
        {children}
      </>
    </ThemeProvider>
  );
};

export default Wrapper;
