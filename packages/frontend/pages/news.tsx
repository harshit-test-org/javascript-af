import React from 'react';
import { NewsCard } from '../components/Card';
import styled from '../lib/styled-components';

const NewsPageGrid = styled.div`
  @media all and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 7.5rem;
    grid-auto-flow: dense;
  }
  grid-gap: 1rem;
  display: grid;
`;

// * we specify overflow:hidden along with justify-content: space-between
// * else, chrome will overflow the content outside of the container.

const NewsCardGrid = styled(NewsCard)`
  ${p =>
    p.image
      ? `
       grid-row: span 4;
       .information{
         overflow:hidden;
         justify-content: space-between;
         .infos{
           margin-top: 2rem;
         }
       }
      `
      : 'min-height: 7rem;'}
`;

const NewsPage = () => (
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
);

export default NewsPage;
