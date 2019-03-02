import React from 'react';
import styled from '../lib/styled-components';
import { RepoHeroCard } from '../components/Card';

const RepoHeroGrid = styled.div`
  display: grid;
  margin-top: 1rem;
  margin-bottom: 5rem;
  grid-template-rows: 1fr;
  grid-gap: 1rem;
  grid-template-columns: auto 40% auto;
  @media all and (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    & > :nth-child(2) {
      grid-row: 1 / 2;
      grid-column: 1 / 3;
    }
  }
  @media all and (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    & > :nth-child(2) {
      grid-row: auto;
      grid-column: auto;
    }
  }
`;

const RepoPage = () => {
  return (
    <>
      <RepoHeroGrid>
        <RepoHeroCard
          tags={['jest', 'testing']}
          content="The AIO testing framework"
          heading="jest"
          image="https://res.cloudinary.com/teggnet/image/upload/c_scale,f_auto,q_auto,w_600,h_300,e_blur:300/v1551546409/esoplan_production/dzkql9zetvxns42amf57.png"
        />
        <RepoHeroCard
          tags={['react', 'testing']}
          content="The right way to test your react apps"
          heading="react-testing-library"
          image="https://res.cloudinary.com/teggnet/image/upload/c_scale,f_auto,q_auto,w_600,h_300,e_blur:300/v1550943805/Screenshot_2019-02-23_at_11.12.47_PM.png"
        />
        <RepoHeroCard
          tags={['react', 'testing']}
          content="Easy and Elegent GraphQL client"
          heading="apollo-client"
          image="https://res.cloudinary.com/teggnet/image/upload/c_scale,f_auto,q_auto,w_600,h_300,e_blur:300/v1551547727/esoplan_production/ghwze5gljezaksfoxkfe.png"
        />
      </RepoHeroGrid>
      <div />
    </>
  );
};

export default RepoPage;
