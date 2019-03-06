import React from 'react';
import styled from '../../lib/styled-components';
import { Typography } from '../Typography';
import { MONO_FAMILY } from '../shared';
import { PlayIcon } from '../Icons/PlayIcon';

const StyledTalksCard = styled.div`
  box-shadow: 1px 4px 9px rgba(0, 0, 0, 0.16);
  border-radius: 44px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .img-container {
    position: relative;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .play-icon {
    position: absolute;
    /* center the play icon */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .information {
    padding: 1rem 2rem;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
  }
  .duration {
    text-align: end;
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .avatar {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }
  .avatar img {
    border-radius: 50%;
    width: 30px;
    margin-right: 6px;
  }
`;

export interface ITalkCardProps {
  heading: string;
  image: string;
  alt?: string;
  tags: string[];
  avatar: {
    name: string;
    image: string;
  };
  featured?: boolean;
}

export const TalkCard: React.FC<ITalkCardProps> = ({
  image,
  alt,
  heading,
  tags,
  avatar,
  featured,
  ...rest
}) => {
  return (
    <StyledTalksCard {...rest}>
      <div className="img-container">
        <img src={image} alt={alt || heading || avatar.name || 'talk image'} />
        <PlayIcon className="play-icon" />
      </div>
      <div className="information">
        <div className="header">
          <Typography
            as="a"
            cursor="pointer"
            fontWeight="bold"
            variant={featured ? 'h3' : 'h4'}
            m="0"
            p="0"
          >
            {heading}
          </Typography>
          <Typography className="duration">45 min</Typography>
        </div>
        <div className="info">
          <div
            className="tags"
            css="
              text-transform: uppercase;
              font-weight: bold;
            "
          >
            {tags.map((tag, index) => (
              <Typography
                key={`talk-${heading}-${tag}-${index}`}
                color="blue"
                fontFamily={MONO_FAMILY}
                variant="default"
                as="a"
                cursor="pointer"
              >
                #{tag}{' '}
              </Typography>
            ))}
          </div>
          <div className="avatar">
            <img src={avatar.image} alt={avatar.name} />
            <Typography variant="h5" as="span">
              {avatar.name}
            </Typography>
          </div>
        </div>
      </div>
    </StyledTalksCard>
  );
};
