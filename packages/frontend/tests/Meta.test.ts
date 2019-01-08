import { render } from 'react-testing-library';
import React from 'react';
import { Meta } from '../components/Meta';

// TODO: make JSX work

test.skip('should display default title', () => {
  const { container } = render((
    <div>
      <Meta />
    </div>
  ) as React.ReactElement<any>);
  expect(container.title).not.toBe('');
});

test.skip('should display passed title', () => {
  const { container } = render((
    <div>
      <Meta title={'Codswallop'} />
    </div>
  ) as React.ReactElement<any>);
  expect(container.title).toBe('Codswallop');
});
