import React from 'react';
import { Button } from '../Button';

export interface ITabProps {
  onChange?: (event: React.MouseEvent, newValue: number) => any;
  index?: number;
}

export const Tab: React.FC<ITabProps> = ({ onChange, index, ...rest }) => {
  function handleChange(event: React.MouseEvent) {
    onChange!(event, index!);
  }
  return (
    <Button onClick={handleChange} {...rest}>
      {rest.children}
    </Button>
  );
};
