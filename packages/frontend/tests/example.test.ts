import { render } from 'react-testing-library';
import ForTest from '../components/ForTest';

test('should pass', () => {
  expect(true).toBe(true);
});

test('should use react-testing-library', () => {
  const { getByText } = render(
    /* tslint:disable */
    // @ts-ignore
    <ForTest />
  );
  expect(getByText(/hello/).innerHTML).toBe('hello jsaf');
});
