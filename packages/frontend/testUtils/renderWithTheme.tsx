import React from 'react';
import { render } from 'react-testing-library';
import { ThemeProvider } from '../lib/styled-components';
import { theme } from '../components/shared';

export function renderWithTheme(component: React.ReactElement<any>) {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
}
