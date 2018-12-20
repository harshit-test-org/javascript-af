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
  const response = await client.query<{ hello: string }>({ query });
  expect(response.data.hello).toBe('world');
});
