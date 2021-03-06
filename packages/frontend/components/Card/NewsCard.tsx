import React from 'react';
import { space, SpaceProps } from 'styled-system';
import { lighten } from 'polished';
import styled from '../../lib/styled-components';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { ClockIcon } from '../Icons/ClockIcon';
import { Tags } from '../Tags';

interface IStyledNewsCard extends SpaceProps {
  hasImage: boolean;
}

const StyledNewsCard = styled.div<IStyledNewsCard>`
  background-color: ${props => props.theme.colors.white};
  box-shadow: 1px 4px 9px rgba(0, 0, 0, 0.16);
  border-radius: 44px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${space};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .information {
    padding: 1rem 2rem;
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    ${p => !p.hasImage && 'grid-template-rows: auto 1fr auto;'}
    height: 100%;
    .read-time {
      height: 100%;
      display: flex;
      align-items: center;
      svg {
        color: ${props => lighten(0.2, props.theme.colors.black)};
      }
    }
    .infos {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export interface INewsCardProps extends SpaceProps {
  heading: string;
  image?: string;
  alt?: string;
  tags: string[];
}

export const NewsCard: React.FC<INewsCardProps> = ({
  heading,
  image,
  alt,
  tags,
  ...rest
}) => {
  return (
    <StyledNewsCard hasImage={Boolean(image)} {...rest}>
      {image && (
        <div className="img">
          <img src={image} alt={alt || heading || 'news image'} />
        </div>
      )}
      <div className="information">
        <Tags tags={tags} heading={heading} />
        <div className="heading">
          <Typography
            cursor="pointer"
            fontWeight={image ? 700 : 500}
            variant={image ? 'h2' : 'h3'}
            mt="2"
            mb="3"
          >
            <a
              href="/"
              css="
                color: inherit;
                text-decoration: none;
              "
            >
              {heading}
            </a>
          </Typography>
        </div>
        <div className="infos">
          <Button as="a" m={0} px={4} p={2}>
            Read
          </Button>
          <div className="read-time">
            <ClockIcon />
            {/* same fontsize as button text */}
            <Typography fontSize="1.2rem" p={0} m={0} ml={1}>
              3 min
            </Typography>
          </div>
        </div>
      </div>
    </StyledNewsCard>
  );
};
