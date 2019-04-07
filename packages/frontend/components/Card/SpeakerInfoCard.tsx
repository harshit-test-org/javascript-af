import React from 'react';
import { GithubIcon } from '../Icons/GithubIcon';
import { Button } from '../Button';
import styled from '../../lib/styled-components';
import { Typography } from '../Typography';
import { TwitterIcon } from '../Icons/TwitterIcon';

const StyledSpeakerInfoCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  .img {
    margin-right: 1.5rem;
    img {
      width: 200px;
      height: 200px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 0.625rem 1.25rem,
        rgba(0, 0, 0, 0.12) 0px 0.375rem 0.375rem;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    .meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icons {
        display: flex;
        align-items: center;
      }
    }
    p {
      word-break: break-word;
      max-width: 400px;
    }
  }
`;

export interface ISpeakerInfoCard {
  name: string;
  image: string;
  description: string;
}

export const SpeakerInfoCard: React.FC<ISpeakerInfoCard> = ({
  name,
  image,
  description,
}) => {
  return (
    <StyledSpeakerInfoCard>
      <div className="img">
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <div className="name">
          <Typography m={0} variant="h3">
            {name}
          </Typography>
        </div>
        <Typography variant="p">{description}</Typography>
        <div className="meta">
          <Button as="a" variant="primary" m={0} px={3} p={2}>
            More Talks
          </Button>
          <div className="icons">
            <Button m={0} variant="icon" as="a">
              <GithubIcon />
            </Button>
            <Button m={0} variant="icon" as="a">
              <TwitterIcon />
            </Button>
          </div>
        </div>
      </div>
    </StyledSpeakerInfoCard>
  );
};
