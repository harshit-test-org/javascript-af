import React from 'react';
import styled, { css } from 'styled-components';
import { boxShadow, BoxShadowProps, space, SpaceProps } from 'styled-system';
import { theme, MONO_FAMILY } from '../shared';
import { JsafLogoBlack } from '../Icons/JsafLogo';
import { Button } from '../Button';

export const StyledHeader = styled.header<BoxShadowProps & SpaceProps>`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
  padding: 0.5rem 2rem 0 2rem;
  border-top: 4px solid ${theme.colors.purple};
  display: flex;
  justify-content: space-between;
  ${boxShadow}
  ${space}
`;

export const Navlink = styled.a<{ active?: boolean }>`
  padding: 0 0 16px 0;
  cursor: pointer;
  color: black;
  font-family: ${MONO_FAMILY};
  font-size: 24px;
  margin: 0 1rem;
  &:hover {
    font-weight: bold;
  }
  ${props =>
    props.active &&
    css`
      border-bottom: 3px solid ${theme.colors.purple};
      font-weight: 600;
    `}
`;

export interface Props extends BoxShadowProps, SpaceProps {}

export const Header: React.FC<Props> = props => {
  return (
    <StyledHeader {...props}>
      <div>
        <Navlink active>Home</Navlink>
        <Navlink>Repos</Navlink>
        <Navlink>News</Navlink>
        <Navlink>Talks</Navlink>
      </div>
      <div>
        <JsafLogoBlack />
      </div>
      <div
        css={`
          display: flex;
          padding: 0rem 0rem 0.6rem 0rem;
          justify-content: center;
        `}
      >
        <Button
          fontFamily={MONO_FAMILY}
          fontSize={'22px'}
          mx={3}
          my={0}
          variant="icon"
        >
          Login
        </Button>
        <Button fontFamily={MONO_FAMILY} fontSize={'22px'} px={3} py={0} m={0}>
          Sign In
        </Button>
      </div>
    </StyledHeader>
  );
};
