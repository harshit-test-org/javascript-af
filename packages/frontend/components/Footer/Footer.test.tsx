import React from 'react';
import { Footer } from './Footer';
import { renderWithTheme } from '../../testUtils/renderWithTheme';

describe('Footer', () => {
  test('should render', () => {
    const { container } = renderWithTheme(<Footer />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should have link to repo', () => {
    const { getByTitle } = renderWithTheme(<Footer />);
    const githubElement = getByTitle(/github/i).parentElement.parentElement;
    expect(githubElement.tagName).toBe('A');
    expect(githubElement).toHaveAttribute(
      'href',
      'https://github.com/javascript-af/javascript-af'
    );
  });
});
