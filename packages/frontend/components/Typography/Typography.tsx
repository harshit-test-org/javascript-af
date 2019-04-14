import React from 'react';
import {
  fontWeight,
  textAlign,
  space,
  fontSize,
  fontFamily,
  color,
  ColorProps,
  TextAlignProps,
  SpaceProps,
  FontWeightProps,
  FontFamilyProps,
  FontSizeProps,
  lineHeight,
  LineHeightProps,
} from 'styled-system';
import styled from '../../lib/styled-components';
import { SANS_FAMILY } from '../shared';

export interface IStyleMappingKey {
  size: string;
  component: string;
}

export type variants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'default';

export const styleMapping: Record<variants, IStyleMappingKey> = {
  h1: {
    size: '38px',
    component: 'h1',
  },
  h2: {
    size: '34px',
    component: 'h2',
  },
  h3: {
    size: '28px',
    component: 'h3',
  },
  h4: {
    size: '22px',
    component: 'h4',
  },
  h5: {
    size: '18px',
    component: 'h5',
  },
  h6: {
    size: '16px',
    component: 'h6',
  },
  p: {
    size: '20px',
    component: 'p',
  },
  default: {
    size: '16px',
    component: 'span',
  },
};

const StyledTypography = styled.span<
  FontWeightProps &
    TextAlignProps &
    FontFamilyProps &
    SpaceProps &
    ColorProps &
    LineHeightProps &
    FontSizeProps & { cursor?: string; mapping: any }
>`
  font-family: ${SANS_FAMILY};
  ${p => (p.cursor ? `cursor: ${p.cursor};` : '')}
  ${fontWeight}
  ${fontFamily}
  ${textAlign}
  ${space}
  ${fontSize}
  ${color}
  ${lineHeight}
`;

export interface IProps
  extends FontWeightProps,
    TextAlignProps,
    FontFamilyProps,
    FontSizeProps,
    LineHeightProps,
    SpaceProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: variants;
  as?: string;
  color?: string;
  cursor?: string;
}

export const Typography: React.FC<IProps> = ({
  children,
  as,
  variant,
  ...others
}) => {
  const mapping = (variant && styleMapping[variant]) || styleMapping.default;
  return (
    <StyledTypography
      fontSize={mapping.size}
      mapping={mapping}
      as={as || (mapping.component as any)}
      {...others}
    >
      {children}
    </StyledTypography>
  );
};
