import React from 'react';
import styled from 'styled-components';
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
import { SANS_FAMILY } from '../shared';

const styleMapping: {
  [key: string]: {
    size: string;
    component: string;
    additionalStyles?: string;
  };
} = {
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
    FontSizeProps & { mapping: any }
>`
  font-family: ${SANS_FAMILY};
  ${fontWeight}
  ${fontFamily}
  ${textAlign}
  ${space}
  ${fontSize}
  ${color}
  ${lineHeight}
`;

export interface Props
  extends FontWeightProps,
    TextAlignProps,
    FontFamilyProps,
    FontSizeProps,
    LineHeightProps,
    SpaceProps {
  variant?: string;
  as?: string;
  color?: string;
}

export const Typography: React.FC<Props> = ({
  children,
  as,
  variant,
  ...others
}) => {
  const mapping = styleMapping[variant] || styleMapping.default;
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
