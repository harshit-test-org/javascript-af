import React from 'react';
import styled, { css } from '../../lib/styled-components';
import { boxShadow, BoxShadowProps, space, SpaceProps } from 'styled-system';
import { theme, MONO_FAMILY } from '../shared';
import { JsafLogoBlack } from '../Icons/JsafLogo';
import { Button } from '../Button';

export const StyledHeader = styled.header<BoxShadowProps & SpaceProps>`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
  position: sticky;
  background: ${p => p.theme.colors.white};
  top: 0;
  border-top: 4px solid ${theme.colors.purple};
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr;
  padding-left: 1rem;
  padding-right: 1rem;
  z-index: 1000;
  ${boxShadow}
  ${space}
`;

export const Navlink = styled.a<{ active?: boolean }>`
  cursor: pointer;
  color: black;
  font-family: ${MONO_FAMILY};
  font-size: 24px;
  margin: 0 1rem;
  display: inline-flex;
  align-items: center;
  height: 100%;
  &:hover {
    font-weight: bold;
  }
  ${props =>
    props.active &&
    css`
      box-shadow: ${p => p.theme.colors.purple} 0px -4px 0px inset;
    `}
`;

export interface Props extends BoxShadowProps, SpaceProps {}

export const Header: React.FC<Props> = props => {
  return (
    <StyledHeader {...props}>
      <nav>
        <Navlink active>Home</Navlink>
        <Navlink>Repos</Navlink>
        <Navlink>News</Navlink>
        <Navlink>Talks</Navlink>
      </nav>
      <div
        css={`
          padding: 0.6rem;
        `}
      >
        <div
          css={`
            position: relative;
            left: 37.7777%;
            width: 60px;
          `}
        >
          <JsafLogoBlack />
        </div>
      </div>
      <div
        css={`
          display: flex;
          justify-content: center;
        `}
      >
        <Button
          as="a"
          href="#"
          color="black"
          fontSize={'20px'}
          mx={3}
          my={0}
          variant="icon"
        >
          Sign In
        </Button>
      </div>
    </StyledHeader>
  );
};
