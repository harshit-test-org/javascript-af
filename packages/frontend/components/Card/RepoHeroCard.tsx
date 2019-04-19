import React from 'react';
import { space, SpaceProps } from 'styled-system';
import styled from '../../lib/styled-components';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { GithubIcon } from '../Icons/GithubIcon';
import { UpVoteIcon } from '../Icons/UpVoteIcon';
import { Tags } from '../Tags';

const StyledCard = styled.div<SpaceProps & { image: string }>`
  background-color: ${props => props.theme.colors.white};
  box-shadow: 1px 4px 9px rgba(0, 0, 0, 0.16);
  border-radius: 44px;
  padding: 1rem 2rem;
  display: grid;
  grid-template-rows: auto minmax(5rem, 1fr) auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(to top, rgba(0,0,0,0.4), transparent),
   url('${p => p.image}');
  ${space};
`;

export interface IRepoHeroCardProps extends SpaceProps {
  heading: string;
  tags: string[];
  content: string;
  image: string;
}

export const RepoHeroCard: React.FC<IRepoHeroCardProps> = ({
  content = '',
  heading = '',
  tags = [],
  image,
  ...others
}) => {
  return (
    <StyledCard image={image} {...others}>
      <Typography color="white" variant="h2" mt="3" mb="4">
        <a
          href="/"
          css="
            text-decoration: none;
            color: white;
          "
        >
          {heading}
        </a>
      </Typography>
      <Typography
        css="
          align-self: end;
        "
        color="white"
        variant="p"
        lineHeight="1.75rem"
        mt="0"
        mb="3"
      >
        {content}
      </Typography>
      <div
        css="
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <Tags
          tags={tags}
          heading={heading}
          typographyProps={{ color: 'white' }}
        />
        <div
          css="
            display: flex;
          "
        >
          <Button variant="icon" color="white">
            <UpVoteIcon
              css="
                margin-right: 5px;
              "
            />
            100
          </Button>
          <Button color="white" variant="icon" as="a" m={0} pr={0}>
            <GithubIcon />
          </Button>
        </div>
      </div>
    </StyledCard>
  );
};
