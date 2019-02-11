import { gql } from 'apollo-boost';

export const talkAggregateQuery = gql`
  query talkAggregateQuery {
    talkConnection {
      aggregate {
        count
      }
    }
  }
`;
