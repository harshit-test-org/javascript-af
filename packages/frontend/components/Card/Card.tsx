import React from 'react';
import { space, SpaceProps } from 'styled-system';
import styled from '../../lib/styled-components';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { GithubIcon } from '../Icons/GithubIcon';
import { UpVoteIcon } from '../Icons/UpVoteIcon';
import { Tags } from '../Tags';

const StyledCard = styled.div<SpaceProps>`
  background-color: ${props => props.theme.colors.white};
  box-shadow: 1px 4px 9px rgba(0, 0, 0, 0.16);
  border-radius: 44px;
  padding: 1rem 2rem;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  ${space}
`;

export interface IProps extends SpaceProps {
  heading?: string;
  tags?: string[];
  content?: string;
}

export const Paper = StyledCard;

// hack till https://github.com/styled-components/styled-components/issues/2129
export const handleAs = (
  Comp: React.ComponentType<{ as?: string }>
): React.FC<any> => ({ innerAs, ...rest }) => <Comp as={innerAs} {...rest} />;

const ViewButton = styled(handleAs(Button))`
  display: inline-block;
`;

export const Card: React.FC<IProps> = ({
  content = '',
  heading = '',
  tags = [],
}) => {
  return (
    <StyledCard>
      <Tags tags={tags} heading={heading} />
      <Typography variant="h2" mt="3" mb="4">
        <a
          href="/"
          css="
            color: black;
            text-decoration: none;
          "
        >
          {heading}
        </a>
      </Typography>
      <Typography variant="p" lineHeight="1.75rem" mt="0" mb="3">
        {content}
      </Typography>
      <div
        css="
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <ViewButton innerAs="a" m={0} px={4} p={2}>
          View
        </ViewButton>
        <div
          css="
            display: flex;
          "
        >
          <Button variant="icon">
            <UpVoteIcon
              css="
                margin-right: 5px;
              "
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
