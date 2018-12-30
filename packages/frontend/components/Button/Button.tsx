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
} from 'styled-system';
import { SANS_FAMILY } from '../shared';

const StyledButton = styled.button<
  ColorProps & SpaceProps & BorderRadiusProps & FontSizeProps
>`
  border: 0;
  outline: none;
  cursor: pointer;
  ${color}
  ${space}
  ${fontFamily}
  ${fontSize}
  ${borderRadius}
`;

interface Props
  extends React.HTMLAttributes<HTMLButtonElement>,
    SpaceProps,
    FontFamilyProps,
    BorderRadiusProps,
    FontSizeProps {}

export const Button: React.SFC<Props> = ({ p = 3, children, ...others }) => {
  return (
    <StyledButton
      fontFamily={SANS_FAMILY}
      p={p}
      fontSize="1.25rem"
      borderRadius="44px"
      color="#fff"
      bg="#6200EE"
      {...others}
    >
      {children}
    </StyledButton>
  );
};
