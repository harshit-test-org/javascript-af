import React from 'react';
import styled from 'styled-components';
import { Typography } from '../Typography';
import { MONO_FAMILY } from '../shared';

const StyledNewsCard = styled.div`
  border: 1.5px solid #707070;
  height: 100%;
  width: 100%;
  display: flex;
  border-radius: 44px;
  flex-direction: column;
  .img {
    border-bottom: 1.5px solid #707070;
    padding: 1.5px;
    flex-basis: 74%;
    max-height: 74%;
    img {
      height: 100%;
      width: 100%;
      border-radius: 44px;
    }
  }
  .information {
    padding: 1rem;
    flex-basis: 1;
    max-height: auto;
    .heading {
      margin-bottom: 4px;
    }
    .infos {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const NewsCard: React.FC = () => {
  return (
    <StyledNewsCard>
      <div className="img">
        <img
          src="https://res.cloudinary.com/teggnet/image/upload/c_scale,f_auto,q_auto,w_600/v1548588337/esoplan_production/kzyfdwpaudkusftihy7c.png"
          alt="something"
        />
      </div>
      <div className="information">
        <div className="heading">
          <Typography
            as="a"
            cursor="pointer"
            fontWeight="bold"
            variant="h4"
            m="0"
            p="0"
          >
            Next.js 8 is released with suspense support
          </Typography>
        </div>
        <div className="infos">
          <div className="read-time">
            <Typography as="div">3 min</Typography>
          </div>
          <div className="tags">
            <Typography
              color="blue"
              fontFamily={MONO_FAMILY}
              variant="default"
              as="a"
              cursor="pointer"
            >
              #react{' '}
            </Typography>
            <Typography
              color="blue"
              fontFamily={MONO_FAMILY}
              variant="default"
              as="a"
              cursor="pointer"
            >
              #nextjs
            </Typography>
          </div>
        </div>
      </div>
    </StyledNewsCard>
  );
};
