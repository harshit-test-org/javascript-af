import React from 'react';
import { NewsCard, Card } from '../components/Card';
import styled from '../lib/styled-components';
import { Typography } from '../components/Typography';
import { MONO_FAMILY } from '../components/shared';

const HeroTop = styled.section`
  display: grid;
  grid-gap: 2rem;
  margin: 2rem 0 5rem 0;
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

const RepoHero = styled.div`
  display: grid;
  margin-top: 1rem;
  margin-bottom: 2rem;
  grid-template-rows: 1fr;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

export default () => (
  <>
    <Typography fontFamily={MONO_FAMILY} fontSize="24px" m={2}>
      📰 Latest News
    </Typography>
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
      <NewsCard
        heading="Vue 2.6 has just landed"
        tags={['react', 'suspense']}
      />
    </HeroTop>
    <Typography fontFamily={MONO_FAMILY} fontSize="24px" m={2}>
      🔥 Trending Repos
    </Typography>
    <RepoHero>
      <Card
        tags={['react', 'testing']}
        content="Simple and complete react dom testing utilities that encourage good testing practice"
        heading="react-testing-library"
      />
      <Card
        tags={['graphql', 'server']}
        content="A lightweight 'Ruby on Rails'-like framework for GraphQL"
        heading="yoga"
      />
      <Card
        tags={['react', 'css-in-js']}
        content="CSS-in-JS library designed for high performance style composition"
        heading="emotion"
      />
      <Card
        tags={['graphql', 'resolver-first']}
        content="GraphQL Nexus: Code-First, Type-Safe, GraphQL Schema Construction "
        heading="nexus"
      />
      <Card
        tags={['webcomponents', 'compiler']}
        content="A Web Component compiler for building fast, reusable UI components and Progressive Web Apps 💎 Built by the Ionic Framework team "
        heading="stencil"
      />
      <Card
        tags={['react', 'testing']}
        content="React Native for Web"
        heading="react-native-web"
      />
    </RepoHero>
  </>
);
