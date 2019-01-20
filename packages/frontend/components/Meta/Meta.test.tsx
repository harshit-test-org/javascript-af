import React from 'react';
import { render } from 'react-dom';
import { Meta } from '.';

// Since we use next js head to do this which cause side effects
// and cannot be tested very easily in unit test by us
// we cover this in e2e tests
test('should render without crashing', () => {
  const el = document.createElement('div');
  render(<Meta />, el);
});
