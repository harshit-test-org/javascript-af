import React from 'react';
import styled from '../lib/styled-components';
import { Typography } from '../components/Typography';
import { TalkCard } from '../components/Card';

const MainPageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  grid-gap: 1rem;
`;

const TalkPage = () => {
  return (
    <MainPageGrid>
      <div>
        <Typography mt={0} variant="h1" fontWeight="normal">
          We all started somewhere
        </Typography>
        <div
          css="
          position: relative;
          height: 0px;
          padding-top: 25px;
          padding-bottom: 56.25%;
        "
        >
          <iframe
            css="
              position: absolute;
              top: 0px;
              left: 0px;
            "
            title="We all started somewhere"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/maykR0aVsj8?autoplay=1"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <div
        css="
        padding-top: 5rem;
      "
      >
        <TalkCard
          heading="This is a Talk About You!"
          image="https://res.cloudinary.com/teggnet/image/upload/c_scale,f_auto,q_auto,w_600/v1548865147/esoplan_production/ab5h8vakgjumpbwjznrd.png"
          tags={['react', 'personal']}
          avatar={{
            name: 'Jani Evakallio',
            image:
              'https://pbs.twimg.com/profile_images/1102813107284557825/7g64jjGy_400x400.jpg',
          }}
        />
      </div>
    </MainPageGrid>
  );
};

export default TalkPage;
