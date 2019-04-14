import React from 'react';
import { Typography, variants } from '../Typography';
import { MONO_FAMILY } from '../shared';

export interface IProps {
  heading?: string;
  tags: string[];
  color?: string;
  prefix?: string;
  variant?: variants;
}

export const Tags: React.FC<IProps> = ({
  tags = [],
  heading = '',
  color = 'blue',
  prefix,
  variant = 'default',
}) => {
  return (
    <div
      css="
          text-transform: uppercase;
          font-weight: bold;
          letter-spacing: 0.8px;
        "
    >
      {/* eslint-disable react/no-array-index-key */
      tags.map((tag, index) => (
        <Typography
          key={`${prefix && prefix}-${heading}-${tag}-${index}`}
          color={color}
          fontFamily={MONO_FAMILY}
          variant={variant}
          as="a"
          cursor="pointer"
        >
          #{tag}{' '}
        </Typography>
      ))
      /* eslint-enable react/no-array-index-key */
      }
    </div>
  );
};
