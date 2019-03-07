import React from 'react';
import { boxShadow, BoxShadowProps, space, SpaceProps } from 'styled-system';
import { withRouter, WithRouterProps } from 'next/router';
import styled, { css } from '../../lib/styled-components';
import { Button } from '../Button';
import { JsafLogoBlack } from '../Icons/JsafLogo';
import { MONO_FAMILY, theme } from '../shared';

export const StyledHeader = styled.header<BoxShadowProps & SpaceProps>`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
  position: sticky;
  background: ${p => p.theme.colors.white};
  top: 0;
  border-top: 4px solid ${theme.colors.primary.light};
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr;
  padding-left: 1rem;
  padding-right: 1rem;
  z-index: 1000;
  ${boxShadow}
  ${space}
`;

export const StyledLink = styled.a<{ active?: boolean }>`
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
      box-shadow: ${p => p.theme.colors.primary.main} 0px -4px 0px inset;
    `}
`;

const ActiveLink = withRouter(
  class ActiveLinkComp extends React.Component<
    WithRouterProps & { href: string }
  > {
    componentDidMount() {
      this.props.router!.prefetch(this.props.href);
    }

    handleClick: React.EventHandler<React.MouseEvent> = e => {
      e.preventDefault();
      this.props.router!.push(this.props.href);
    };

    render() {
      const { href, router, children } = this.props;
      const isActive = router!.pathname === href;
      return (
        <StyledLink href={href} onClick={this.handleClick} active={isActive}>
          {children}
        </StyledLink>
      );
    }
  }
);

export interface Props extends BoxShadowProps, SpaceProps {}

export const Header: React.FC<Props> = props => {
  return (
    <StyledHeader {...props}>
      <nav>
        <ActiveLink href="/">Home</ActiveLink>
        <ActiveLink href="/repos">Repos</ActiveLink>
        <ActiveLink href="/news">News</ActiveLink>
        <ActiveLink href="/talks">Talks</ActiveLink>
      </nav>
      <div
        css="
          padding: 0.6rem;
        "
      >
        <div
          css="
            position: relative;
            left: 37.7777%;
            transform: translateX(37.7777%);
            width: 60px;
          "
        >
          <JsafLogoBlack />
        </div>
      </div>
      <div
        css="
          display: flex;
          justify-content: center;
        "
      >
        <Button
          as="a"
          href="#"
          color="black"
          fontSize="20px"
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
