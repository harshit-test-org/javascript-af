import React from 'react';
import { ThemeProvider, createGlobalStyle } from '../../lib/styled-components';
import { theme } from '.';
import { normalize } from 'polished';

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
