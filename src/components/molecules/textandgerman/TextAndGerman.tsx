import PlanetEarth from '@/components/atoms/icons/PlanetEarth';
import React from 'react';
import styled from 'styled-components';

const TextAndGerman = () => {
  return (
    <Container>
      <PlanetEarth />
      <Span>آلمان</Span>
    </Container>
  );
};

export default TextAndGerman;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Span = styled.span`
  color: #515b68;
  font-size: 17px;
`;
