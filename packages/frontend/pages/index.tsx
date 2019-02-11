import React from 'react';
import { NewsCard } from '../components/Card';
import styled from '../lib/styled-components';
import { TalkAggregateQueryComponent } from '../generated/apolloComponents';

const HeroTop = styled.section`
  display: grid;
  grid-gap: 2rem;
  max-width: 1180px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas: 'featured item1' 'featured item2' 'featured item3';
  & > :nth-child(1) {
    grid-area: featured;
    align-content: end;
  }
  & > :nth-child(2) {
    grid-area: item1;
  }
  & > :nth-child(3) {
    grid-area: item2;
  }
  & > :nth-child(4) {
    grid-area: item3;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 3fr repeat(3, minmax(15vh, 1fr));
    grid-template-areas: 'featured' 'item2' 'item3' 'item1';
  }
`;

export default () => (
  <HeroTop>
    <NewsCard
      heading="Next.js 8 is released with suspense support"
      image="https://res.cloudinary.com/teggnet/image/upload/c_scale,f_auto,q_auto,w_600/v1548588337/esoplan_production/kzyfdwpaudkusftihy7c.png"
      tags={['react', 'testing']}
    />
    <NewsCard
      heading="Server Renderer for React suspense is released"
      tags={['react', 'release']}
    />
    <NewsCard
      heading="React 16.8 is here, the one with the hooks!"
      tags={['vue', 'release']}
    />
    <NewsCard heading="Vue 2.6 has just landed" tags={['react', 'suspense']} />

    {/* temp test, remove this */}
    <TalkAggregateQueryComponent>
      {payload => (
        <>
          <button onClick={payload.refetch}>refetch</button>
          <pre>{JSON.stringify(payload.data, null, 2)}</pre>
        </>
      )}
    </TalkAggregateQueryComponent>
  </HeroTop>
);
