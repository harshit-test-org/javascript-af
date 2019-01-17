import React from 'react';
import { render } from 'react-testing-library';
import { Meta } from '../components/Meta';

test.skip('should display default title', () => {
  const { container } = render(
    <div>
      <Meta />
    </div>
  );
  expect(container.title).not.toBe('');
});

test.skip('should display passed title', () => {
  const { container } = render(
    <div>
      <Meta title={'Codswallop'} />
    </div>,
    { baseElement: document.documentElement }
  );
  expect(container.title).toBe('Codswallop');
});
