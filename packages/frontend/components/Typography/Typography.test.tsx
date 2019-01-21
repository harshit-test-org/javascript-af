import React from 'react';
import { Typography, styleMapping } from './Typography';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { theme } from '../shared';

describe('Button', () => {
  test('should render text', () => {
    const { container } = renderWithTheme(<Typography>Hello</Typography>);
    expect(container.firstElementChild.innerHTML).toBe('Hello');
  });

  test('should render default varient if no props are provided', () => {
    const { container } = renderWithTheme(<Typography>Hello</Typography>);
    expect(container.firstChild.nodeName).toBe('SPAN');
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should work with the cursor prop', () => {
    const { container } = renderWithTheme(
      <Typography cursor="pointer">Hello</Typography>
    );
    expect(container.firstChild).toHaveStyleRule('cursor', 'pointer');
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should work with styled system props', () => {
    const { container } = renderWithTheme(
      <Typography color="blue" p="2">
        Test
      </Typography>
    );
    expect(container.firstChild).toHaveStyleRule('color', theme.colors.blue);
    expect(container.firstChild).toHaveStyleRule('padding', '8px');
    expect(container.firstChild).toMatchSnapshot();
  });

  Object.entries(styleMapping).forEach(([mapping, attributes]) => {
    test(`should work with ${mapping} variant`, () => {
      const { container } = renderWithTheme(
        <Typography variant={mapping}>Hello</Typography>
      );
      expect(container.firstChild).toHaveStyleRule(
        'font-size',
        attributes.size
      );
      expect(container.firstChild.nodeName).toBe(
        attributes.component.toUpperCase()
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
