import 'cross-fetch/polyfill';
import { getClient } from './utils/getClient';
import { gql } from 'apollo-boost';

const client = getClient();

test('should pass', () => {
  expect(true).toBe(true);
});

test('should query', async () => {
  const query = gql`
    query {
      hello
    }
  `;
  // [Network error]: ServerParseError: Unexpected token < in JSON at position 0
  await client.query({ query });
});
