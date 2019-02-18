import React from 'react';
import styled from '../../lib/styled-components';
import { Typography } from '../Typography';
import { space, SpaceProps } from 'styled-system';
import { MONO_FAMILY } from '../shared';
import { Button } from '../Button';
import { GithubIcon } from '../Icons/GithubIcon';
import { UpVoteIcon } from '../Icons/UpVoteIcon';

const StyledCard = styled.div<SpaceProps>`
  box-shadow: 1px 4px 9px rgba(0, 0, 0, 0.16);
  border-radius: 44px;
  padding: 44px;
  display: grid;
  grid-template-rows:
    auto auto 1fr auto
    ${space};
`;

export interface Props extends SpaceProps {
  heading?: string;
  tags?: string[];
  content?: string;
}

export const Paper = StyledCard;

// hack till https://github.com/styled-components/styled-components/issues/2129
const handleAs = Comp => ({ innerAs, ...rest }) => (
  <Comp as={innerAs} {...rest} />
);

const ViewButton = styled(handleAs(Button))`
  display: inline-block;
`;

export const Card: React.FC<Props> = ({
  content = '',
  heading = '',
  tags = [],
}) => {
  return (
    <StyledCard>
      <div
        css={`
          text-transform: uppercase;
          font-weight: bold;
        `}
      >
        {tags.map((tag, index) => (
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
        ))}
      </div>
      <Typography variant="h2" mt="3" mb="4">
        {heading}
      </Typography>
      <Typography variant="p" lineHeight="1.75rem" mt="0" mb="3">
        {content}
      </Typography>
      <div
        css={`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <ViewButton innerAs="a" m={0} px={4} p={2}>
          View
        </ViewButton>
        <div
          css={`
            display: flex;
          `}
        >
          <Button variant="icon">
            <UpVoteIcon
              css={`
                margin-right: 5px;
              `}
            />
            100
          </Button>
          <Button variant="icon" as="a" m={0} pr={0}>
            <GithubIcon />
          </Button>
        </div>
      </div>
    </StyledCard>
  );
};
