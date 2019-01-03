import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '.';

const Wrapper = ({ children }) => {
  console.log('hi');
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Wrapper;
