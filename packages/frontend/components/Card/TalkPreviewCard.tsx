import React from 'react';
import { ITalkCardProps } from './TalkCard';
import styled from '../../lib/styled-components';
import { Typography } from '../Typography';
import { MONO_FAMILY } from '../shared';

const StyledTalkPreviewCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  .img {
    width: 300px;
    img {
      width: 100%;
      height: 100%;
      border-top-left-radius: 10%;
      border-top-right-radius: 10%;
    }
  }
`;

export const TalkPreviewCard: React.FC<ITalkCardProps> = props => {
  return (
    <StyledTalkPreviewCard>
      <div className="img">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="info">
        <div className="tags">
          {/* eslint-disable react/no-array-index-key */
          props.tags.map((tag, index) => (
            <Typography
              key={`talk-side-${props.heading}-${tag}-${index}`}
              color="blue"
              fontFamily={MONO_FAMILY}
              variant="default"
              fontSize="1rem"
              as="a"
              cursor="pointer"
            >
              #{tag.toUpperCase()}{' '}
            </Typography>
          ))
          /* eslint-enable react/no-array-index-key */
          }
        </div>
        <Typography
          variant="h5"
          fontSize="1.2rem"
          fontWeight={500}
          m={0}
          lineHeight="1.5rem"
        >
          {props.heading}
        </Typography>
        <Typography className="duration">45 min</Typography>
      </div>
    </StyledTalkPreviewCard>
  );
};
