import React from 'react';
import { ThemeProvider } from '../../lib/styled-components';
import theme from './theme';
import { GlobalStyle } from '../Page';

const Wrapper: React.FC = props => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {props.children}
    </>
  </ThemeProvider>
);

export default Wrapper;
