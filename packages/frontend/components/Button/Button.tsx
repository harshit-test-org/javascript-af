import React from 'react';
import styled from '../../lib/styled-components';
import {
  color,
  space,
  ColorProps,
  SpaceProps,
  FontFamilyProps,
  fontFamily,
  fontWeight,
  FontWeightProps,
  BorderRadiusProps,
  borderRadius,
  fontSize,
  FontSizeProps,
  variant,
} from 'styled-system';
import Ink from 'react-ink';
import { SANS_FAMILY } from '../shared';

const applyVariant = variant({
  key: 'buttons',
});

const StyledButton = styled.button<
  ColorProps &
    SpaceProps &
    FontWeightProps &
    BorderRadiusProps &
    FontSizeProps & { variant: string } & React.AnchorHTMLAttributes<
      HTMLButtonElement | HTMLAnchorElement
    >
>`
  position: relative;
  border: 0;
  background: transparent;
  cursor: pointer;
  font-family: ${SANS_FAMILY};
  padding: 16px;
  margin: 8px;
  font-size: 1.2rem;
  border-radius: 44px;
  ${color}
  ${space}
  ${fontFamily}
  ${fontSize}
  ${borderRadius}
  ${applyVariant}
  ${fontWeight}
`;

export interface IButtonProps
  extends SpaceProps,
    FontFamilyProps,
    BorderRadiusProps,
    FontWeightProps,
    FontSizeProps,
    React.AnchorHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: string;
  as?: any;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  variant: v = 'primary',
  ...others
}) => {
  return (
    <StyledButton role="button" variant={v} {...others}>
      {children}
      <Ink background={false} duration={700} />
    </StyledButton>
  );
};
