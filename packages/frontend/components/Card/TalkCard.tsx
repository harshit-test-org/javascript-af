import React from 'react';
import styled from '../../lib/styled-components';
import { Typography } from '../Typography';
import { MONO_FAMILY } from '../shared';
import { PlayIcon } from '../Icons/PlayIcon';
// import { Typography } from '../Typography';
// import { MONO_FAMILY } from '../shared';

const StyledTalksCard = styled.div`
  box-shadow: 1px 4px 9px rgba(0, 0, 0, 0.16);
  border-radius: 44px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .img {
    flex-basis: 74%;
    position: relative;
    max-height: 74%;
    .play_icon {
      position: absolute;
      top: 44%;
      left: 47%;
    }
    img {
      height: 100%;
      width: 100%;
    }
  }
  .information {
    padding: 1rem;
    .title_section {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .avatar {
        display: flex;
        align-items: center;
        img {
          height: 30px;
          width: 30px;
          border-radius: 50%;
          margin-right: 6px;
        }
      }
    }
  }
`;

export interface ITalkCardProps {
  heading: string;
  image: string;
  tags: string[];
  avatar: {
    name: string;
    image: string;
  };
}

export const TalkCard: React.FC<ITalkCardProps> = ({
  image,
  heading,
  tags,
  avatar,
  ...rest
}) => {
  return (
    <StyledTalksCard {...rest}>
      <div className="img">
        <PlayIcon className="play_icon" />
        <img src={image} />
      </div>
      <div className="information">
        <div className="title_section">
          <Typography
            as="a"
            cursor="pointer"
            fontWeight="bold"
            variant="h3"
            m="0"
            p="0"
          >
            {heading}
          </Typography>
          <Typography>45 min</Typography>
        </div>
        <div className="info">
          <div className="tags">
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
