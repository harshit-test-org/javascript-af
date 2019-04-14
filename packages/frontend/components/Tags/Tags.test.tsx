import React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Tags } from './Tags';

describe('Tags', () => {
  test('should render', () => {
    const { container } = renderWithTheme(
      <Tags tags={['react', 'performance']} heading="test-tags" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
