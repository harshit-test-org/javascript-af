import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from '.';
import { normalize } from 'polished';

const GlobalNormalization = createGlobalStyle`
  ${normalize()}
  *{
    box-sizing: border-box;
  }
`;

const Wrapper = ({ children }) => {
  console.log('hi');
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
