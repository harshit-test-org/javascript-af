import React from 'react';
import { render } from 'react-dom';
import { Meta } from '.';

test('should render without crashing', () => {
  const el = document.createElement('div');
  render(<Meta />, el);
});
