import React from 'react';
import { NewsCard } from '../components/Card';
import styled from '../lib/styled-components';
import { Wrapper } from '../components/Page';

const NewsPageGrid = styled.div`
  @media all and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: dense;
  }
  grid-gap: 1rem;
  display: grid;
`;

const NewsCardGrid = styled(NewsCard)`
  ${p => p.image && `grid-row: span 4;`}
`;

const NewsPage = () => (
  <Wrapper>
    <NewsPageGrid>
      <NewsCardGrid
        heading="Next.js 8 is released with suspense support"
        image="https://res.cloudinary.com/teggnet/image/upload/c_scale,f_auto,q_auto,w_600/v1548588337/esoplan_production/kzyfdwpaudkusftihy7c.png"
        tags={['react', 'testing']}
      />
      <NewsCardGrid
        heading="Server Renderer for React suspense is released"
        tags={['react', 'release']}
      />
      <NewsCardGrid
        heading="Next.js 8 is released with suspense support"
        image="https://res.cloudinary.com/teggnet/image/upload/c_scale,f_auto,q_auto,w_600/v1548588337/esoplan_production/kzyfdwpaudkusftihy7c.png"
        tags={['react', 'testing']}
      />
      <NewsCardGrid
        heading="Server Renderer for React suspense is released"
        tags={['react', 'release']}
      />
      <NewsCardGrid
        heading="Next.js 8 is released with suspense support"
        image="https://res.cloudinary.com/teggnet/image/upload/c_scale,f_auto,q_auto,w_600/v1548588337/esoplan_production/kzyfdwpaudkusftihy7c.png"
        tags={['react', 'testing']}
      />
      <NewsCardGrid
        heading="Server Renderer for React suspense is released"
        tags={['react', 'release']}
      />
      <NewsCardGrid
        heading="Next.js 8 is released with suspense support"
        image="https://res.cloudinary.com/teggnet/image/upload/c_scale,f_auto,q_auto,w_600/v1548588337/esoplan_production/kzyfdwpaudkusftihy7c.png"
        tags={['react', 'testing']}
      />
      <NewsCardGrid
        heading="Server Renderer for React suspense is released"
        tags={['react', 'release']}
      />
      <NewsCardGrid
        heading="Next.js 8 is released with suspense support"
        image="https://res.cloudinary.com/teggnet/image/upload/c_scale,f_auto,q_auto,w_600/v1548588337/esoplan_production/kzyfdwpaudkusftihy7c.png"
        tags={['react', 'testing']}
      />
      <NewsCardGrid
        heading="Server Renderer for React suspense is released"
        tags={['react', 'release']}
      />{' '}
      <NewsCardGrid
        heading="Next.js 8 is released with suspense support"
        image="https://res.cloudinary.com/teggnet/image/upload/c_scale,f_auto,q_auto,w_600/v1548588337/esoplan_production/kzyfdwpaudkusftihy7c.png"
        tags={['react', 'testing']}
      />
      <NewsCardGrid
        heading="Next.js 8 is released with suspense support"
        image="https://res.cloudinary.com/teggnet/image/upload/c_scale,f_auto,q_auto,w_600/v1548588337/esoplan_production/kzyfdwpaudkusftihy7c.png"
        tags={['react', 'testing']}
      />
      <NewsCardGrid
        heading="Server Renderer for React suspense is released"
        tags={['react', 'release']}
      />
      <NewsCardGrid
        heading="Server Renderer for React suspense is released"
        tags={['react', 'release']}
      />
      <NewsCardGrid
        heading="Next.js 8 is released with suspense support"
        image="https://res.cloudinary.com/teggnet/image/upload/c_scale,f_auto,q_auto,w_600/v1548588337/esoplan_production/kzyfdwpaudkusftihy7c.png"
        tags={['react', 'testing']}
      />
      <NewsCardGrid
        heading="Next.js 8 is released with suspense support"
        image="https://res.cloudinary.com/teggnet/image/upload/c_scale,f_auto,q_auto,w_600/v1548588337/esoplan_production/kzyfdwpaudkusftihy7c.png"
        tags={['react', 'testing']}
      />
      <NewsCardGrid
        heading="Next.js 8 is released with suspense support"
        image="https://res.cloudinary.com/teggnet/image/upload/c_scale,f_auto,q_auto,w_600/v1548588337/esoplan_production/kzyfdwpaudkusftihy7c.png"
        tags={['react', 'testing']}
      />
      <NewsCardGrid
        heading="Server Renderer for React suspense is released"
        tags={['react', 'release']}
      />
    </NewsPageGrid>
  </Wrapper>
);

export default NewsPage;
