import React from 'react';
import { Button } from './Button';
import { theme } from '../shared';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { GithubIcon } from '../Icons/GithubIcon';

describe('Button', () => {
  test('should render primary button if no props are passed', () => {
    const { container } = renderWithTheme(<Button>Sign In</Button>);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveTextContent('Sign In');
    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      theme.colors.primary.main
    );
  });
  test('should render outlined variant', () => {
    const { container } = renderWithTheme(
      <Button variant="outlined">Learn More</Button>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveTextContent('Learn More');
    expect(container.firstChild).toHaveStyleRule('background-color', 'white');
    expect(container.firstChild).toHaveStyleRule(
      'border',
      `2px solid ${theme.colors.primary.main}`
    );
  });
  test('should render icon variant', () => {
    const { container } = renderWithTheme(
      <Button variant="icon">
        <GithubIcon />
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
  });
  test('should work with the as prop and other styled-system ones', () => {
    const { container } = renderWithTheme(
      <Button as="a" p={2}>
        Just test
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('padding', '8px');
    expect(container.firstChild.nodeName).toBe('A');
  });
});
