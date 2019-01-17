import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  box-shadow: 1px 4px 9px rgba(0, 0, 0, 0.16);
  height: 300px;
  width: 300px;
  border-radius: 44px;
`;

export const Card = () => {
  return <StyledCard />;
};
