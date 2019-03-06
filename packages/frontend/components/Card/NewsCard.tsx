import React from 'react';
import styled from '../../lib/styled-components';
import { Typography } from '../Typography';
import { MONO_FAMILY } from '../shared';

const StyledNewsCard = styled.div<{ haveImage: boolean }>`
  border: 1px solid #707070;
  height: 100%;
  width: 100%;
  display: flex;
  border-radius: 44px;
  flex-direction: column;
  ${p => (!p.haveImage ? 'border: 1px solid #707070;' : '')}
  .img {
    border-bottom: 1px solid #707070;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    .heading {
      margin-bottom: 4px;
    }
    .infos {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export interface INewsCardProps {
  heading: string;
  image?: string;
  tags: string[];
}

export const NewsCard: React.FC<INewsCardProps> = ({
  heading,
  image,
  tags,
  ...rest
}) => {
  return (
    <StyledNewsCard haveImage={Boolean(image)} {...rest}>
      {image && (
        <div className="img">
          <img src={image} alt="something" />
        </div>
      )}
      <div className="information">
        <div className="heading">
          <Typography
            as="a"
            cursor="pointer"
            fontWeight={image ? 500 : 400}
            variant="h3"
            m="0"
            p="0"
          >
            {heading}
          </Typography>
        </div>
        <div className="infos">
          <div className="read-time">
            <Typography as="div" fontSize="20px">
              3 min
            </Typography>
          </div>
          <div className="tags">
            {/* eslint-disable react/no-array-index-key */
            tags.map((tag, index) => (
              <Typography
                key={`${heading}-${tag}-${index}`}
                color="blue"
                fontSize="20px"
                fontFamily={MONO_FAMILY}
                fontWeight="bold"
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
        </div>
      </div>
    </StyledNewsCard>
  );
};
