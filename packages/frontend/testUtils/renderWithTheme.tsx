import React from 'react';
import { ThemeProvider } from '../lib/styled-components';
import { theme } from '../components/shared';
import { render } from 'react-testing-library';

export function renderWithTheme(component: React.ReactElement<any>) {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
}
