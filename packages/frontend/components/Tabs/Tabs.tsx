import React from 'react';
import styled from '../../lib/styled-components';
import { ITabProps } from './Tab';

const StyledTab = styled.div`
  display: flex;
`;

export type TabChangeHandler = (
  event: React.MouseEvent,
  newValue: number
) => any;

export interface ITabsProps {
  onChange: TabChangeHandler;
  children: JSX.Element | JSX.Element[];
}

export const Tabs: React.FC<ITabsProps> = ({ children, onChange }) => {
  const childrenWithOnchange = React.Children.map<
    JSX.Element | null,
    React.ReactElement<ITabProps>
  >(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return null;
    }
    return React.cloneElement(child, {
      onChange,
      index,
    });
  });

  return <StyledTab>{childrenWithOnchange}</StyledTab>;
};
