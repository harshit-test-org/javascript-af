import React from 'react';
import { Typography, ITypographyProps } from '../Typography';
import { MONO_FAMILY } from '../shared';

export interface IProps {
  heading?: string;
  tags: string[];
  prefix?: string;
  typographyProps?: ITypographyProps;
}

export const Tags: React.FC<IProps> = ({
  tags = [],
  heading = '',
  prefix,
  typographyProps = {
    color: 'blue',
    variant: 'default',
    fontFamily: MONO_FAMILY,
    as: 'a',
    cursor: 'pointer',
  },
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
          {...typographyProps}
        >
          #{tag}{' '}
        </Typography>
      ))
      /* eslint-enable react/no-array-index-key */
      }
    </div>
  );
};
