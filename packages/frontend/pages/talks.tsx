import React from 'react';
import styled from '../lib/styled-components';
import { TalkCard } from '../components/Card';
import { Typography } from '../components/Typography';
import { SANS_FAMILY } from '../components/shared';
import { Wrapper } from '../components/Page';

const TalksHero = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-gap: 2rem;
`;

const TalkGrid = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
`;

const TalksPage = () => {
  return (
    <Wrapper>
      <Typography
        as="h1"
        fontWeight="normal"
        fontFamily={SANS_FAMILY}
        fontSize="36px"
        mx={2}
        mb={4}
        mt={0}
      >
        Featured Talks
      </Typography>
      <TalksHero>
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
      </TalksHero>
      <Typography
        as="h2"
        fontWeight="normal"
        fontFamily={SANS_FAMILY}
        fontSize="30px"
        mx={2}
        mt={5}
        mb={4}
      >
        Explore
      </Typography>
      <TalkGrid>
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
      </TalkGrid>
    </Wrapper>
  );
};

export default TalksPage;
