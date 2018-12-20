import 'cross-fetch/polyfill';
import { getClient } from './utils/getClient';
import { gql } from 'apollo-boost';
import { Query } from '../src/generated/types';

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
  const response = await client.query<Query>({ query });
  expect(response.data.hello).toBe('world');
});
