import React from 'react';
import { space, SpaceProps } from 'styled-system';
import styled from '../../lib/styled-components';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { MONO_FAMILY } from '../shared';
import { handleAs } from './Card';

interface IStyledNewsCard extends SpaceProps {
  hasImage: boolean;
}

const StyledNewsCard = styled.div<IStyledNewsCard>`
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
    .extract {
      display: flex;
      align-items: center;
    }
    .infos {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const ReadButton = styled(handleAs(Button))`
  display: inline-block;
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
        <div
          className="tags"
          css="
              text-transform: uppercase;
              font-weight: bold;
            "
        >
          {/* eslint-disable react/no-array-index-key */
          tags.map((tag, index) => (
            <Typography
              key={`${heading}-${tag}-${index}`}
              color="blue"
              fontFamily={MONO_FAMILY}
              variant="default"
              as="a"
              cursor="pointer"
            >
              #{tag}{' '}
            </Typography>
          ))
          /* eslint-enable react/no-array-index-key */
          }
        </div>
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
          <ReadButton innerAs="a" m={0} px={4} p={2}>
            Read
          </ReadButton>
          <div className="read-time">
            <Typography as="div" fontSize="20px">
              3 min
            </Typography>
          </div>
        </div>
      </div>
    </StyledNewsCard>
  );
};
