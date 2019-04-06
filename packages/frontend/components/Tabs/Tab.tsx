import React from 'react';
import clsx from 'clsx';
import { Button } from '../Button';

export interface ITabProps {
  onChange?: (event: React.MouseEvent, newValue: number) => any;
  index?: number;
  active?: boolean;
}

export const Tab: React.FC<ITabProps> = ({
  onChange,
  active,
  index,
  ...rest
}) => {
  function handleChange(event: React.MouseEvent) {
    onChange!(event, index!);
  }
  return (
    <Button
      className={clsx({ active })}
      noRipple
      px={2}
      pt="3px"
      pb="12px"
      variant="tabs"
      onClick={handleChange}
      {...rest}
    >
      {rest.children}
    </Button>
  );
};
