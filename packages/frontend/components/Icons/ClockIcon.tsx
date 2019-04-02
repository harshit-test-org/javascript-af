import React from 'react';

export const ClockIcon: React.FC<
  React.SVGAttributes<SVGSVGElement>
> = props => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    {...props}
  >
    <title>Clock Icon</title>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
