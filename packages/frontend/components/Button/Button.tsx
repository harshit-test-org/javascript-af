import React from 'react';
import styled from 'styled-components';
import {
  color,
  space,
  ColorProps,
  SpaceProps,
  FontFamilyProps,
  fontFamily,
  BorderRadiusProps,
  borderRadius,
  fontSize,
  FontSizeProps,
  variant,
} from 'styled-system';
import { SANS_FAMILY } from '../shared';

const applyVariant = variant({
  key: 'buttons',
});

const StyledButton = styled.button<
  ColorProps &
    SpaceProps &
    BorderRadiusProps &
    FontSizeProps & { variant: string } & React.AnchorHTMLAttributes<
      HTMLButtonElement | HTMLAnchorElement
    >
>`
  border: 0;
  outline: none;
  cursor: pointer;
  font-family: ${SANS_FAMILY};
  padding: 16px;
  margin: 8px;
  font-size: 1.2rem;
  border-radius: 44px;
  /* for ripple */
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  &:after{
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform .5s, opacity 1s;
  }
  &:active:after{
    transform: scale(0, 0);
    opacity: .3;
    transition: 0s;
  }
  ${color}
  ${space}
  ${fontFamily}
  ${fontSize}
  ${borderRadius}
  ${applyVariant}
`;

interface Props
  extends SpaceProps,
    FontFamilyProps,
    BorderRadiusProps,
    FontSizeProps,
    React.AnchorHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: string;
  as?: any;
}

export const Button: React.FC<Props> = ({
  children,
  variant: v = 'primary',
  ...others
}) => {
  return (
    <StyledButton variant={v} {...others}>
      {children}
    </StyledButton>
  );
};
