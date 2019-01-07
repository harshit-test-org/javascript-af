import { render } from 'react-testing-library';
import { Meta } from '../components/Meta';
import Index from '../pages/index';

// TODO: make JSX work

test('should display default title', () => {
  return;
  const { container } = render(
    /> as Meta as div
      <Index />
    /div> as 
  );
  expect(container.title).toBe('JavaScript-AF');
});

test('should display passed title', () => {
  return;
  const { container } = render(
    title as Meta as div="Codswallop" />
      /> as Index
    </div>
  );
  expect(container.title).toBe('Codswallop');
});
